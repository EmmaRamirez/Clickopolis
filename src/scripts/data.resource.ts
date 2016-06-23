import Resource = require('./resource');
import Collection = require('./collection');

let food:Resource = new Resource('food', 1, 0, 1000, 0, 'food', 'Food.');
let prod:Resource = new Resource('prod', 1, 0, 2000, 0, 'prod', 'Prod.');
let stone:Resource = new Resource('stone', 0, 0, -1, 0, 'stone', 'Stones are important as a building block for buildings.');
let fish:Resource = new Resource('fish', 0, 0, -1, 0, 'fish', 'Fish are caught in nets by citizens periodically. Each fish provides +.5 <img src="img/health.png"> Fish are a popular trade item with Desert nations.');
let banana:Resource = new Resource('banana', 0, 0, -1, 0, 'banana', 'Banana are harvested by farmers periodically. Each banana provides +.5 <img src="img/health.png"> Banana are a popular trade item with Tundra nations.');
let spices:Resource = new Resource('spices', 0, 0, -1, 0, 'spices', 'Spices are a luxury resource your woodcutters provide for you. They are useful for religious civilizations.');
let gold:Resource = new Resource('gold', 0, 0, -1, 0, 'gold', 'Gold is a luxury resource that can be traded or sold, and makes your empire happen.');
let gems:Resource = new Resource('gems', 0, 0, -1, 0, 'gems', 'Gems glisten with the sparkle of a luxurious life.');
let oil:Resource = new Resource('oil', 0, 0, -1, 0, 'oil', 'Oil powers the infrastructure of an Industrial and Modern world. Use it wisely though, as it can harm your environment.');
let uranium:Resource = new Resource('uranium', 0, 0, -1, 0, 'uranium', 'Uranium can be used to power modern buildings...and bring doom to entire cities.');
let iron:Resource = new Resource('iron', 0, 0, -1, 0, 'iron', 'Iron, the cousin of Stone, is the building block of a modern Empire.');
let horse:Resource = new Resource('horse', 0, 0, -1, 0, 'horse', 'Horsies...I mean horses, are an important strategic resource for building up Cavalry, an important part of your military.');
let spaghetti:Resource = new Resource('spaghetti', 0, 0, -1, 0, 'spaghetti', 'There\'s vomit on his sweater already.');
let chihuahua:Resource = new Resource('chihuahua', 0, 0, -1, 0, 'chihuahua', 'Bark! Woof! Bark!');

let resources:Collection = new Collection('Resources', [food, prod, stone, fish, spices, banana, gold, gems, oil, iron, uranium, chihuahua, spaghetti, horse]);

export = resources;
