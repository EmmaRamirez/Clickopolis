import Wonder = require('./wonder');
import Collection = require('./collection');

let greatPyramids = new Wonder('The Great Pyramids', 'great-pyramids', 500, 500, 'No aliens required.', '+25 <img src="img/legacy.png"> Points');
let stonehenge = new Wonder('Stonehenge', 'stonehenge', 700, 700, 'A glorified sundial...we think.', '+10 <img src="img/faith.png"> PM');

let wonders:Collection<Wonder> = new Collection('wonders', [greatPyramids, stonehenge]);

export = wonders;
