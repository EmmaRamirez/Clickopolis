import { Utils } from '../utils';
import { Wonder, Collection, Resource, Building, Civilization } from '../classes';

interface WonderArgs {
  resources: Collection<Resource>,
  buildings: Collection<Building>,
  playerciv: Civilization,

}

let greatPyramids = new Wonder(
  'The Great Pyramids',
  'great-pyramids',
  500,
  500,
  true,
  false,
  'No aliens required. Requires 20 <img src="img/stone.png">',
  '+5 <img src="img/legacy.png"> Points, +20 <img src="img/prod.png"> PC with <img src="img/desert.png">',
  function (args) {
    if (args.resources.get('stone').total >= 20) {
      console.log('You can build it.');
      args.resources.get('stone').total -= 20;
      return true;
    } else {
      console.log('You cannot build it.');
      return false;
    }
  },
  function (args) {
    args.playerCiv.legacy += 5;
  }
);
let stonehenge = new Wonder(
  'Stonehenge',
  'stonehenge',
  700,
  700,
  true,
  false,
  'A glorified sundial...we think. Requires 5 <img src="img/stone.png">',
  '+5 <img src="img/legacy.png"> Points, +10 <img src="img/faith.png"> PM',
  function (args) {
    if (args.resources.get('stone').total >= 5) {
      args.resources.get('stone').total -= 5;
      return true;
    } else {
      return false;
    }
  },
  function (args) {
    args.playerCiv.legacy += 5;
    args.playerCiv.faithPM += 10;
  }
);
let moaiStatues = new Wonder(
  'Moai Statues',
  'moai-statues',
  900,
  900,
  true,
  false,
  'If only nose jobs existed back then. Requires 50 <img src="img/stone.png"> and Coastal or Island Biome',
  '+5 <img src="img/legacy.png"> Points',
  function (args) {
    (args.resources.get('stone').total >= 50)  &&
    (args.playerCiv.biomes.items.includes('Coast') || args.playerCiv.biomes.items.includes('Island'))
    ? true
    :  false;
  },
  function (args) {
    args.playerCiv.legacy += 5;
  }
);
let parthenon = new Wonder(
  'Parthenon',
  'parthenon',
  1100,
  1100,
  true,
  false,
  'A gathering of the gods.',
  '+5 <img src="img/legacy.png"> Points, +20% <img src="img/culture.png"> PM',
  function (args) {
    return true;
  },
  function (args) {
    args.playerCiv.legacy += 5;
    args.playerCiv.culturePMMod *= 1.2;
  }
);
let greatWall = new Wonder(
  'The Great Wall',
  'great-wall',
  1300,
  1300,
  true,
  false,
  'Requires 10 Walls',
  '+5 <img src="img/legacy.png"> Points, +100% <img src="img/defense.png">, No Barbarian invasions',
  function (args) {

  },
  function (args) {
    args.playerCiv.legacy += 5;
    args.playerCiv.defense += 100;
  }
);
let greatCollosseum = new Wonder(
  'The Great Colloseum',
  'great-colloseum',
  2500,
  2500,
  true,
  false,
  'Requires 10 Colloseums',
  '+5 <img src="img/legacy.png"> Points, +30% <img src="img/happy.png">',
  function (args) {
    args.buildings.get('Collosseum').total >= 10 ? true : false;
  },
  function (args) {
    args.playerCiv.legacy += 5;
    args.playerCiv.happinessMod *= 1.3;
  }
);

export let wonders:Collection<Wonder> = new Collection('wonders', [greatPyramids, stonehenge, moaiStatues, parthenon, greatWall, greatCollosseum]);
