import Collection = require('./collection');
import FaithTier = require('./faithtier');
import FaithBonus = require('./faithbonus');
import Resource = require('./resource');
import Civilization = require('./civilization');
import { Utils } from './utils';

let u = new Utils();

let goh:FaithBonus = new FaithBonus('Goddess of the Halibut', FaithTier.Pantheon, true, false, `Converts half your <img src='img/fish.png' /> into <img src='img/faith.png' /> PM`, function () {

});
let sos:FaithBonus = new FaithBonus('Spirit of the Spices', FaithTier.Pantheon, true, false, `+1% <img src='img/faith.png' /> per <img src='img/spices.png' /> (max 25%)`, function () {

});
let bm:FaithBonus = new FaithBonus('Benevelont Muses', FaithTier.Pantheon, true, false, `+.5 <img src='img/faith.png' /> PM Contribution per Artist`, function () {

});
let gow:FaithBonus = new FaithBonus('God of War', FaithTier.Pantheon, true, false, `+15% <img src='img/strength.png' />`, function (resources:Collection<Resource>, playerCiv:Civilization) {
  playerCiv.strength *= 1.15;
});
let sc:FaithBonus = new FaithBonus('Satyr Charm', FaithTier.Pantheon, true, false, `+1% <img src='img/happy.png' /> per <img src='img/horse.png' /> (max 25%)`, function () {

});
let gc:FaithBonus = new FaithBonus('Golden Calf', FaithTier.Pantheon, true, false, `+1 <img src='img/faith.png' /> PM per <img src='img/gold.png' /> resource`, function () {

});
let fg:FaithBonus = new FaithBonus('Fertility Goddess', FaithTier.Pantheon, true, false, `+10 <img src='img/food.png' /> PC`, function (resources:Collection<Resource>) {
  resources.get('food').perClick += 10;
  u.elt('.r-prod-pc').textContent = resources.get('prod').perClick.toFixed(1);
});
let sc2:FaithBonus = new FaithBonus('Stone Circles', FaithTier.Pantheon, true, false, `+.2 <img src='img/faith.png' /> PM per Quarry`, function () {

});
let ps:FaithBonus = new FaithBonus('Protective Spirits', FaithTier.Pantheon, true, false, `+30% <img src='img/defense.png' />`, function (resources:Collection<Resource>, playerCiv:Civilization) {
  playerCiv.defense *= 1.3;
});
let lof:FaithBonus = new FaithBonus('Lord of the Flies', FaithTier.Pantheon, true, false, `+1 <img src='img/happy.png' /> per 4 <img src='img/pollution.png' />`, function () {

});
let tf:FaithBonus = new FaithBonus('The Furies', FaithTier.Pantheon, true, false, `+10 <img src='img/faith.png'/> when you declare war`, function () {

});
let tf2:FaithBonus = new FaithBonus('The Fates', FaithTier.Pantheon, true, false, `Increases chance of good events`, function () {

});

let animism:FaithBonus = new FaithBonus('Animism', FaithTier.Organized, false, false, `+3 <img src='img/faith.png'> for each Stable, Pasture, and Zoo`, function () {

});

let reincarnation:FaithBonus = new FaithBonus('Reincarnation', FaithTier.Organized, false, false, `+20 <img src='img/faith.png'> when you pass on your legacy`, function () {

});

let priesthood:FaithBonus = new FaithBonus('Priesthood', FaithTier.Organized, false, false, `Increase <img src='img/faith.png'> output for Cleric by 100%`, function () {

});

let mission:FaithBonus = new FaithBonus('Mission', FaithTier.Organized, false, false, `Can spread religion to other Nations with Cleric`, function () {

});

export let faithBonuses = new Collection('faithBonuses', [
                                                    goh, sos, bm, gow, sc, gc, fg, sc2, ps, lof, tf, tf2,
                                                    animism, reincarnation, priesthood, mission
                                                  ]);
