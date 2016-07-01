import Tech = require('./tech');
import Collection = require('./collection');
import Citizen = require('./citizen');
import Resource = require('./resource')
import Utils = require('./utils');

let u = new Utils();

let agriculture:Tech = new Tech('agriculture', 'ancient', 'The one that never goes obsolete.', ['+.2 <img src="img/food.png"> PS per <img src="img/farmer.png">', 'Unlocks: Animal Husbandry, Mining'], function (citizens:Collection<Citizen>) {
  citizens.get('farmer').contrib1.amount += .2;

  console.log(citizens.get('farmer').contrib1.amount);
});
let animalHusbandry:Tech = new Tech('animal husbandry', 'ancient', 'It\'s not what you think it is.', ['Unlocks <img src="img/horse.png"> resource', 'Improves <img src="img/farmer.png"> output by 15%'], function (citizens:Collection<Citizen>, resources:Collection<Resource>) {
  u.unlockResource('horse', resources);
});
let archery:Tech = new Tech('archery', 'ancient', 'Bow and arrow, hitting bone and marrow', ['Can assign Soldiers as Archers.', 'Can build Barracks', '+5 Empire <img src="img/defense.png">']);
let fishing:Tech = new Tech('fishing', 'ancient', 'Just make sure to use a Super Rod.', ['Unlocks <img src="img/fish.png"> resource', 'Unlocks: Sailing']);
let herbalMedicine:Tech = new Tech('herbal medicine', 'ancient', 'What if...herbs could heal us?', ['Can build Ascelpeia', '+5 <img src="img/health.png"> for discovering']);
let masonry:Tech = new Tech('masonry', 'ancient', 'Illuminati-approved.', ['Can build The Great Pyramids wonder', 'Can build Quarry']);
let mining:Tech = new Tech('mining', 'ancient', 'Not safe for minors.', ['+.2 <img src="img/prod.png"> PS per <img src="img/miner.png">', 'Unlocks <img src="img/stone.png">, <img src="img/gold.png">, <img src="img/gems.png"> resources', 'Unlocks: Masonry, Pottery']);
let mysticism:Tech = new Tech('mysticism', 'ancient', 'Mysterious gods bring riches, temples, and a couple blood sacrifices.', ['Can assign Clerics', 'Can build Temples', 'Can build the Stonehenge wonder']);
let pottery:Tech = new Tech('pottery', 'ancient', 'Does not come with Pottery Barn discount.', ['Can assign Artists', 'Can build Granary']);
let sailing:Tech = new Tech('sailing', 'ancient', 'It\'s a lot harder to sail if you stay at half-mast!', ['Grants 5 free <img src="img/fish.png">', 'Can assign soldiers as Navy', 'Can meet Coastal and Oceanic Nations']);
let trading:Tech = new Tech('trading', 'ancient', 'My six chickens for your goat?', ['Unlocks Bartering Economic System', 'Can assign Merchants.']);
let woodworking:Tech = new Tech('woodworking', 'ancient', 'TIMBER!!!', ['Unlocks <img src="img/spices.png"> resource', 'Can assign Woodcutters.']);
let writing:Tech = new Tech('writing', 'ancient', 'Allows poorly written fanfiction in Information era.', ['Unlocks Diplomacy', 'Can build Library']);


let techs:Collection<Tech> = new Collection('Techs',
    [
      agriculture, animalHusbandry, archery, fishing, herbalMedicine, masonry, mining, mysticism, pottery, sailing, trading, woodworking, writing
    ]
  );

export = techs;
