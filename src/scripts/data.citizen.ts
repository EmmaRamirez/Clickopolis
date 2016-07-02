import Citizen = require('./citizen');
import Collection = require('./collection');
import Utils = require('./utils');
import Resource = require('./resource');
import notify = require('./notify');

let u = new Utils();

let ruler:Citizen = new Citizen('ruler', 'CEO', '#96D0E3', 1, 'This is you, their greatest citizen.', {}, {}, {}, {});
ruler.descriptionOverride = true;
let farmer:Citizen = new Citizen('farmer', 'farmer', '#94C484', 0, 'Farmers provide +.2 <img src="img/food.png"> PC and +1.2 PS.', {name: 'food', mod: 'PC', amount: .2 }, { name: 'food', mod: 'PS', amount: 1.2 }, {}, {}, function (resources:Collection<Resource>, amount:number) {
  resources.get('food').perClick += amount * this.contrib1.amount;
  resources.get('food').perSecond += amount * this.contrib2.amount;
  u.elt('.r-food-pc').textContent = resources.get('food').perClick.toFixed(1) + ' PC';
  u.elt('.r-food-ps').textContent = resources.get('food').perSecond.toFixed(1) + ' PS';
  console.log(resources.get('food'));
});
let miner:Citizen = new Citizen('miner', 'miner', '#CCBE93', 0, 'Miners provide +.2 <img src="img/prod.png"> PC and +.2 PS.', { name: 'prod', mod: 'PC', amount: .2 }, { name: 'prod', mod: 'PS', amount: .2 }, {}, {}, function (resources:Collection<Resource>, amount:number) {
  resources.get('prod').perClick += amount * this.contrib1.amount;
  resources.get('prod').perSecond += amount * this.contrib2.amount;
  u.elt('.r-prod-pc').textContent = resources.get('prod').perClick.toFixed(1) + ' PC';
  u.elt('.r-prod-ps').textContent = resources.get('prod').perSecond.toFixed(1) + ' PS';
  console.log(resources.get('prod'));
});
let woodcutter:Citizen = new Citizen('woodcutter', 'woodcutter', '#8C775B', 0, 'Woodcutters provide +.2 <img src="img/prod.png"> PC and +.2 PS', { name: 'prod', mod: 'PC', amount: .2 }, { name: 'prod', mod: 'PS', amount: .2 }, {}, {}, function (resources:Collection<Resource>, amount:number) {
  resources.get('prod').perClick += amount * this.contrib1.amount;
  resources.get('prod').perSecond += amount * this.contrib2.amount;
  u.elt('.r-prod-pc').textContent = resources.get('prod').perClick.toFixed(1) + ' PC';
  u.elt('.r-prod-ps').textContent = resources.get('prod').perSecond.toFixed(1) + ' PS';
  console.log(resources.get('prod'));
});
//let soldier:Citizen = new Citizen('soldier', 'soldier-alt', 0, 'Soldiers defend and fight for your empire. -3 <img src="img/coin.png">', 0, 0);
//let cleric:Citizen = new Citizen('cleric', 'cleric', 0, 'Clerics proselytize your empire. +1 <img src="img/faith.png"> PM', 0, 0);

let citizens:Collection<Citizen> = new Collection('Citizens', [ruler, farmer, miner, woodcutter]);

export = citizens;
