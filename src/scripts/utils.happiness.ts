import { updateTooltip } from './tooltips';
import { Utils } from './utils';

const u = new Utils();

export function generateHappinessTooltip(playerCiv) {
  let happinessElement = u.elt('.metric-happiness');
  let happinessBreakdown = `
    <ul>
      <li>Base Happiness: ${playerCiv.happinessBase}</li>
      <li>Happiness from Buildings: ${playerCiv.happinessFromBuildings}</li>
      <li>Happiness from Wonders: ${playerCiv.happinessFromWonders}</li>
      <li>Happiness from Citizens: ${playerCiv.happinessFromCitizens}</li>
      <li>Happiness from Resources: ${playerCiv.happinessFromResources}</li>
      <li>Happiness from Culture: ${playerCiv.happinessFromCultureBonuses}</li>
      <li>Happiness from Faith: ${playerCiv.happinessFromFaithBonuses}</li>
      <li>Happiness Modifier: ${playerCiv.happinessMod}</li>
      <li>Total: ${playerCiv.happiness}</li>
    </ul>
  `;
  happinessElement.setAttribute('data-tooltip', happinessBreakdown);

  updateTooltip(happinessElement);
}

export function updateHappinessMetric(playerCiv) {
  u.elt('.civ-metric.metric-happiness').innerHTML = `<img src="img/happy.png"> ${playerCiv.happiness}`;
  generateHappinessTooltip(playerCiv);
}

export function calculateHappiness(playerCiv) {
  let prevHappiness = playerCiv.happiness;
  let happiness = playerCiv.happinessBase + playerCiv.happinessFromBuildings + playerCiv.happinessFromWonders + playerCiv.happinessFromCitizens + playerCiv.happinessFromResources + playerCiv.happinessFromResources;
  happiness = playerCiv.happinessMod * happiness;
  playerCiv.happiness = happiness;
  prevHappiness === playerCiv.happiness ? undefined : updateHappinessMetric(playerCiv);
}
