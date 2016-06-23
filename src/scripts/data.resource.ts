import Resource = require('./resource');
import Collection = require('./collection');

let food:Resource = new Resource('food', 1, 0, 1000, 0, 'food', 'Food.');
let prod:Resource = new Resource('prod', 1, 0, 2000, 0, 'prod', 'Prod.');
let stone:Resource = new Resource('stone', 0, 0, -1, 0, 'stone', 'Stones are important as a building block for buildings.');
let fish:Resource = new Resource('fish', 0, 0, -1, 0, 'fish', 'Fish are caught in nets by citizens periodically. Each fish provides +.5 <img src="img/health.png"> Fish are a popular trade item with Desert nations.');
let banana:Resource = new Resource('banana', 0, 0, -1, 0, 'banana', 'Banana are harvested by farmers periodically. Each banana provides +.5 <img src="img/health.png"> Banana are a popular trade item with Tundra nations.');
let spices:Resource = new Resource('spices', 0, 0, -1, 0, 'spices', 'Spices');
let gold:Resource = new Resource('gold', 0, 0, -1, 0, 'gold', 'Gold');
let gems:Resource = new Resource('gems', 0, 0, -1, 0, 'gems', 'Gemss');
let oil:Resource = new Resource('oil', 0, 0, -1, 0, 'oil', 'Oil');
let uranium:Resource = new Resource('uranium', 0, 0, -1, 0, 'uranium', 'Uranium');
let iron:Resource = new Resource('iron', 0, 0, -1, 0, 'iron', 'Iron');
let horse:Resource = new Resource('horse', 0, 0, -1, 0, 'horse', 'Horsies :]');
let spaghetti:Resource = new Resource('spaghetti', 0, 0, -1, 0, 'spaghetti', 'Spaghetts');
let chihuahua:Resource = new Resource('chihuahua', 0, 0, -1, 0, 'chihuahua', 'Bark!');

let resources:Collection = new Collection('Resources', [food, prod, stone, fish, spices, banana, gold, gems, oil, iron, uranium, chihuahua, spaghetti, horse]);

export = resources;
