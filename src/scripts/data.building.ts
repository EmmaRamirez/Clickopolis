import Building = require('./building');
import Collection = require('./collection');
import Civilization = require('./civilization');
import Utils = require('./utils');
import notify = require('./notify');

let u = new Utils();

let hut:Building = new Building('Hut', 0, 15, 150, 'Air conditioning would be nice though.', '+1 <img src="img/happy.png">', function (playerCiv:Civilization) {
  playerCiv.happiness += 1;
  u.elt('.civ-metric.metric-happiness').innerHTML = `<img src="img/happy.png"> ${playerCiv.happiness}`;
  notify(`The happiness of your Civilization grew to <img src="img/happy.png"> ${playerCiv.happiness}`);
  console.log(playerCiv.happiness);
});
let granary:Building = new Building('Granary', 0, 25, 250, 'Feeds all your cute animals.', '+200 <img src="img/food.png"> max');
let quarry:Building = new Building('Quarry', 0, 30, 300, 'Your very own diamond in the rough.', '+200 <img src="img/prod.png"> max');
let barracks:Building = new Building('Barracks', 0, 35, 350, 'Keep your soldiers at the ready!', '+1 <img src="img/strength.png">');
let temple:Building = new Building('Temple', 0, 45, 450, 'Cultivate your empire\'s faith.', '+1 <img src="img/faith.png"> PM');
let asclepeia:Building = new Building('Asclepeia', 0, 50, 500, 'We can\'t pronounce it either.', '+1 <img src="img/health.png">')
let graveyard:Building = new Building('Graveyard', 0, 70, 700, 'Here, your (dead) citizens gather.', '-1 <img src="img/pollution.png">');
let fort:Building = new Building('Fort', 0, 100, 1000, 'Defend the nation! Defend the state!', '+5 <img src="img/defense.png">');

let buildings:Collection = new Collection('Buildings',
                                          [
                                            hut, granary, quarry, barracks, temple, asclepeia, graveyard, fort
                                          ])

// name:string, amount:number, prodCost:number, cashCost:number, description:string, effect:string

export = buildings;
