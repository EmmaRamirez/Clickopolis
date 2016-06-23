"use strict";
var Citizen = require('./citizen');
var Collection = require('./collection');
var farmer = new Citizen('farmer', 'farmer', 0, 'a farmer', 1, 0);
var miner = new Citizen('miner', 'miner', 0, 'a miner', 1, 0);
var soldier = new Citizen('soldier', 'soldier', 0, 'a soldier', 1, 0);
var citizens = new Collection('Citizens', [farmer, miner, soldier]);
module.exports = citizens;
//# sourceMappingURL=data.citizen.js.map