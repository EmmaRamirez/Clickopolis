import Tech = require('./tech');
import Collection = require('./collection');

let agriculture:Tech = new Tech('agriculture', 'ancient', 'a technology', ['+.2 <img src="img/food.png"> PS per farmer', 'Unlocks: Animal Husbandry, Mining']);
let animalHusbandry:Tech = new Tech('animal husbandry', 'ancient', 'It\'s not what you think it is.', ['Unlocks <img src="img/horse.png"> resource', '']);
let archery:Tech = new Tech('archery', 'ancient', 'Bow and arrow, hitting bone and marrow', ['Can assign Soldiers as Archers.', 'Can build Barracks.']);
let fishing:Tech = new Tech('fishing', 'ancient', 'Just make sure to use a Super Rod.', ['Unlocks <img src="img/fish.png"> resource.', 'Unlocks: Sailing']);
let herbalMedicine:Tech = new Tech('herbal medicine', 'ancient', '', ['Can build Ascelpeia.', '+10 <img src="img/health.png"> for discovering.']);
let masonry:Tech = new Tech('masonry', 'ancient', 'wububuu', ['', '']);
let mining:Tech = new Tech('mining', 'ancient', 'not safe for minors', ['+.2 <img src="img/prod.png"> PS per miner', 'Unlocks: Masonry, Pottery']);
let mysticism:Tech = new Tech('mysticism', 'ancient', 'Mysterious gods bring riches, temples, and a couple blood sacrifices.', ['Can assign Clerics.', 'Can build Temples.', 'Can build Stonehenge.']);
let sailing:Tech = new Tech('sailing', 'ancient', 'It\'s a lot harder to sail if you stay at half-mast!', ['Can assign soldiers as Navy.', 'Can meet Coastal and Oceanic Nations.']);
let trading:Tech = new Tech('trading', 'ancient', 'My six chickens for your goat?', ['Unlocks Bartering Economic System.', 'Can assign Merchants.']);
let woodworking:Tech = new Tech('woodworking', 'ancient', 'TIMBER!!!', ['Unlocks <img src="img/spices.png"> resources.', 'Can assign Woodcutters.']);
let writing:Tech = new Tech('writing', 'ancient', 'Allows poorly written fanfiction in Information era.', ['Unlocks Diplomacy.', 'Can build Library.']);


let techs:Collection = new Collection('Techs',
    [
      agriculture, animalHusbandry, archery, fishing, herbalMedicine, masonry, mining, mysticism, sailing, trading, woodworking, writing
    ]
  );

export = techs;
