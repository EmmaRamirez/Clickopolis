import Utils = require('./utils');
import FaithBonus = require('./faithbonus');
import Civilization = require('./civilization');
import faithBonusData = require('./data.faithbonus');
import resourceData = require('./data.resource');


let faithBonuses = faithBonusData;
let resources = resourceData;


import notify = require('./notify');

let u = new Utils();

export function addFaith(playerCiv) {
  playerCiv.faith += playerCiv.faithPM / 60;
}

export function updateFaithElts(playerCiv) {
  u.elt('.faith-PM').textContent = playerCiv.faithPM;
  u.elt('.faith-total').textContent = Math.floor(playerCiv.faith);
}

export function populateFaithBonuses(playerCiv:Civilization, ) {
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

export function faithBonusClick(playerCiv) {
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
          notify({message: `You already purchased ${faithBonuses.get(fb).name}!`});
        } else {
          playerCiv.faith -= faithCost;
          faithBonuses.get(fb).purchased = true;
          item.setAttribute('data-purchased', 'true');
          console.log(item.getAttribute('data-purchased'));
          faithBonuses.get(fb).func(resources, playerCiv);
          playerCiv.faithCost = Math.floor((playerCiv.faithCost + (playerCiv.population * .05) + 5));
          console.debug(playerCiv.faithCost.toString());
          updateFaithElts(playerCiv);
          updateFaithBonuses(playerCiv);
        }
      } else {
        //notify({message: `You don't have enough faith to purchase this bonus!`});
      }
    });
  });
}

export function updateFaithBonuses(playerCiv) {
  let fbCosts = u.elt('.faith-bonus-cost', true);
  let fbs = u.elt('.faith-bonus', true);
  // TODO: Fix calculation
  [].forEach.call(fbCosts, function (item:any, index:number) {
    let fb = fbs[index].getAttribute('data-faith-bonus');
    item.innerHTML = u.abbrNum(playerCiv.faithCost * faithBonuses.get(fb).tier);
  });
}
