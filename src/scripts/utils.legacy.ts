import Civilization = require('./civilization');
import Legacy = require('./legacy');
import legacyData = require('./data.legacy');
import notify = require('./notify');
import Utils = require('./utils');
import { generateTooltips, updateTooltip } from './tooltips';

let u = new Utils();

let legacyBonuses = legacyData;

export function populateLegacy() {
  let legacyContainer = u.elt('.legacy-bonuses');
  legacyContainer.innerHTML = '';

  for (let i = 0; i < legacyBonuses.items.length; i++) {
    let l = legacyBonuses.items[i];
    legacyContainer.innerHTML += `
      <div class='legacy-bonus' data-tooltip='${l.descriptions[l.level - 1]}' data-legacy='${l.name}'>
        <span class='legacy-level'>
          Level<br>
          ${l.level}
        </span>
        <span class='legacy-category'>
          <img src='img/${l.type}.png'>
        </span>
        <span class='legacy-name'>${l.name}</span>
        <span class='legacy-cost'>
          <img src='img/legacy-alt.png'><br>
          ${l.cost}
        </span>
      </div>
    `;
  }
}

export function legacyBonusClick(playerCiv) {
  let legacyBonusEls = <NodeListOf<HTMLElement>>u.elt('.legacy-bonus', true);

  [].forEach.call(legacyBonusEls, function (item:any, index:number) {
    item.addEventListener('click', function () {
      let legacyBonus = item.getAttribute('data-legacy');
      let lb = legacyBonuses.get(legacyBonus);

      if (playerCiv.legacy >= lb.cost) {
        playerCiv.legacy -= lb.cost;
        notify({message: `You upgraded the Legacy of ${lb.name}!`});
        lb.level++;
        lb.cost *= 5;
        item.innerHTML = `
        <span class='legacy-level'>
          Level<br>
          ${lb.level}
        </span>
        <span class='legacy-category'>
          <img src='img/${lb.type}.png'>
        </span>
        <span class='legacy-name'>${lb.name}</span>
        <span class='legacy-cost'>
          <img src='img/legacy-alt.png'><br>
          ${u.abbrNum(lb.cost, 2)}
        </span>`;
        lb.func(lb.level, playerCiv);
        item.setAttribute('data-tooltip', lb.descriptions[lb.level - 1]);
        updateTooltip(item);
      } else {
        notify({message: `You don't have enough legacy points to purchase this upgrade!`})
      }
      updateLegacyElts(playerCiv);
    });
  });
}

export function updateLegacyElts(playerCiv) {
  u.elt('.legacy-points').textContent = playerCiv.legacy;
}

export function legacyBonusCheck(playerCiv) {
  let legacyBonusEls = <NodeListOf<HTMLElement>>u.elt('.legacy-bonus', true);

  [].forEach.call(legacyBonusEls, function (item:any, index:number) {
    let legacyBonus = item.getAttribute('data-legacy');
    let lb = legacyBonuses.get(legacyBonus);

    if (playerCiv.legacy < lb.cost) {
      item.style.opacity = '0.2';
    }

    if (lb.level === 6) {
      item.innerHTML = `
      <span class='legacy-level'>
        Level<br>
        MAX
      </span>
      <span class='legacy-category'>
        <img src='img/${lb.type}.png'>
      </span>
      <span class='legacy-name'>${lb.name}</span>
      <span class='legacy-cost'>
        <img src='img/legacy-alt.png'><br>
        MAX
      </span>`;
      item.style.pointerEvents = 'none';
      item.className += ' maxed-out';
    }
  });
}
