import { Utils, iterateOverNodelist } from './utils';
import { setLandPercent, setLandAmount } from './land';
import { updateCashPM } from './economy';
import { addCitizen } from './citizens';
import { notify, Civilization, Citizen, Game, Era, Collection, updateTooltip } from '../classes';

const u = new Utils();

export function checkUnemployed(playerCiv:Civilization, isWindowActive) {
  if (playerCiv.population !== playerCiv.populationEmployed) {
    notify({message: 'You have unemployed citizens! <img src="img/citizen.png"> Employ them in the citizens panel!'}, isWindowActive);
  }
}

export function updatePopulationEmployed(playerCiv:Civilization):void {
  u.elt('.citizens-population-text').textContent = playerCiv.populationEmployed.toString() + '/' + playerCiv.population.toString();
}

export function checkPopulationGrowthCost(playerCiv:Civilization, resources) {
  let button = document.querySelector('.pop-btn');
  if (playerCiv.populationGrowthCost > resources.get('food').total) {
    button.className = 'disabled pop-btn';
    return false;
  } else {
    button.className = 'pop-btn';
    return true;
  }
}

export function updatePopulation(pop:number, playerCiv:Civilization, game:Game, citizens:Collection<Citizen>, options) {
  let popGrowthCost = u.elt('.pop-growth-cost-text');
  let populationText = u.elt('.population-text');
  let popMetric = u.elt('.metric-population');

  playerCiv.population += pop;
  playerCiv.populationGrowthCost = Math.round((playerCiv.populationGrowthCost) + playerCiv.population);

  populationText.textContent = playerCiv.population.toString();
  popGrowthCost.textContent = u.abbrNum(playerCiv.populationGrowthCost, 2);

  playerCiv.cashPMFromCitizens += pop * 2;
  playerCiv.researchPM += pop * 2;
  playerCiv.angerFromPopulation += pop * 1;
  playerCiv.pollutionFromPopulation += pop * 1;
  let eraPop = () => {
      switch(game.era) {
      case Era.Ancient:
        return 1;
      case Era.Classical:
        return 1.5;
      case Era.Medieval:
        return 1.55;
      case Era.Renaissance:
        return 2;
      case Era.Enlightenment:
        return 2.25;
      case Era.Industrial:
        return 3.5;
      case Era.Modern:
        return 4;
      case Era.Atomic:
        return 6;
      case Era.Information:
        return 8;
      case Era.Future:
        return 10;
      default:
        return 1;
    }
  };
  playerCiv.populationReal = Math.floor((1000  * eraPop() * playerCiv.population) + (Math.random() * 100));
  playerCiv.land += pop * 40 + (Math.random() * 15);
  setLandAmount(playerCiv);
  setLandPercent(playerCiv, game);

  //elt('.research-text').textContent = playerCiv.research.toString();
  u.elt('.cash-from-citizens').textContent = (playerCiv.population - 1) * 2;

  updateCashPM(playerCiv);


  //u.elt('.civ-anger-text').textContent = playerCiv.anger;
  //u.elt('.civ-pollution-text').textContent = playerCiv.pollution;
  addCitizen('farmer', pop, '.farmer-num-text', citizens, playerCiv, options);

  popMetric.setAttribute('data-tooltip', `${u.abbrNum(playerCiv.populationReal) + ' people'}`);
  updateTooltip(popMetric);

  updatePopulationEmployed(playerCiv);

}
