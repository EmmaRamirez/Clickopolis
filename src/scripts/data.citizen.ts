import Citizen = require('./citizen');
import Collection = require('./collection');

let farmer:Citizen = new Citizen('farmer', 'farmer', 0, 'a farmer', 1, 0);
let miner:Citizen = new Citizen('miner', 'miner', 0, 'a miner', 1, 0);
let soldier:Citizen = new Citizen('soldier', 'soldier', 0, 'a soldier', 1, 0);
let cleric:Citizen = new Citizen('cleric', 'cleric', 0, 'a cleric', 1, 0);

let citizens:Collection = new Collection('Citizens', [farmer, miner, soldier, cleric]);

export = citizens;
