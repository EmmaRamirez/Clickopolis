import { updateTooltip } from './tooltips';
import { Utils } from './utils';
import Collection = require('./collection');
import Civilization = require('./civilization');
import Resource = require('./resource');
import { updateGoldenAgePoints } from './utils.goldenage';

const u = new Utils();

export function generateHappinessTooltip(playerCiv:Civilization) {
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
      <li>Happiness from Events: ${playerCiv.happinessFromEvents}</li>
      <li>Happiness Modifier: ${playerCiv.happinessMod}</li>
      <li>Total: ${playerCiv.happiness}</li>
    </ul>
  `;
  happinessElement.setAttribute('data-tooltip', happinessBreakdown);

  updateTooltip(happinessElement);
}

export function updateHappinessMetric(playerCiv) {
  u.elt('.civ-metric.metric-happiness').innerHTML = `<img src="img/happy.png"> ${playerCiv.happiness}`;
  updateGoldenAgePoints(playerCiv);
  generateHappinessTooltip(playerCiv);
}

export function calculateHappiness(playerCiv, resources:Collection<Resource>) {
  let prevHappiness = playerCiv.happiness;
  let happinessFromResources = function () {
    let gold = resources.get('gold').total * resources.get('gold').happinessBonus;
    let silver = resources.get('silver').total * resources.get('silver').happinessBonus;
    let gems = resources.get('gems').total * resources.get('gems').happinessBonus;
    let whale = resources.get('whale').total * resources.get('whale').happinessBonus;
    return gold + silver + gems + whale;
  };
  playerCiv.happinessFromResources = happinessFromResources();
  let happiness = playerCiv.happinessBase + playerCiv.happinessFromBuildings + playerCiv.happinessFromWonders + playerCiv.happinessFromCitizens + playerCiv.happinessFromResources + playerCiv.happinessFromResources;
  happiness = playerCiv.happinessMod * happiness;
  playerCiv.happiness = happiness;
  prevHappiness === playerCiv.happiness ? undefined : updateHappinessMetric(playerCiv);
}
