import Citizen = require('./citizen');
import Collection = require('./collection');
import Utils = require('./utils');
import Resource = require('./resource');
import Civilization = require('./civilization');
import notify = require('./notify');

let u = new Utils();

let ruler:Citizen = new Citizen('ruler', 'CEO', '#96D0E3', 1, 'This is you, their greatest citizen.', {}, {}, {}, {});
ruler.descriptionOverride = true;
let farmer:Citizen = new Citizen('farmer', 'farmer', '#94C484', 0, 'Farmers provide +.2 <img src="img/food.png"> PC and +1.2 PS.', {name: 'food', mod: 'PC', amount: .2 }, { name: 'food', mod: 'PS', amount: 1.2 }, {}, {}, true, true, function (amount:number, resources:Collection<Resource>) {
  resources.get('food').perClick += amount * this.contrib1.amount;
  resources.get('food').perSecond += amount * this.contrib2.amount;
  u.elt('.r-food-pc').textContent = resources.get('food').perClick.toFixed(1) + ' PC';
  u.elt('.r-food-ps').textContent = resources.get('food').perSecond.toFixed(1) + ' PS';
  console.log(resources.get('food'));
});
let miner:Citizen = new Citizen('miner', 'miner', '#CCBE93', 0, 'Miners provide +.2 <img src="img/prod.png"> PC and +.2 PS.', { name: 'prod', mod: 'PC', amount: .2 }, { name: 'prod', mod: 'PS', amount: .2 }, {}, {}, true, true, function (amount:number, resources:Collection<Resource>) {
  resources.get('prod').perClick += amount * this.contrib1.amount;
  resources.get('prod').perSecond += amount * this.contrib2.amount;
  u.elt('.r-prod-pc').textContent = resources.get('prod').perClick.toFixed(1) + ' PC';
  u.elt('.r-prod-ps').textContent = resources.get('prod').perSecond.toFixed(1) + ' PS';
  console.log(resources.get('prod'));
});
let woodcutter:Citizen = new Citizen('woodcutter', 'woodcutter', '#8C775B', 0, 'Woodcutters provide +.2 <img src="img/prod.png"> PC and +.2 PS', { name: 'prod', mod: 'PC', amount: .2 }, { name: 'prod', mod: 'PS', amount: .2 }, {}, {}, true, false, function (amount:number, resources:Collection<Resource>) {
  resources.get('prod').perClick += amount * this.contrib1.amount;
  resources.get('prod').perSecond += amount * this.contrib2.amount;
  u.elt('.r-prod-pc').textContent = resources.get('prod').perClick.toFixed(1) + ' PC';
  u.elt('.r-prod-ps').textContent = resources.get('prod').perSecond.toFixed(1) + ' PS';
  console.log(resources.get('prod'));
});
let soldier:Citizen = new Citizen('soldier', 'soldier-alt', '#5B8C76', 0, 'Soldiers defend and fight for your empire. -3 <img src="img/coin.png">', { name: 'coin', mod: 'PM', amount: -2 }, { name: 'strength', mod: '', amount: 2}, {}, {}, true, true, function (amount:number, resources:Collection<Resource>, playerCiv:Civilization) {
  playerCiv.cashPM += amount * this.contrib1.amount;
  playerCiv.cashPMFromMilitary += amount * this.contrib1.amount;
  playerCiv.strength += amount * this.contrib2.amount;
  u.elt('.cash-from-military').textContent = playerCiv.cashPMFromMilitary;
  u.elt('.cash-PM').textContent = playerCiv.cashPM;
});
let cleric:Citizen = new Citizen('cleric', 'cleric', '#DEDED9', 0, 'Clerics proselytize your empire. +1 <img src="img/faith.png"> PM', { name: 'faith', mod: 'PM', amount: 1 }, {}, {}, {}, true, false, function (amount:number, resources:Collection<Resource>, playerCiv:Civilization) {
  playerCiv.faithPM += amount * this.contrib1.amount;
});
let merchant:Citizen = new Citizen('merchant', 'merchant', '#COLOR', 0, 'Merchants sell and trade goods.', { name: 'cash', mod: 'PM', amount: 10 }, {}, {}, {}, true, false, function (amount:number, resources:Collection<Resource>, playerCiv:Civilization) {
  playerCiv.cashPM += amount * this.contrib1.amount;
  u.elt('.cash-PM').textContent = playerCiv.cashPM;
});
let scientist:Citizen = new Citizen('scientist', 'scientist', '#83D4D4', 0, 'Scentists conduct research for your empire.', { name: 'research', mod: 'PM', amount: 2 }, {}, {}, {}, true, false, function () {

});

let citizens:Collection<Citizen> = new Collection('Citizens', [ruler, farmer, miner, woodcutter, soldier, cleric, scientist]);

export = citizens;
