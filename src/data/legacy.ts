import Collection = require('./collection');
import Civilization = require('./civilization');
import Legacy = require('./legacy');
import { notify } from './notify';
import { Utils } from './utils';

let empireOfTheArts = new Legacy(
    'Empire of the Arts',
    'culture',
    0,
    50,
    1,
    '+5% <img src="img/culture.png">'
  );

let economicSuperpower = new Legacy(
    'Economic Superpower',
    'economy',
    0,
    100,
    1,
    '+5% <img src="img/coin.png">'
  );

let divineKingdom = new Legacy(
    'Divine Kingdom',
    'faith',
    0,
    50,
    1,
    '+5% <img src="img/faith.png">'
  );

export let legacies = new Collection<Legacy>('legacies', [
  empireOfTheArts,
  economicSuperpower,
  // neverSettingSun,
  // revolutionOfLetters,
  // trueEmpire,
  divineKingdom,
  // worldStagePlayer
]);
