import { Utils } from './utils';
import { updateTooltip } from '../classes';

const u = new Utils();

export function setLandAmount(playerCiv) {
  let land = playerCiv.land;
  let landElement = u.elt('.metric-land');

  let populationDensity = Math.floor(playerCiv.populationReal / playerCiv.land);

  landElement.setAttribute('data-tooltip', `Population Density: ${populationDensity} / km<sup>2</sup>`);
  updateTooltip(landElement);

  landElement.innerHTML = `${u.abbrNum(Math.floor(playerCiv.land))} km<sup>2</sup>&nbsp;  <img src='img/land.png'>`;
}

export function setLandPercent(playerCiv, game) {
  let landPercent:any = (playerCiv.land / game.totalLand) * 100;
  let landPercentText = u.elt('.land-percent-text');

  if (landPercent.toFixed(4) < 0.0001) {
    landPercent = '< 0.001%';
  } else {
    landPercent = landPercent.toFixed(4) + '%';
  }

  landPercentText.textContent = landPercent;
}
