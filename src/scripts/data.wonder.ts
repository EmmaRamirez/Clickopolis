import Wonder = require('./wonder');
import Collection = require('./collection');
import Resource = require('./resource');

let greatPyramids = new Wonder(
  'The Great Pyramids',
  'great-pyramids',
  500,
  500,
  true,
  false,
  'No aliens required. Requires 20 <img src="img/stone.png">',
  '+25 <img src="img/legacy.png"> Points',
  function (resources:Collection<Resource>) {
    if (resources.get('stone') >= 20) {
      return true;
    } else {
      return false;
    }
  },
  function () {

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
    if (resources.get('stone') >= 5) {
      return true;
    } else {
      return false;
    }
  },
  function () {

  }
);

let wonders:Collection<Wonder> = new Collection('wonders', [greatPyramids, stonehenge]);

export = wonders;
