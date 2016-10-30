import { Utils, iterateOverNodelist } from './utils';
import FaithBonus = require('./faithbonus');
import FaithTier = require('./faithtier');
import Civilization = require('./civilization');
import faithBonusData = require('./data.faithbonus');
import resourceData = require('./data.resource');


let faithBonuses = faithBonusData;
let resources = resourceData;

import { notify } from './notify';

const u = new Utils();

export function addFaith(playerCiv) {
  let faithUpgrades = u.elt('.can-purchase-faith-upgrades');
  playerCiv.faith += playerCiv.faithPM / 60;

  if (playerCiv.faith > playerCiv.faithCost) {
    faithUpgrades.style.display = 'inline-block';
  } else {
    faithUpgrades.style.display = 'none';
  }
}

export function updateFaithElts(playerCiv) {
  iterateOverNodelist(u.elt('.faith-PM', true), (item) => {
    item.textContent = playerCiv.faithPM;
  }, this);

  iterateOverNodelist(u.elt('.faith-total', true), (item) => {
    item.textContent = Math.floor(playerCiv.faith);
  }, this);
}

export function populateFaithBonuses(playerCiv:Civilization) {
  let fbContainer = u.elt('.fb-container');
  fbContainer.innerHTML = '';

  for (let i = 0; i < faithBonuses.items.length; i++) {
    let fb = faithBonuses.items[i];
    fbContainer.innerHTML += `
    <div class='faith-bonus' data-enabled='${fb.enabled}' data-purchased='${fb.purchased}' data-id='${i}' data-faith-bonus='${fb.name}'>
      <span class='faith-bonus-cost' title='Actual: ${playerCiv.faithCost * fb.tier}'>${u.abbrNum(playerCiv.faithCost * fb.tier)}</span>
      <span class='faith-bonus-name'>${fb.name}</span>
      <span class='faith-bonus-effect'>${fb.effect}</span>
    </div>
    `;
  }
}

export function faithBonusClick(playerCiv:Civilization) {
  //playerCiv.faithPM += 30;
  //updateFaithElts();
  let fbs = document.querySelectorAll('.faith-bonus');
  [].forEach.call(fbs, function (item:any) {
    item.addEventListener('click', function () {
      console.log('This works.');
      let fb = item.getAttribute('data-faith-bonus');
      let faithCost = playerCiv.faithCost * faithBonuses.get(fb).tier
      if (playerCiv.faith > faithCost) {
        if (faithBonuses.get(fb).purchased) {
          notify({message: `You already purchased ${faithBonuses.get(fb).name}!`}, true);
        } else {
          if (faithBonuses.get(fb).enabled) {
            playerCiv.faith -= faithCost;
            faithBonuses.get(fb).purchased = true;
            item.setAttribute('data-purchased', 'true');
            console.log(item.getAttribute('data-purchased'));
            faithBonuses.get(fb).func(resources, playerCiv);
            playerCiv.faithCost = Math.floor((playerCiv.faithCost + (playerCiv.population * .05) + 5));
            console.debug(playerCiv.faithCost.toString());
            if (faithBonuses.get(fb).faithTier === FaithTier.Pantheon) {
              playerCiv.faithBonusPantheonTotal += 1;
              if (playerCiv.faithBonusPantheonTotal >= playerCiv.faithBonusPantheonLimit) {
                disableBonuses(FaithTier.Pantheon);
                enableBonuses(FaithTier.Organized);
              }
            }
            updateFaithElts(playerCiv);
            updateFaithBonuses(playerCiv);
          } else {
            notify({ message: 'You cannot yet purhcase this Faith Bonus. Consider increasing your faith and purchasing other Faith Bonuses.' });
          }
        }
      } else {
        notify({message: `You don't have enough faith to purchase this bonus!`}, true);
      }
    });
  });
}

export function disableBonuses(tier:FaithTier) {
  for (let i = 0; faithBonuses.items.length; i++) {
    let fb = faithBonuses.items[i];
    if (fb.faithTier === tier && fb.purchased === false) {
      fb.enabled = false;
      u.elt('.faith-bonus', true)[i].setAttribute('data-enabled', false);
    }
  }
}

export function enableBonuses(tier:FaithTier) {
  for (let i = 0; faithBonuses.items.length; i++) {
    let fb = faithBonuses.items[i];
    if (fb.faithTier === tier) {
      fb.enabled = true;
      u.elt('.faith-bonus', true)[i].setAttribute('data-enabled', true);
    }
  }
}

export function updateFaithBonuses(playerCiv) {
  let fbCosts = u.elt('.faith-bonus-cost', true);
  let fbs = u.elt('.faith-bonus', true);
  // TODO: Fix calculation
  iterateOverNodelist(fbCosts, (item, index) => {
    let fb = fbs[index].getAttribute('data-faith-bonus');
    item.innerHTML = u.abbrNum(playerCiv.faithCost * faithBonuses.get(fb).tier);
  }, this);
}
