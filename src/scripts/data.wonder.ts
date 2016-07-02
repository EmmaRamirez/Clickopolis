import Wonder = require('./wonder');
import Collection = require('./collection');

let greatPyramids = new Wonder('The Great Pyramids', 'great-pyramids', 10000, 10000, 'No aliens required.', '+25 <img src="img/legacy.png"> Points');

let wonders:Collection<Wonder> = new Collection('wonders', [greatPyramids]);

export = wonders;
