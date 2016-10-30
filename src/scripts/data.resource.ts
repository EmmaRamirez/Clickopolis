import Resource = require('./resource');
import Collection = require('./collection');

let food:Resource = new Resource('food', 1, 0, 1000, 0, 'food', 'Food.', true, true);
let prod:Resource = new Resource('prod', 1, 0, 500, 0, 'prod', 'Prod.', true, true);
let stone:Resource = new Resource('stone', 0, 0, -1, 0, 'stone', 'Stones are important as a building block for buildings. They are often found by your miners.', false, true);
let fish:Resource = new Resource('fish', 0, 0, -1, 0, 'fish', 'Fish are caught in nets by citizens periodically, if you live in a Coastal or Island biome, or have discovered a river. Each fish provides +.5 <img src="img/health.png"> Fish are a popular trade item with Desert nations.', false, true);
fish.healthBonus = .5;
let banana:Resource = new Resource('banana', 0, 0, -1, 0, 'banana', 'Bananas are harvested by farmers periodically. Each banana provides +1 <img src="img/health.png"> Bananas are a popular trade item with Tundra nations.', false, true);
banana.healthBonus = 1;
let cattle:Resource = new Resource('cattle', 0, 0, -1, 0, 'cattle', 'Cattle are raised by your farmers and provide +.1 <img src="img/food.png"> PS. Each cattle provides +.25 <img src="img/health.png">', false, true);
cattle.healthBonus = .25;
cattle.foodBonusPS = .1;
let spices:Resource = new Resource('spices', 0, 0, -1, 0, 'spices', 'Spices are a luxury resource your woodcutters provide for you. They are useful for religious civilizations.', false, true);
let gold:Resource = new Resource('gold', 0, 0, -1, 0, 'gold', 'Gold is a luxury resource that can be traded or sold, and makes your empire happier (+1 <img src="img/happy.png">). They are sometimes found by miners.', false, true);
gold.happinessBonus = 1;
let gems:Resource = new Resource('gems', 0, 0, -1, 0, 'gems', 'Gems glisten with the sparkle of a luxurious life. Very rarely, they can be discoverd by miners. +3 <img src="img/happy.png">', false, true);
gems.happinessBonus = 3;
let silver:Resource = new Resource('silver', 0, 0, -1, 0, 'silver', 'A luxury that can be traded or sold and makes your empire happier (+1 <img src="img/happy.png">). They are sometimes found by miners.', false, true);
silver.happinessBonus = 1;
let pearls:Resource = new Resource('pearls', 0, 0, -1, 0, 'pearls', 'Pearls make a popular accessory amongst your empire\'s wealthiest. They provide extra <img src="img/happy.png"> based on your economy\'s vibrancy. They are once in a seldom while found by citizens after you discover the Diving technology.', false, true);
let whale:Resource = new Resource('whale', 0, 0, -1, 0, 'whale', 'Whale provides meat, oil, and blubber as well as 4 <img src="img/happy.png"> per whale. Can, after intense struggle, be caught by citizens after unlocking the Flensing technology.', false, true);
whale.happinessBonus = 4;
let oil:Resource = new Resource('oil', 0, 0, -1, 0, 'oil', 'Oil powers the infrastructure of an Industrial and Modern world. Use it wisely though, as it can harm your environment.', false, true);
let uranium:Resource = new Resource('uranium', 0, 0, -1, 0, 'uranium', 'Uranium can be used to power modern buildings...and bring doom to entire cities.', false, true);
let plutonium:Resource = new Resource('plutonium', 0, 0, -1, 0, 'plutonium', 'Plutonium is even deadlier than Uranium. Be careful.', false, true);
let iron:Resource = new Resource('iron', 0, 0, -1, 0, 'iron', 'Iron, the cousin of Stone, is the building block of a modern Empire.', false, true);
let marble:Resource = new Resource('marble', 0, 0, -1, 0, 'marble', 'Marble aids in the construction of buildings. Marble is sometimes unearthed by miners and based on your number of quarries.', false, true);
let aluminum:Resource = new Resource('aluminum', 0, 0, -1, 0, 'aluminum', 'A useful modern alloy with many applications. Can be mined or produced via recycling.', false, true);
let steel:Resource = new Resource('steel', 0, 0, -1, 0, 'steel', 'Look here Sonny, if you want them skyscrapers, you\'re gonna need a helluva lot of steel.', false, true);
let horse:Resource = new Resource('horse', 0, 0, -1, 0, 'horse', 'Horsies...I mean horses, are an important strategic resource for building up Cavalry, an important part of your military. They are ocassionally bred by your farmers.', false, true);
let spaghetti:Resource = new Resource('spaghetti', 0, 0, -1, 0, 'spaghetti', 'There\'s vomit on his sweater already.', false, true);
let chihuahua:Resource = new Resource('chihuahua', 0, 0, -1, 0, 'chihuahua', 'Bark! Woof! Bark!', false, true);

let resources:Collection<Resource> = new Collection('Resources', [food, prod, stone, fish, cattle, spices, banana, gold, gems, oil, iron, steel, uranium, chihuahua, spaghetti, horse, silver, pearls, whale, aluminum, marble]);

export = resources;
