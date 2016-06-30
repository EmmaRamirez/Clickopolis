import Resource = require('./resource');
import Collection = require('./collection');

let food:Resource = new Resource('food', 1, 0, 1000, 0, 'food', 'Food.', true, true);
let prod:Resource = new Resource('prod', 1, 0, 500, 0, 'prod', 'Prod.', true, true);
let stone:Resource = new Resource('stone', 0, 0, -1, 0, 'stone', 'Stones are important as a building block for buildings.', true, true);
let fish:Resource = new Resource('fish', 0, 0, -1, 0, 'fish', 'Fish are caught in nets by citizens periodically. Each fish provides +.5 <img src="img/health.png"> Fish are a popular trade item with Desert nations.', true, true);
let banana:Resource = new Resource('banana', 0, 0, -1, 0, 'banana', 'Bananas are harvested by farmers periodically. Each banana provides +.5 <img src="img/health.png"> Bananas are a popular trade item with Tundra nations.', true, true);
let spices:Resource = new Resource('spices', 0, 0, -1, 0, 'spices', 'Spices are a luxury resource your woodcutters provide for you. They are useful for religious civilizations.', true, true);
let gold:Resource = new Resource('gold', 0, 0, -1, 0, 'gold', 'Gold is a luxury resource that can be traded or sold, and makes your empire pretty happy.', true, true);
let gems:Resource = new Resource('gems', 0, 0, -1, 0, 'gems', 'Gems glisten with the sparkle of a luxurious life.', true, true);
let oil:Resource = new Resource('oil', 0, 0, -1, 0, 'oil', 'Oil powers the infrastructure of an Industrial and Modern world. Use it wisely though, as it can harm your environment.', false, true);
let uranium:Resource = new Resource('uranium', 0, 0, -1, 0, 'uranium', 'Uranium can be used to power modern buildings...and bring doom to entire cities.', false, true);
let iron:Resource = new Resource('iron', 0, 0, -1, 0, 'iron', 'Iron, the cousin of Stone, is the building block of a modern Empire.', false, true);
let horse:Resource = new Resource('horse', 0, 0, -1, 0, 'horse', 'Horsies...I mean horses, are an important strategic resource for building up Cavalry, an important part of your military.', false, true);
let spaghetti:Resource = new Resource('spaghetti', 0, 0, -1, 0, 'spaghetti', 'There\'s vomit on his sweater already.', false, true);
let chihuahua:Resource = new Resource('chihuahua', 0, 0, -1, 0, 'chihuahua', 'Bark! Woof! Bark!', false, true);

let resources:Collection = new Collection('Resources', [food, prod, stone, fish, spices, banana, gold, gems, oil, iron, uranium, chihuahua, spaghetti, horse]);

export = resources;
