import Tech = require('./tech');
import Collection = require('./collection');
import Citizen = require('./citizen');
import Resource = require('./resource')
import Building = require('./building');
import Wonder = require('./wonder');
import Civilization = require('./civilization');
import Utils = require('./utils');

let u = new Utils();

let agriculture:Tech = new Tech(
  'agriculture',
  'ancient',
  'The one that never goes obsolete.',
  [
    '<img src="img/plus.png"> +.2 <img src="img/food.png"> PS per <img src="img/farmer.png">',
    '<img src="img/plus.png"> Unlocks: Animal Husbandry, Archery, Fishing'
  ],
  ['resources', 'citizens'],
  function (citizens:Collection<Citizen>) {
    citizens.get('farmer').contrib1.amount = (citizens.get('farmer').contrib1.amount + .2).toFixed(1);
    console.log(citizens.get('farmer').contrib1.amount);
    u.elt('.contrib[data-citizen="farmer"]').innerHTML = u.setContributions(citizens.get('farmer'));
  }
);
let animalHusbandry:Tech = new Tech(
  'animal husbandry',
  'ancient',
  'It\'s not what you think it is.',
  [
    '<img src="img/plus.png"> Unlocks <img src="img/horse.png"> resource',
    '<img src="img/plus.png"> Improves <img src="img/farmer.png"> output by 15%'
  ],
  ['resources', 'citizens'],
  function (citizens:Collection<Citizen>, resources:Collection<Resource>) {
    u.unlockResource('horse', resources);
    citizens.get('farmer').contrib1.amount = (citizens.get('farmer').contrib1.amount * 1.15).toFixed(2);
    citizens.get('farmer').contrib2.amount = (citizens.get('farmer').contrib2.amount * 1.15).toFixed(2);
    u.elt('.contrib[data-citizen="farmer"]').innerHTML = u.setContributions(citizens.get('farmer'));
  }
);
let archery:Tech = new Tech(
  'archery',
  'ancient',
  'Bow and arrow, hitting bone and marrow',
  [
    '<img src="img/plus.png"> Can assign Soldiers as Archers.',
    '<img src="img/plus.png"> Can build Barracks',
    '<img src="img/plus.png"> +5 Empire <img src="img/defense.png">'
  ],
  ['military', 'buildings'],
  function (citizens:Collection<Citizen>, resources:Collection<Resource>, playerCiv:Civilization, buildings:Collection<Building>) {
    playerCiv.defense += 5;
    u.unlockBuilding('Barracks', buildings);
  }
);
let fishing:Tech = new Tech(
  'fishing',
  'ancient',
  'Just make sure to use a Super Rod.',
  [
    '<img src="img/plus.png"> Unlocks <img src="img/fish.png"> resource',
    '<img src="img/plus.png"> Unlocks: Sailing'
  ],
  ['resources'],
  function (citizens:Collection<Citizen>, resources:Collection<Resource>) {
    u.unlockResource('fish', resources);
  }
);
let herbalMedicine:Tech = new Tech(
  'herbal medicine',
  'ancient',
  'What if...herbs could heal us?',
  [
    '<img src="img/plus.png"> Can build Ascelpeia',
    '<img src="img/plus.png"> +5 <img src="img/health.png"> for discovering'
  ],
  ['buildings', 'civilization'],
  function (citizens:Collection<Citizen>, resources:Collection<Resource>, playerCiv:Civilization, buildings:Collection<Building>) {
    playerCiv.health += 5;
    u.unlockBuilding('Asclepeia', buildings);
  }
);
let masonry:Tech = new Tech(
  'masonry',
  'ancient',
  'Illuminati-approved.',
  [
    '<img src="img/plus.png"> Can build The Great Pyramids wonder',
    '<img src="img/plus.png"> Can build Quarry'
  ],
  ['buildings', 'wonder'],
  function (citizens:Collection<Citizen>, resources:Collection<Resource>, playerCiv:Civilization, buildings:Collection<Building>, wonders:Collection<Wonder>) {
    u.unlockBuilding('Quarry', buildings);
    u.unlockWonder('The Great Pyramids', wonders);
  }
);
let mining:Tech = new Tech(
  'mining',
  'ancient',
  'Not safe for minors.',
  [
    '<img src="img/plus.png"> +.2 <img src="img/prod.png"> PS per <img src="img/miner.png">',
    '<img src="img/plus.png"> Unlocks <img src="img/stone.png">, <img src="img/gold.png">, <img src="img/gems.png"> resources',
    '<img src="img/plus.png"> Unlocks: Masonry, Pottery'
  ],
  ['resources', 'citizens'],
  function (citizens:Collection<Citizen>, resources:Collection<Resource>) {
    citizens.get('miner').contrib1.amount = (citizens.get('miner').contrib1.amount + .2).toFixed(1);
    u.elt('.contrib[data-citizen="miner"]').innerHTML = u.setContributions(citizens.get('miner'));
    u.unlockResource('stone', resources);
    u.unlockResource('gold', resources);
    u.unlockResource('gems', resources);
  }
);
let mysticism:Tech = new Tech(
  'mysticism',
  'ancient',
  'Mysterious gods bring riches, temples, and a couple blood sacrifices.',
  [
    '<img src="img/plus.png"> Can assign <img src="img/cleric.png"> Clerics',
    '<img src="img/plus.png"> Can build Temples',
    '<img src="img/plus.png"> Can build Graveyard',
    '<img src="img/plus.png"> Can build the Stonehenge wonder'
  ],
  ['faith', 'citizens', 'wonder'],
  function (citizens:Collection<Citizen>, resources:Collection<Resource>, playerCiv:Civilization, buildings:Collection<Building>, wonders:Collection<Wonder>) {
    u.unlockCitizen('cleric', citizens);
    u.unlockBuilding('Temple', buildings);
    u.unlockBuilding('Graveyard', buildings);
    u.unlockWonder('Stonehenge', wonders);
  }
);
let pottery:Tech = new Tech(
  'pottery',
  'ancient',
  'Does not come with Pottery Barn discount.',
  [
    '<img src="img/plus.png"> Can build Granary'
  ],
  ['culture', 'buildings'],
  function (citizens:Collection<Citizen>, resources:Collection<Resource>, playerCiv:Civilization, buildings:Collection<Building>) {
    u.unlockBuilding('Granary', buildings);
  }
);
let sailing:Tech = new Tech(
  'sailing',
  'ancient',
  'It\'s a lot harder to sail if you stay at half-mast!',
  [
    '<img src="img/plus.png"> Grants 5 free <img src="img/fish.png">',
    '<img src="img/plus.png"> Can assign soldiers as Navy',
    '<img src="img/plus.png"> Can meet Coastal and Oceanic Nations'
  ],
  ['military', 'civilization', 'diplomacy']
);
let trading:Tech = new Tech(
  'trading',
  'ancient',
  'My six chickens for your goat?',
  [
    '<img src="img/plus.png"> Unlocks Bartering Economic System',
    '<img src="img/plus.png"> Can assign Merchants'
  ],
  ['economy', 'citizens'],
  function (citizens:Collection<Citizen>, resources:Collection<Resource>, playerCiv:Civilization, buildings:Collection<Building>) {

  }
);
let woodworking:Tech = new Tech(
  'woodworking',
  'ancient',
  'TIMBER!!!',
  [
    '<img src="img/plus.png"> Unlocks <img src="img/spices.png"> resource',
    '<img src="img/plus.png"> Can assign Woodcutters',
    '<img src="img/plus.png"> Can build Fort'
  ],
  ['resources', 'citizens'],
  function (citizens:Collection<Citizen>, resources:Collection<Resource>, playerCiv:Civilization, buildings:Collection<Building>) {
    u.unlockResource('spices', resources);
    u.unlockCitizen('woodcutter', citizens);
    u.unlockBuilding('Fort', buildings);
  }
);
let writing:Tech = new Tech(
  'writing',
  'ancient',
  'Allows poorly written fanfiction in Information era.',
  [
    '<img src="img/plus.png"> Can build Ziggurat',
    '<img src="img/plus.png"> +100 <img src="img/research.png"> for discovery'
  ],
  ['buildings'],
  function (citizens:Collection<Citizen>, resources:Collection<Resource>, playerCiv:Civilization, buildings:Collection<Building>) {
    u.unlockBuilding('Ziggurat', buildings);
    playerCiv.research += 100;
  }
);


let techs:Collection<Tech> = new Collection('Techs',
    [
      agriculture, animalHusbandry, archery, fishing, herbalMedicine, masonry, mining, mysticism, pottery, sailing, trading, woodworking, writing
    ]
  );

export = techs;
