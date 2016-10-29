import { Citizen } from './citizen';
import Collection = require('./collection');
import { Utils, iterateOverNodelist } from './utils';
import Resource = require('./resource');
import Civilization = require('./civilization');
import { notify } from './notify';

const u = new Utils();

export interface citizenFunctionOptions {
	citizens: Collection<Citizen>;
	playerCiv: Civilization;
	resources: Collection<Resource>;
	amount: number;
}

function farmerFunction (resources, amount, farmer) {
	resources.get('food').perClick += amount * farmer.contrib1.amount;
  resources.get('food').perSecond += amount * farmer.contrib2.amount;
  u.elt('.r-food-pc').textContent = resources.get('food').perClick.toFixed(1);
  u.elt('.r-food-ps').textContent = resources.get('food').perSecond.toFixed(1);
  console.log('farmer Function', resources.get('food'));
}

function minerFunction (resources, amount, miner) {
	resources.get('prod').perClick += amount * miner.contrib1.amount;
  resources.get('prod').perSecond += amount * miner.contrib2.amount;
  u.elt('.r-prod-pc').textContent = resources.get('prod').perClick.toFixed(1);
  u.elt('.r-prod-ps').textContent = resources.get('prod').perSecond.toFixed(1);
  console.log(resources.get('prod'));
}

function woodcutterFunction (resources, amount, woodcutter) {
	resources.get('prod').perClick += amount * woodcutter.contrib1.amount;
  resources.get('prod').perSecond += amount * woodcutter.contrib2.amount;
  u.elt('.r-prod-pc').textContent = resources.get('prod').perClick.toFixed(1);
  u.elt('.r-prod-ps').textContent = resources.get('prod').perSecond.toFixed(1);
  console.log(resources.get('prod'));
}

function soldierFunction (playerCiv, amount, soldier) {
	playerCiv.cashPM += amount * soldier.contrib1.amount;
  playerCiv.cashPMFromMilitary += amount * soldier.contrib1.amount;
  playerCiv.strength += amount * soldier.contrib2.amount;
  u.elt('.cash-from-military').textContent = playerCiv.cashPMFromMilitary;
  u.elt('.cash-PM').textContent = playerCiv.cashPM;
}

function clericFunction (playerCiv, amount, cleric) {
	playerCiv.faithPM += amount * cleric.contrib1.amount;
}

function merchantFunction (playerCiv, amount, merchant) {
	playerCiv.cashPM += amount * this.contrib1.amount;
  u.elt('.cash-PM').textContent = playerCiv.cashPM;
}

function artistFunction (playerCiv, artist, amount) {
	playerCiv.culturePM += this.contrib1.amount;
}

function scientistFunction (playerCiv, scientist, amount) {
	playerCiv.researchPM += this.contrib1.amount;
}



export function citizenFunction (citizenName:string, options:citizenFunctionOptions) {
	switch (citizenName) {
		case 'farmer':
			farmerFunction(options.resources, options.amount, options.citizens.get('farmer'));
			break;
		case 'miner':
			minerFunction(options.resources, options.amount, options.citizens.get('miner'));
			break;
		case 'woodcutter':
			woodcutterFunction(options.resources, options.amount, options.citizens.get('woodcutter'));
			break;
		case 'soldier':
			soldierFunction(options.playerCiv, options.amount, options.citizens.get('soldier'));
			break;
		case 'cleric':
			clericFunction(options.playerCiv, options.amount, options.citizens.get('cleric'));
			break;
		case 'merchant':
			merchantFunction(options.playerCiv, options.amount, options.citizens.get('merchant'));
			break;
		case 'artist':
			artistFunction(options.playerCiv, options.amount, options.citizens.get('artist'));
			break;
		case 'scientist':
			scientistFunction(options.playerCiv, options.amount, options.citizens.get('scientist'));
			break;
		default:
			throw new Error('Citizen name does not match any of the options');
	}
}