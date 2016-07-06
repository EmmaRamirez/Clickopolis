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
  true,
  'No aliens required. Requires 20 <img src="img/stone.png">',
  '+25 <img src="img/legacy.png"> Points',
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
    playerCiv.legacy += 25;
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
  '+10 <img src="img/faith.png"> PM',
  function (resources:Collection<Resource>) {
    if (resources.get('stone').total >= 5) {
      return true;
    } else {
      return false;
    }
  },
  function (playerCiv:Civilization) {
    playerCiv.faithPM += 10;
  }
);

let wonders:Collection<Wonder> = new Collection('wonders', [greatPyramids, stonehenge]);

export = wonders;
