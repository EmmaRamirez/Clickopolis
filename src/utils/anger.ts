import { Utils } from './utils';
import { updateTooltip } from './tooltips';
import { updateGoldenAgePoints } from './utils.goldenage';


const u = new Utils();

export function generateAngerTooltip(playerCiv) {
  let angerElement = u.elt('.metric-anger');
  let angerBreakdown = `
    <ul>
      <li>Anger from Population: ${playerCiv.angerFromPopulation}</li>
      <li>Anger Modifier: ${playerCiv.angerMod}</li>
      <li>Total: ${playerCiv.anger}</li>
    </ul>
  `;
  angerElement.setAttribute('data-tooltip', angerBreakdown);
  updateTooltip(angerElement);
}

export function updateAngerMetric(playerCiv) {
  u.elt('.civ-metric.metric-anger').innerHTML = `<img src="img/angry.png"> ${playerCiv.anger}`;
  updateGoldenAgePoints(playerCiv);
  generateAngerTooltip(playerCiv);
}

export function calculateAnger(playerCiv) {
  let prevAnger = playerCiv.anger;
  let anger = playerCiv.angerFromPopulation;
  anger = playerCiv.angerMod * anger;
  playerCiv.anger = anger;
  prevAnger === playerCiv.anger ? undefined : updateAngerMetric(playerCiv);
}