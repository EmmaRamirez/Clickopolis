import { updateTooltip } from './tooltips';
import { Utils } from './utils';

const u = new Utils();

export function generatePollutionTooltip(playerCiv) {
  let pollutionElement = u.elt('.metric-pollution');
  let pollutionBreakdown = `
    <ul>
    	<li>Pollution from Population: ${playerCiv.pollutionFromPopulation}</li>
      <li>Pollution from Resources: ${playerCiv.pollutionFromResources}</li>
      <li>Pollution Mod: ${playerCiv.pollutionMod}</li>
      <li>Total: ${playerCiv.pollution}</li>
    </ul>
  `;
  pollutionElement.setAttribute('data-tooltip', pollutionBreakdown);
  updateTooltip(pollutionElement, { offsetX: -40, offsetY: 10 });
}

export function updatePollutionMetric(playerCiv) {
  u.elt('.civ-metric.metric-pollution').innerHTML = `<img src="img/pollution.png"> ${playerCiv.health}`;
  generatePollutionTooltip(playerCiv);
}

export function calculatePollution(playerCiv, resources) {
  let prevPollution = playerCiv.pollution;
  let pollutionFromResources = () => {
  	let oil = resources.get('oil').total;
  	return oil;
  };
  playerCiv.pollutionFromResources = pollutionFromResources();
  let pollution = playerCiv.pollutionFromResources + playerCiv.pollutionFromBuildings + playerCiv.pollutionFromPopulation;
  pollution *= playerCiv.pollutionMod;
  playerCiv.pollution = pollution;
  prevPollution === playerCiv.pollution ? undefined : updatePollutionMetric(playerCiv);
}