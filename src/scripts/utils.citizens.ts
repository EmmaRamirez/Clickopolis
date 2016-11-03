import { notify } from './notify';
import { Utils, iterateOverNodelist } from './utils';
import Civilization = require('./civilization');
import { Citizen } from './citizen';
import Game = require('./game');
import { setLandPercent, setLandAmount } from './utils.land';
import { updateCashPM } from './utils.economy';
import { updateTooltip } from './tooltips';
import { citizenFunction } from './data.citizenfunctions';
import { updatePopulationEmployed } from './utils.population';
import Collection = require('./collection');

const u = new Utils();

export function populateCitizens(citizens:Collection<Citizen>) {
  let citizensContainer = u.elt('.citizens');
  citizensContainer.innerHTML = '';

  for (let i = 0; i < citizens.items.length; i++) {
    let c = citizens.items[i];
    //let d:string;
    citizensContainer.innerHTML += `
    <div class='row citizen-${c.name}' data-visible='${c.visible}' data-enabled='${c.enabled}' data-id='${i}' style='border-right: 4px solid ${c.color}'>
      <strong style='display: inline-block; text-align: center; width: 3rem;' class='${c.name}-num-text'>${c.amount}</strong> 
      <button data-citizen='${c.name}' data-citizen-amount='-1'>-1</button>
      <span class='citizen-icon'><img src='img/${c.image}.png'></span>
      <button data-citizen='${c.name}' data-citizen-amount='1'>+1</button>
      <span class='citizen-info'>
        ${u.capitalize(c.name + 's')}: <span class='contrib' data-citizen='${c.name}'>${u.setContributions(c) }</span>
      </span>
    </div>
    `;
  }
}

export function generateCitizenPercents(citizens:Collection<Citizen>, playerCiv) {
  let citizenBar = u.elt('.citizen-percentages');
  let pop = playerCiv.population;
  citizenBar.innerHTML = '';
  for (let i = 0; i < citizens.items.length; i++) {
    let c = citizens.items[i];
    if (c.amount > 0) {
      let bar = document.createElement('div');
      bar.setAttribute('data-tooltip', `${u.capitalize(c.name + 's')}: ${Math.floor((c.amount / pop * 100))}%`)
      bar.style.width = `${(c.amount / pop) * 100}%`;
      bar.style.height = '1rem';
      bar.style.background = c.color;
      updateTooltip(bar);
      citizenBar.appendChild(bar);
    }
  }
}

export function citizenClick(citizens:Collection<Citizen>, playerCiv:Civilization, options) {
  let citizenButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('button[data-citizen]');
  [].forEach.call(citizenButtons, function (item:any) {
    item.addEventListener('click', function () {
      let citizen:string = this.getAttribute('data-citizen');
      let sel:string = '.' + citizen + '-num-text';
      let amount:number = parseInt(this.getAttribute('data-citizen-amount'));
      if (citizens.get(citizen).name === 'ruler') {
        notify({message:'You can\'t have more than one ruler!'});
      } else {
        if (citizens.get(citizen).amount === 0 && amount < 0 || (citizens.get(citizen).amount + amount) < 0) {
          notify({message:'You can\'t go below zero ' + citizens.get(citizen).name + 's!'}, true);
        } else {
          if ((playerCiv.population - playerCiv.populationEmployed) === 0 && amount > 0) {
            notify({message:'All of your population is already employed!'}, true);
          } else {
            if (amount > (playerCiv.population - playerCiv.populationEmployed)) {
              notify({ message: 'You cannot assign more ' + citizens.get(citizen).name+ 's than you have unemployed citizens!'}, true);
            } else {
              addCitizen(citizen, amount, sel, citizens, playerCiv, options);
            }
          }
        }
      }
    });
  });
}

export function citizenAmountHandler() {
  let setterInput = u.elt('.citizen-amount-setter');

  setterInput.addEventListener('change', () => {
    iterateOverNodelist(u.elt('[data-citizen-amount]', true), (item, index) => {
      let amount = Number(item.getAttribute('data-citizen-amount'));
      amount > 0 ? amount = setterInput.value : amount = -1 * setterInput.value;
      item.setAttribute('data-citizen-amount', amount);
      item.textContent = amount;
    }, this);
  })
}

export function addCitizen(citizen:string, amount: number, sel:string, citizens:Collection<Citizen>, playerCiv, options) {
  // let options:citizenFunctionOptions = {
  //   citizens: citizens,
  //   playerCiv: playerCiv,
  //   resources: resources,
  //   military: military,
  //   amount: amount,
  // };
  options.amount = amount;
  citizens.get(citizen).amount += amount;
  playerCiv.populationEmployed += amount;
  updatePopulationEmployed(playerCiv);

  //citizens.get(citizen).func(amount, resources, playerCiv);

  citizenFunction(citizen, options);

  //console.log(citizens.get(citizen).func);
  u.elt(sel).textContent = citizens.get(citizen).amount;
  generateCitizenPercents(citizens, playerCiv);
}