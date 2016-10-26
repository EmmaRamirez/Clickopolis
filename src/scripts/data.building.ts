import Building = require('./building');
import Collection = require('./collection');
import Civilization = require('./civilization');
import Resource = require('./resource');
import { Utils } from './utils';
import notify = require('./notify');

let u = new Utils();

let hut:Building = new Building('Hut', 0, 15, 150, 'Air conditioning would be nice though.', '+1 <img src="img/happy.png">', true, true, function (playerCiv:Civilization) {
  playerCiv.happinessFromBuildings += 1;
  //u.elt('.civ-metric.metric-happiness').innerHTML = `<img src="img/happy.png"> ${playerCiv.happiness}`;
  //notify({message:`The new hut has made your citizens gracious. (<img src="img/happy.png"> ${playerCiv.happiness})`});
  console.log(playerCiv.happiness);
});
let granary:Building = new Building('Granary', 0, 25, 250, 'Feeds all your cute animals.', '+200 <img src="img/food.png"> max', true, false, function (playerCiv:Civilization, resources:Collection<Resource>) {
  resources.get('food').max += 200;
  //notify({message: `Your civilization now has a max <img src="img/food.png"> storage of ${resources.get('food').max}`});
  u.elt('.r-food-max').textContent = u.abbrNum(resources.get('food').max);
});
let quarry:Building = new Building('Quarry', 0, 30, 300, 'Your very own diamond in the rough.', '+200 <img src="img/prod.png"> max', true, false, function (playerCiv:Civilization, resources:Collection<Resource>) {
  resources.get('prod').max += 200;
  //notify({message: `Your civilization now has a max <img src="img/prod.png"> capacity of ${resources.get('food').max}`});
  u.elt('.r-prod-max').textContent = u.abbrNum(resources.get('prod').max);
});
let barracks:Building = new Building('Barracks', 0, 35, 350, 'Keep your soldiers at the ready!', '+1 <img src="img/strength.png">', true, false, function (playerCiv:Civilization) {
  playerCiv.strength += 1;
  //notify({message: `Your civilization grew stronger! (<img src='img/strength.png'> ${playerCiv.strength})`});
});
let temple:Building = new Building('Temple', 0, 70, 700, 'Cultivate your empire\'s faith.', '+1 <img src="img/faith.png"> PM', true, false, function (playerCiv:Civilization) {
  playerCiv.faithPM += 1;
  //notify({message: `Your temple has attracted new devotees! (<img src='img/faith.png'> ${playerCiv.faithPM} PM)`});
});
let asclepeia:Building = new Building('Asclepeia', 0, 50, 500, 'We can\'t pronounce it either.', '+1 <img src="img/health.png">', true, false, function (playerCiv:Civilization) {
  playerCiv.health += 1;
  //notify({message: `Your civilization became healthier! (<img src='img/health.png'> ${playerCiv.health})`});
})
let graveyard:Building = new Building('Graveyard', 0, 30, 300, 'Here, your (dead) citizens gather.', '-1 <img src="img/pollution.png">', true, false, function (playerCiv:Civilization) {
  playerCiv.pollution -= 1;
  //notify({message: `Good idea, let's keep the dead bodies away. (<img src='img/pollution.png'> ${playerCiv.pollution})`});
});
let fort:Building = new Building('Fort', 0, 100, 1000, 'Defend the nation! Defend the state!', '+5 <img src="img/defense.png">', true, false, function (playerCiv:Civilization) {
  playerCiv.defense += 5;
  //notify({message: `Much better than the one made out of pillows. (<img src='img/defense.png'> ${playerCiv.defense})`})
});
let ziggurat:Building = new Building('Ziggurat', 0, 120, 1200, 'A tiny proto-pyramid.', '+3 <img src="img/research.png"> PM', true, false, function (playerCiv:Civilization) {
  playerCiv.researchPM += 3;
  //notify({message: `Your scholars have convened at your newest Ziggurat! (<img src='img/research.png'> ${playerCiv.researchPM} PM)`})
});
let ampitheatre:Building = new Building('Ampitheatre', 0, 800, 8000, 'Sick of drama? Come here!', '+1 <img src="img/culture.png"> PM', true, false);
let collesseum:Building = new Building('Collosseum', 0, 700, 7000, 'Bring out the lions!', '+10 <img src="img/happy.png">', true, false);
let courthouse:Building = new Building('Courthouse', 0, 500, 5000, 'Bringing Law & Order to the Classical era.', '+1 <img src="img/influence-domestic.png">', true, false);
let forum:Building = new Building('Forum', 0, 400, 4000, 'Not <em>that kind</em> of forum.', '+5 <img src="img/research.png"> PM', true, false);
let harbor:Building = new Building('Harbor', 0, 400, 4000, 'The peer of a harbor is a dock.', 'Doubles <img src="img/health.png"> bonus of <img src="img/fish.png">', true, false);
let lighthouse:Building = new Building('Lighthouse', 0, 500, 5000, 'We see the sea for you.', '+2 Navy <img src="img/strength.png">', true, false);
let market:Building = new Building('Market', 0, 450, 4500, 'Ripoffs and stale meat galore!', '+20 <img src="img/coin.png">', true, false);
let mint:Building = new Building('Mint', 0, 900, 9000, 'Keep your money mint-fresh.', '+1% <img src="img/coin.png"> per 10 <img src="img/gold.png">', true, false);
let plantation:Building = new Building('Plantation', 0, 750, 7500, 'It\'s a plantation nation.', '+.5 <img src="img/prod.png"> PS per <img src="img/banana.png">', true, false);
let walls:Building = new Building('Walls', 0, 400, 4000, 'B U I L D  W A L L', '+25 <img src="img/defense.png">', true, false);

let buildings:Collection<Building> = new Collection('Buildings',
                                          [
                                            hut, granary, quarry, barracks, temple, asclepeia, graveyard, fort, ziggurat,
                                            ampitheatre, collesseum, courthouse, forum, harbor, lighthouse,  market, mint, plantation, walls
                                          ])

// name:string, amount:number, prodCost:number, cashCost:number, description:string, effect:string

export = buildings;
