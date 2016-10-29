import Collection = require('./collection');
import { SocialPolicy, createSocialPolicy } from './socialpolicy';

// name: string;
// category: string;
// description: string;
// cost: number;
// visible: boolean;
// unlocked: boolean;
// active: boolean;

let codeOfHonor = {
	name: 'Code of Honor',
	category: 'military',
	description: '+3 Soldier <img src="img/strength.png"> Strength',
	cost: 5,
	visible: true,
	unlocked: false,
	active: false,
};

let brutishBounty = {
	name: 'Brutish Bounty',
	category: 'military',
	description: '+1 <img src="img/culture.png">, +1 <img src="img/cash.png"> per battle victory.',
	cost: 15,
	visible: true,
	unlocked: false,
	active: false,
};

let warriorCulture = {
	name: 'Warrior Culture',
	category: 'military',
	description: 'Soldiers provide +.25 <img src="img/culture.png"> PM',
	cost: 35,
	visible: true,
	unlocked: false,
	active: false,
};

let tacticalExpertise = {
	name: 'Tactical Expertise',
	category: 'military',
	description: '+25% General effectiveness',
	cost: 75,
	visible: true,
	unlocked: false,
	active: false,
};

let artOfWar = {
	name: 'Art of War',
	category: 'military',
	description: '+1 <img src="img/strength.png"> per Artist',
	cost: 210,
	visible: true,
	unlocked: false,
	active: false,
};

let odysseanLegacy = {
	name: 'Odyssean Legacy',
	category: 'military',
	description: '+10 <img src="img/culture.png"> PM per General',
	cost: 1750,
	visible: true,
	unlocked: false,
	active: false,
};

let nobleStatesmen = {
	name: 'Noble Statesmen',
	category: 'diplomacy',
	description: '+5 International Influence <img src="img/influence-international.png"></span>',
	cost: 5,
	visible: true,
	unlocked: false,
	active: false,
};

export let socialPolicies:Collection<SocialPolicy> = new Collection('Social Policies', [
		codeOfHonor,
		brutishBounty,
		warriorCulture,
		tacticalExpertise,
		artOfWar,
		odysseanLegacy,
		nobleStatesmen,
	]);