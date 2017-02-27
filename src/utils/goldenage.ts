import { Utils, iterateOverNodelist } from './utils';
import { Civilization } from '../classes';
const u = new Utils();

export function addGoldenAgePoints(playerCiv:Civilization) {
  let goldenAgeProgress = u.elt('.golden-age-progress');
  let goldenAgeMeter = u.elt('.metric-golden-age');
  let goldenAgePoints = playerCiv.happiness - playerCiv.anger;
  playerCiv.goldenAgeProgress += goldenAgePoints;
  goldenAgeProgress.textContent = u.abbrNum(playerCiv.goldenAgeProgress);

  if (playerCiv.goldenAgeProgress > 0) {
    let goldenAgePercent:string = ((playerCiv.goldenAgeProgress / playerCiv.goldenAgeGoal) * 100) + '%';
    let bgString:string = u.progressBar(goldenAgePercent, '#BDBD6C', '#222');
    goldenAgeMeter.style.background = bgString;
  } else {
    let goldenAgePercent:string = ((playerCiv.goldenAgeProgress / playerCiv.goldenAgeGoal) * 100) + '%';
    let bgString:string = u.progressBar(goldenAgePercent, '#DB3535', '#DB3535');
    goldenAgeMeter.style.background = bgString;
  }


  if (goldenAgePoints > 0) {
    u.elt('.metric-golden-age-points').style.background = '#212006';
  } else {
    u.elt('.metric-golden-age-points').style.background = '#DB3535';
  }
}

export function updateGoldenAgePoints(playerCiv:Civilization) {
  u.elt('.metric-golden-age-points').innerHTML = `${playerCiv.happiness - playerCiv.anger} <img src='img/golden-age.png'>`;
}
