import { Utils } from './utils';
import { updateTooltip, log } from '../classes';

const u = new Utils();

export function populateAchievements(achievements):void {
  let achievementsContainer = u.elt('.achievements');
  achievementsContainer.innerHTML = '';

  for (let i = 0; i < achievements.items.length; i++) {
    let a = achievements.items[i];
    achievementsContainer.innerHTML += `
      <div class='achievement ${a.className}' data-unlocked='${a.unlocked}' data-tooltip='${a.name}: ${a.description}'></div>
    `;
    updateTooltip(u.elt(`.${a.className}`));
  }
}
