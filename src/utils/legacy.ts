import { legacies } from '../data';
import { Utils } from './utils';
import { Civilization, Legacy, generateTooltips, updateTooltip } from '../classes';

let u = new Utils();

let legacyBonuses = legacies;

function renderLegacyLevel(lb) {
  return `Level ${lb.level}`;
}

export function updateLegacy(playerCiv, amount) {
  playerCiv.legacy += amount;
  legacyBonusCheck(playerCiv);
}

export function calculateLegacy(playerCiv) {

}

function renderLegacyData(lb, playerCiv) {
  let lbPercent:string = ((lb.level / lb.maxLevel) * 100) + '%';
  let bgString:string = u.progressBar(lbPercent, 'red', 'white');
  return `<div class='legacy-bonus-name'>
            <img src='img/${lb.type}.png'>
            ${lb.name}
          </div>
          <div class='legacy-bonus-progress' style='background-image: ${bgString}'>
            <div class='legacy-bonus-progress-inner'></div>
          </div>`
}

function renderLegacyUpgradeData(lb) {
  return `${lb.cost} <img src='img/legacy.png'> ${lb.cost > 1 ? 'Points' : 'Point'}
          <br>
          ${lb.description}
          <br>
          +${lb.level * 5}% total`;
}

function renderLegacyBonus(lb:Legacy, playerCiv) {

  return `
          <div class='legacy-bonus-level'>
            <div class='legacy-bonus-level-text'>${ renderLegacyLevel(lb) }</div>
          <br>
          <div class='legacy-bonus-upgrade' data-name='${lb.name}'>
            Upgrade
          </div>
        </div>
        <div class='legacy-bonus-data'>
           ${ renderLegacyData(lb, playerCiv) }
        </div>
        <div class='legacy-bonus-total-upgrade'>
          ${ renderLegacyUpgradeData(lb) }
        </div>`;
}

export function populateLegacy(playerCiv) {
  let legacyContainer = u.elt('.legacy-bonuses');
  legacyContainer.innerHTML = '';

  for (let i = 0; i < legacyBonuses.items.length; i++) {
    let lb = legacyBonuses.items[i];

    legacyContainer.innerHTML += `
      <div class='legacy-bonus' data-legacy-bonus='${lb.name}'>
        ${renderLegacyBonus(lb, playerCiv)}
      </div>
    `;
  }
}

function legacyBonusClickEvent(item, playerCiv) {
    let legacyBonus = item.getAttribute('data-name');
    let lb:Legacy = legacyBonuses.get(legacyBonus);

    let legacyBonusElt = u.elt(`[data-legacy-bonus="${lb.name}"]`);

    console.log(legacyBonus, lb);

    if (playerCiv.legacy >= lb.cost && lb.level < lb.maxLevel) {
      playerCiv.legacy -= lb.cost;
      lb.level += 1;
      lb.cost = Math.ceil(1 * Math.pow(1.25, lb.level) + 2);

      legacyBonusElt.querySelector('.legacy-bonus-level-text').textContent = renderLegacyLevel(lb);
      legacyBonusElt.querySelector('.legacy-bonus-data').innerHTML = renderLegacyData(lb, playerCiv);
      legacyBonusElt.querySelector('.legacy-bonus-total-upgrade').innerHTML = renderLegacyUpgradeData(lb);

      if (lb.type === 'culture') {
        playerCiv.culturePMMod += .05;
      } else if (lb.type === 'faith') {
        playerCiv.faithPMMod += .05;
      } else if (lb.type === 'economy') {
        playerCiv.cashPMMod += .05;
      }

      //notify({message: `You upgraded the Legacy of ${lb.name}!`}, true);

    } else {
      //notify({message: `You don't have enough legacy points to purchase this upgrade!`});
    }
    updateLegacyElts(playerCiv);
    legacyBonusCheck(playerCiv);
    //item.removeEventListener('click', legacyBonusClickEvent(item, playerCiv));
    //item.addEventListener('click', legacyBonusClickEvent(item, playerCiv));
    //legacyBonusClick(playerCiv);
}

export function legacyBonusClick(playerCiv) {
  let legacyBonusEls = <NodeListOf<HTMLElement>>u.elt('.legacy-bonus-upgrade', true);

  [].forEach.call(legacyBonusEls, function (item:any, index:number) {
    item.addEventListener('click', () => { legacyBonusClickEvent(item, playerCiv) });
  });
}

export function updateLegacyElts(playerCiv) {
  u.elt('.legacy-points').textContent = playerCiv.legacy;
}

export function legacyBonusCheck(playerCiv) {
  let legacyBonusElts = <NodeListOf<HTMLElement>>u.elt('.legacy-bonus', true);

  for (let i = 0; i < legacyBonuses.items.length; i++) {
    if (legacyBonuses.items[i].cost > playerCiv.legacy) {
      legacyBonusElts[i].setAttribute('style', 'opacity: 0.5; -webkit-filter: grayscale(90%); filter: grayscale(90%); pointer-events: none; ');
    }
  }
}
