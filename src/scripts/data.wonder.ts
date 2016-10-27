import Wonder = require('./wonder');
import Collection = require('./collection');
import Resource = require('./resource');
import Civilization = require('./civilization');

let greatPyramids = new Wonder(
  'The Great Pyramids',
  'great-pyramids',
  500,
  500,
  true,
  false,
  'No aliens required. Requires 20 <img src="img/stone.png">',
  '+5 <img src="img/legacy.png"> Points',
  function (resources:Collection<Resource>) {
    if (resources.get('stone').total >= 20) {
      console.log('You can build it.');
      return true;
    } else {
      console.log('You cannot build it.');
      return false;
    }
  },
  function (playerCiv:Civilization) {
    playerCiv.legacy += 5;
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
  function (resources:Collection<Resource>) {
    if (resources.get('stone').total >= 5) {
      return true;
    } else {
      return false;
    }
  },
  function (playerCiv:Civilization) {
    playerCiv.legacy += 5;
    playerCiv.faithPM += 10;
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
  function (resources:Collection<Resource>) {
    (resources.get('stone').total >= 50) ? true :  false;
  },
  function (playerCiv:Civilization) {
    playerCiv.legacy += 5;
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
  function () {
    return true;
  },
  function (playerCiv:Civilization) {
    playerCiv.legacy += 5;
    playerCiv.culturePMMod *= 1.2;
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
  '+5 <img src="img/legacy.png"> Points, +100 <img src="img/defense.png">',
  function () {

  },
  function (playerCiv:Civilization) {
    playerCiv.legacy += 5;
    playerCiv.defense += 100;
  }
);
let greatCollosseum = new Wonder(
  'The Great Colloseum',
  'great-colloseum',
  1050,
  1050,
  true,
  false,
  'Requires 10 Colloseums',
  '+5 <img src="img/legacy.png"> Points, +25 <img src="img/happy.png">',
  function () {

  },
  function (playerCiv:Civilization) {
    playerCiv.legacy += 5;
    playerCiv.happiness += 25;
  }
);

let wonders:Collection<Wonder> = new Collection('wonders', [greatPyramids, stonehenge, moaiStatues, parthenon, greatWall, greatCollosseum]);

export = wonders;
