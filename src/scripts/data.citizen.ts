import Citizen = require('./citizen');
import Collection = require('./collection');
import Utils = require('./utils');
import notify = require('./notify');

let u = new Utils();

let farmer:Citizen = new Citizen('farmer', 'farmer', 0, 'Farmers provide +.2 <img src="img/food.png"> PC and +1.2 PS.', 1.2, 0, function (resources:Collection, amount:number) {
  resources.get('food').perClick += amount * .2;
  resources.get('food').perSecond += amount * 1.2;
  u.elt('.r-food-pc').textContent = resources.get('food').perClick.toFixed(1) + ' PC';
  u.elt('.r-food-ps').textContent = resources.get('food').perSecond.toFixed(1) + ' PS';
  console.log(resources.get('food'));
});
let miner:Citizen = new Citizen('miner', 'miner', 0, 'Miners provide +.2 <img src="img/prod.png"> PC and +.2 PS.', 0, 0, function (resources:Collection, amount:number) {
  resources.get('prod').perClick += amount * .2;
  resources.get('prod').perSecond += amount * .2;
  u.elt('.r-prod-pc').textContent = resources.get('prod').perClick.toFixed(1) + ' PC';
  u.elt('.r-prod-ps').textContent = resources.get('prod').perSecond.toFixed(1) + ' PS';
  console.log(resources.get('prod'));
});
let soldier:Citizen = new Citizen('soldier', 'soldier-alt', 0, 'Soldiers defend and fight for your empire. -3 <img src="img/coin.png">', 0, 0);
let cleric:Citizen = new Citizen('cleric', 'cleric', 0, 'Clerics proselytize your empire. +1 <img src="img/faith.png"> PM', 0, 0);

let citizens:Collection = new Collection('Citizens', [farmer, miner, soldier, cleric]);

export = citizens;
