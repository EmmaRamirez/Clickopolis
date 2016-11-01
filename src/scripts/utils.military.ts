import { Utils, iterateOverNodelist } from './utils';
import { Soldier } from './soldier';
import { Citizen } from './citizen';
import { notify } from './notify';
import Civilization = require('./civilization');
import Collection = require('./collection');

const u = new Utils();

function renderUnitStats(unit:Soldier) {
	return `
			<span class='base-stats' data-tooltip='Base strength/defense of ${unit.plural}'>
        <span class='strength'><img src='img/strength.png'> ${unit.baseStrength}</span>
        <span class='defense'><img src='img/defense.png'> ${unit.baseDefense}</span>
      </span>
      <span class='cummulative-stats' data-tooltip='Total strength/defense of ${unit.plural}'>
        <span class='strength'><img src='img/strength.png'> ${unit.baseStrength * unit.amount}</span>
        <span class='defense'><img src='img/defense.png'> ${unit.baseDefense * unit.amount}</span>
      </span>`;
}

export function renderUnit(unit:Soldier) {
	return `
		<div class='soldier-assignment ${u.dasherize(unit.name)}' data-assignment='${u.dasherize(unit.name)}'>
      <img src='img/${u.dasherize(unit.plural)}.png'>
      <span class='unit-name'>${unit.plural}</span>
      <input class='military-assignment-input' type='number' min='0' value='${unit.amount}' data-unit='${unit.name}' data-enabled='${unit.enabled}' />
      <span class='unit-stats-wrapper'>
      	${ renderUnitStats(unit) }
      </span>
      <span class='unit-upkeep'>
      	${ unit.upkeep } PM <img src='img/coin.png'>
      </span>
    </div>
	`;
}

function getTotal(array:any[], property: string) {
	return array.reduce((prev, curr) => {
		return [...prev, curr[property]];
	}, []).reduce((prev, curr) => {
		return prev + curr;
	});
}

function calculateTotalStrength(playerCiv:Civilization) {
	playerCiv.strength = (playerCiv.strengthBase + playerCiv.strengthFromMilitary + playerCiv.strengthFromBuildings) * playerCiv.strengthMod;
	u.elt('.military-strength-text').textContent = playerCiv.strength;
}

function calculateTotalDefense(playerCiv:Civilization) {
	playerCiv.defense = (playerCiv.defenseFromMilitary + playerCiv.defenseFromBuildings) * playerCiv.defenseMod;
	u.elt('.military-defense-text').textContent = playerCiv.defense;
}

function getTotalUnits(military:Collection<Soldier>) {

	let amounts = military.items.reduce((prev, curr) => {
	  return [...prev, ...curr.amount];
	}, []).reduce((prev, curr) => {
		return prev + curr;
	})

	return amounts;
}

function calculateTotalMilitaryStats(military:Collection<Soldier>, soldier:Citizen, playerCiv:Civilization) {
	console.log(soldier);

	let statsContainer = u.elt('.assignment-total');
	let totalAssigned = u.elt('.soldiers-assigned');
	//let totalUnits = 0;
	let totalStrength = 0;
	let totalDefense = 0;
	let totalUpkeep = 0;

	for (let i = 0; i < military.items.length; i++) {
		let unit:Soldier = military.items[i];

		//totalUnits += unit.amount;
		totalStrength += unit.baseStrength * unit.amount;
		totalDefense += unit.baseDefense * unit.amount;
		totalUpkeep += unit.upkeep * unit.amount;
	}

	playerCiv.strengthFromMilitary = totalStrength;
	playerCiv.defenseFromMilitary = totalDefense;
	playerCiv.cashPMFromMilitary = totalUpkeep * -1;

	statsContainer.innerHTML = `
			<img src='img/total.png'>
			<span class='unit-name'>Total</span>
			<input type='number' min='0' value='${getTotalUnits(military)}' readonly>
			<span class='base-stats' style='opacity: 0'>
        <span class='strength'><img src='img/strength.png'> 0</span>
        <span class='defense'><img src='img/defense.png'> 0</span>
      </span>
			<span class='cummulative-stats' data-tooltip='Total strength/defense of all your Units'>
        <span class='strength'><img src='img/strength.png'> ${totalStrength}</span>
        <span class='defense'><img src='img/defense.png'> ${totalDefense}</span>
      </span>
      <span class='unit-upkeep'>
      	${totalUpkeep} PM <img src='img/coin.png'>
      </span>
      `;

  totalAssigned.textContent = `${getTotalUnits(military)} / ${soldier.amount} Assigned`;

  calculateTotalStrength(playerCiv);
  calculateTotalDefense(playerCiv);

}

export function populateMilitary(military:Collection<Soldier>, soldier:Citizen, playerCiv:Civilization) {
	console.log(soldier.amount);

	let container = u.elt('.military-assignments');
	let assignmentsHTML = '';
	

	for (let i = 0; i < military.items.length; i++) {
		let unit:Soldier = military.items[i];
		assignmentsHTML += unit.enabled ? renderUnit(unit) : '<span></span>';
	}

	assignmentsHTML += `<div class='soldier-assignment assignment-total'></div>`;

	container.innerHTML = assignmentsHTML;
	calculateTotalMilitaryStats(military, soldier, playerCiv);
}


export function militaryUnitChange(military:Collection<Soldier>, soldier:Citizen, playerCiv:Civilization) {
	iterateOverNodelist(u.elt('.military-assignment-input', true), (item:HTMLInputElement, index) => {
		item.addEventListener('change', (event:Event) => {
			let unitName = item.getAttribute('data-unit');
			let unit:Soldier = military.get(unitName);
			let value = Number(item.value);


			let delta = value - unit.amount;

			console.log('value', value, 'delta', delta);

			if (delta > 0) {
				if (getTotalUnits(military) < soldier.amount) {
					if (getTotalUnits(military) + delta > soldier.amount) {
						// notify({ message: `Try increasing your soldier amounts at a lower rate, please.`, icon: 'military' });
						unit.amount = Math.abs(unit.amount + (delta - (delta + getTotalUnits(military)) - (soldier.amount - getTotalUnits(military))));
						item.value = unit.amount.toString();
					} else {
						unit.amount = value;
					}
				} else {
					item.value = unit.amount.toString();
					notify({ message: `You have assigned all your soldiers!`, icon: 'military' });
				}
			} else {
				if (getTotalUnits(military) <= 0) {
					item.value = unit.amount.toString();
				} else {
					unit.amount = value;
				}
				// don't do the thing!
			}

			item.parentElement.querySelector('.unit-stats-wrapper').innerHTML = renderUnitStats(unit);
			calculateTotalMilitaryStats(military, soldier, playerCiv);

		});
	}, this);
}