import { Utils } from '../utils';
import { Citizen, Collection, Resource, Civilization, notify } from '../classes';

const u = new Utils();

let ruler:Citizen = new Citizen('ruler', 'ruler', '#96D0E3', 1, 'This is you, their greatest citizen.', {}, {}, {}, {});
ruler.descriptionOverride = true;
let farmer:Citizen = new Citizen('farmer', 'farmer', '#94C484', 0, 'Farmers provide +.2 <img src="img/food.png"> PC and +1.2 PS.', {name: 'food', mod: 'PC', amount: .2 }, { name: 'food', mod: 'PS', amount: 1.2 }, {}, {}, true, true);
let miner:Citizen = new Citizen('miner', 'miner', '#CCBE93', 0, 'Miners provide +.2 <img src="img/prod.png"> PC and +.2 PS.', { name: 'prod', mod: 'PC', amount: .5 }, { name: 'prod', mod: 'PS', amount: .5 }, {}, {}, true, true);
let woodcutter:Citizen = new Citizen('woodcutter', 'woodcutter', '#8C775B', 0, 'Woodcutters provide +.2 <img src="img/prod.png"> PC and +.2 PS', { name: 'prod', mod: 'PC', amount: .4 }, { name: 'prod', mod: 'PS', amount: .4 }, {}, {}, true, false);
let soldier:Citizen = new Citizen('soldier', 'soldier-alt', '#DB1818', 0, 'See military panel for more details.', {  }, { }, {}, {}, true, true);
soldier.descriptionOverride = true;
let cleric:Citizen = new Citizen('cleric', 'cleric', '#DEDED9', 0, 'Clerics proselytize your empire. +1 <img src="img/faith.png"> PM', { name: 'faith', mod: 'PM', amount: 1 }, {}, {}, {}, true, false);
let merchant:Citizen = new Citizen('merchant', 'merchant', '#A0D190', 0, 'Merchants sell and trade goods.', { name: 'cash', mod: 'PM', amount: 8 }, {}, {}, {}, true, false);
let artist:Citizen = new Citizen('artist', 'artist', '#C41B7E', 0, 'Aritsts boost culture and create Great Works.', { name: 'culture', mod: 'PM', amount: 1}, {}, {}, {}, true, false);
let scientist:Citizen = new Citizen('scientist', 'scientist', '#83D4D4', 0, 'Scentists conduct research for your empire.', { name: 'research', mod: 'PM', amount: 2 }, {}, {}, {}, true, false);

export let citizens:Collection<Citizen> = new Collection('Citizens', [ruler, farmer, miner, woodcutter, soldier, cleric, merchant, artist, scientist]);
