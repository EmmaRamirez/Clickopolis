"use strict";
var Tech = require('./tech');
var Collection = require('./collection');
var agriculture = new Tech('agriculture', 'ancient', 'a technology', ['+.2 <img src="img/food.png"> PS per farmer', 'Unlocks: Animal Husbandry, Mining']);
var animalHusbandry = new Tech('animal husbandry', 'ancient', 'It\'s not what you think it is.', ['Unlocks <img src="img/horse.png"> resource', '']);
var archery = new Tech('archery', 'ancient', 'Bow and arrow, hitting bone and marrow', ['Can assign Soldiers as Archers.', 'Can build Barracks.']);
var fishing = new Tech('fishing', 'ancient', 'Just make sure to use a Super Rod.', ['Unlocks <img src="img/fish.png"> resource.', 'Unlocks: Sailing']);
var herbalMedicine = new Tech('herbal medicine', 'ancient', '', ['Can build Ascelpeia.', '+10 <img src="img/health.png"> for discovering.']);
var masonry = new Tech('masonry', 'ancient', 'wububuu', ['', '']);
var mining = new Tech('mining', 'ancient', 'not safe for minors', ['+.2 <img src="img/prod.png"> PS per miner', 'Unlocks: Masonry, Pottery']);
var mysticism = new Tech('mysticism', 'ancient', 'Mysterious gods bring riches, temples, and a couple blood sacrifices.', ['Can assign Clerics.', 'Can build Temples.', 'Can build Stonehenge.']);
var sailing = new Tech('sailing', 'ancient', 'It\'s a lot harder to sail if you stay at half-mast!', ['Can assign soldiers as Navy.', 'Can meet Coastal and Oceanic Nations.']);
var trading = new Tech('trading', 'ancient', 'My six chickens for your goat?', ['Unlocks Bartering Economic System.', 'Can assign Merchants.']);
var woodworking = new Tech('woodworking', 'ancient', 'TIMBER!!!', ['Unlocks <img src="img/spices.png"> resources.', 'Can assign Woodcutters.']);
var writing = new Tech('writing', 'ancient', 'Allows poorly written fanfiction in Information era.', ['Unlocks Diplomacy.', 'Can build Library.']);
var techs = new Collection('Techs', [
    agriculture, animalHusbandry, archery, fishing, herbalMedicine, masonry, mining, mysticism, sailing, trading, woodworking, writing
]);
module.exports = techs;
//# sourceMappingURL=data.tech.js.map