import { updateTooltip } from '../classes';
import { Utils } from './utils';

const u = new Utils();

export function generateHealthTooltip(playerCiv) {
  let healthElement = u.elt('.metric-health');
  let healthBreakdown = `
    <ul>
      <li>Base Health: ${playerCiv.healthBase}</li>
      <li>Health from Resources: ${playerCiv.healthFromResources}</li>
      <li>Health from Buildings: ${playerCiv.healthFromBuildings}</li>
      <li>Total: ${playerCiv.health}</li>
    </ul>
  `;
  healthElement.setAttribute('data-tooltip', healthBreakdown);
  updateTooltip(healthElement);
}

export function updateHealthMetric(playerCiv) {
  u.elt('.civ-metric.metric-health').innerHTML = `<img src="img/health.png"> ${playerCiv.health}`;
  generateHealthTooltip(playerCiv);
}

export function calculateHealth(playerCiv, resources) {
  let prevHealth = playerCiv.health;
  let healthFromResources = function () {
    let cattle = resources.get('cattle').total * resources.get('cattle').healthBonus;
    let fish = resources.get('fish').total * resources.get('fish').healthBonus;
    return cattle + fish;
  };
  playerCiv.healthFromResources = healthFromResources();
  let health = playerCiv.healthBase + playerCiv.healthFromResources + playerCiv.healthFromBuildings;
  playerCiv.health = health;
  prevHealth === playerCiv.health ? undefined : updateHealthMetric(playerCiv);
}
