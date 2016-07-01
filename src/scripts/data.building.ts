import Building = require('./building');
import Collection = require('./collection');
import Civilization = require('./civilization');
import Resource = require('./resource');
import Utils = require('./utils');
import notify = require('./notify');

let u = new Utils();

let hut:Building = new Building('Hut', 0, 15, 150, 'Air conditioning would be nice though.', '+1 <img src="img/happy.png">', function (playerCiv:Civilization) {
  playerCiv.happiness += 1;
  u.elt('.civ-metric.metric-happiness').innerHTML = `<img src="img/happy.png"> ${playerCiv.happiness}`;
  notify({message:`The happiness of your Civilization grew to <img src="img/happy.png"> ${playerCiv.happiness}`});
  console.log(playerCiv.happiness);
});
let granary:Building = new Building('Granary', 0, 25, 250, 'Feeds all your cute animals.', '+200 <img src="img/food.png"> max', function (playerCiv:Civilization, resources:Collection<Resource>) {
  resources.get('food').max += 200;
  notify({message: `Your civilization now has a max <img src="img/food.png"> storage of ${resources.get('food').max}`});
  u.elt('.r-food-max').textContent = u.abbrNum(resources.get('food').max) + ' max';
});
let quarry:Building = new Building('Quarry', 0, 30, 300, 'Your very own diamond in the rough.', '+200 <img src="img/prod.png"> max', function (playerCiv:Civilization, resources:Collection<Resource>) {
  resources.get('prod').max += 200;
  notify({message: `Your civilization now has a max <img src="img/prod.png"> capacity of ${resources.get('food').max}`});
  u.elt('.r-prod-max').textContent = u.abbrNum(resources.get('prod').max) + ' max';
});
let barracks:Building = new Building('Barracks', 0, 35, 350, 'Keep your soldiers at the ready!', '+1 <img src="img/strength.png">', function (playerCiv:Civilization) {
  playerCiv.strength += 1;
  notify({message: `Your civilization grew stronger! (<img src='img/strength.png'> ${playerCiv.strength})`});
});
let temple:Building = new Building('Temple', 0, 45, 450, 'Cultivate your empire\'s faith.', '+1 <img src="img/faith.png"> PM', function (playerCiv:Civilization) {
  playerCiv.faithPM += 1;
  notify({message: `Your temple has attracted new devotees! (<img src='img/faith.png'> ${playerCiv.faithPM} PM)`});
});
let asclepeia:Building = new Building('Asclepeia', 0, 50, 500, 'We can\'t pronounce it either.', '+1 <img src="img/health.png">', function (playerCiv:Civilization) {
  playerCiv.health += 1;
  notify({message: `Your civilization became healthier! (<img src='img/health.png'> ${playerCiv.health})`});
})
let graveyard:Building = new Building('Graveyard', 0, 70, 700, 'Here, your (dead) citizens gather.', '-1 <img src="img/pollution.png">', function (playerCiv:Civilization) {
  playerCiv.pollution -= 1;
  notify({message: `Good idea, let's keep the dead bodies away. (<img src='img/pollution.png'> ${playerCiv.pollution})`});
});
let fort:Building = new Building('Fort', 0, 100, 1000, 'Defend the nation! Defend the state!', '+5 <img src="img/defense.png">', function (playerCiv:Civilization) {
  playerCiv.defense += 5;
  notify({message: `Much better than the one made out of pillows. (<img src='img/defense.png'> ${playerCiv.defense})`})
});
let library:Building = new Building('Library', 0, 200, 2000, 'Be learned new things.', '+1 <img src="img/research.png"> PM', function (playerCiv:Civilization) {
  playerCiv.researchPM += 1;
  notify({message: `What is this useless building for again? (<img src='img/research.png'> ${playerCiv.researchPM} PM)`})
});

let buildings:Collection<Building> = new Collection('Buildings',
                                          [
                                            hut, granary, quarry, barracks, temple, asclepeia, graveyard, fort, library
                                          ])

// name:string, amount:number, prodCost:number, cashCost:number, description:string, effect:string

export = buildings;
