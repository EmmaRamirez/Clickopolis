import Wonder = require('./wonder');
import Collection = require('./collection');

let greatPyramids = new Wonder('The Great Pyramids', 'great-pyramids', 10000, 10000, 'No aliens required.', 'This gives you a really neat bonus!');

let wonders:Collection = new Collection('wonders', [greatPyramids]);

export = wonders;
