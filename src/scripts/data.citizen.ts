import Citizen = require('./citizen');
import Collection = require('./collection');

let farmer:Citizen = new Citizen('farmer', 'farmer', 0, 'Farmers provide +1 <img src="img/food.png"> PC and +.2 PC.', 1.2, 0);
let miner:Citizen = new Citizen('miner', 'miner', 0, 'Miners provide +1 <img src="img/prod.png"> PC and +.2 PC.', 0, 0);
let soldier:Citizen = new Citizen('soldier', 'soldier-alt', 0, 'Soldiers defend and fight for your empire. -3 <img src="img/coin.png">', 0, 0);
let cleric:Citizen = new Citizen('cleric', 'cleric', 0, 'Clerics heal your empire. +1 <img src="img/health.png">, +1 <img src="img/faith.png"> PM', 0, 0);

let citizens:Collection = new Collection('Citizens', [farmer, miner, soldier, cleric]);

export = citizens;
