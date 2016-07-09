import Collection = require('./collection');
import FaithTier = require('./faithtier');
import FaithBonus = require('./faithbonus');


// {
//   name: "Goddess of the Halibut",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "Converts half your <img src='img/fish.png' /> into <img src='img/faith.png' />PM.",
//   unlocked: false,
//   activated: false
// },
// {
//   name: "Spirit of the Spices",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "+1% <img src='img/faith.png' /> per <img src='img/spices.png' /> (max 25%).",
//   unlocked: false,
//   activated: false
// },
// {
//   name: "Benevelont Muses",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "+.5 <img src='img/faith.png' /> PM for each Artist you have.",
//   unlocked: false,
//   activated: false
// },
// {
//   name: "God of War",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "+15% <img src='img/strength.png' />.",
//   unlocked: false,
//   activated: false
// },
// {
//   name: "Satyr's Charm",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "+1% <img src='img/happy.png' /> per <img src='img/horse.png' /> (max 25%).",
//   unlocked: false,
//   activated: false
// },
// {
//   name: "Golden Calf",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "+1 <img src='img/faith.png' /> PM per <img src='img/gold.png' /> resource.",
//   unlocked: false,
//   activated: false
// },
// {
//   name: "Fertility Goddess",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "+5 <img src='img/food.png' /> PC.",
//   unlocked: false,
//   activated: false
// },
// {
//   name: "Protective Spirits",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "+30% <img src='img/defense.png' />.",
//   unlocked: false,
//   activated: false
// },
// {
//   name: "Stone Circles",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "+.2 <img src='img/faith.png' /> PM per Quarry.",
//   unlocked: false,
//   activated: false
// },
// {
//   name: "Lord of the Flies",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "+1 <img src='img/happy.png' /> per 4 <img src='img/pollution.png' />",
//   unlocked: false,
//   activated: false
// },
// {
//   name: "The Furies",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "+10 <img src='img/faith.png'/> when you declare war.",
//   unlocked: false,
//   activated: false
// },
// {
//   name: "The Fates",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "Increases chance of good events.",
//   unlocked: false,
//   activated: false
// },
// {
//   name: "Doggy Cult",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "Converts all <img src='img/horse.png' /> into Chihuahuas.",
//   unlocked: false,
//   activated: false
// },
// {
//   name: "Spaghetti Monster",
//   level: "Pantheon",
//   costMult: 1,
//   effect: "+1 Spaghetti resource.",
//   unlocked: false,
//   activated: false
// },

let goh:FaithBonus = new FaithBonus('Goddess of the Halibut', FaithTier.Pantheon, true, true, `Converts half your <img src='img/fish.png' /> into <img src='img/faith.png' /> PM`, function () {

});
let sos:FaithBonus = new FaithBonus('Spirit of the Spices', FaithTier.Pantheon, true, true, `+1% <img src='img/faith.png' /> per <img src='img/spices.png' /> (max 25%)`, function () {

});

let faithBonuses = new Collection('faithBonuses', [goh, sos]);

export = faithBonuses;
