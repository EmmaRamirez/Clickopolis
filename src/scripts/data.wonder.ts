import Wonder = require('./wonder');
import Collection = require('./collection');

let greatPyramids = new Wonder('The Great Pyramids', 'pyramids', 10000, 10000, 'Pyramids', 'a neat bonus');

let wonders:Collection = new Collection('wonders', [greatPyramids]);

export = wonders;
