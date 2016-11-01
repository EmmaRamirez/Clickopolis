import { Soldier } from './soldier';
import Collection = require('./collection');

let footSoldier = {
	name: 'Foot Soldier',
	plural: 'Foot Soldiers',
	amount: 0,
	enabled: true,
	baseStrength: 2,
	baseDefense: 0,
	unitType: 'land',
	upkeep: 3,
}

let archer = {
	name: 'Archer',
	plural: 'Archers',
	amount: 0,
	enabled: true,
	baseStrength: 1,
	baseDefense: 2,
	unitType: 'land',
	upkeep: 4,
}

let spearman = {
	name: 'Spearman',
	plural: 'Spearmen',
	amount: 0,
	enabled: true,
	baseStrength: 5,
	baseDefense: 1,
	unitType: 'land',
	upkeep: 6,
};

let galley = {
	name: 'Galley',
	plural: 'Galleys',
	amount: 0,
	enabled: true,
	baseStrength: 4,
	baseDefense: 2,
	unitType: 'navy',
	upkeep: 5,
};

let cavalry = {
	name: 'Cavalry',
	plural: 'Cavalry',
	amount: 0,
	enabled: true,
	baseStrength: 35,
	baseDefense: 20,
	unitType: 'land',
	upkeep: 10,
};

let cannon = {
	name: 'Cannon',
	plural: 'Cannons',
	amount: 0,
	enabled: true,
	baseStrength: 27,
	baseDefense: 55,
	unitType: 'land',
	upkeep: 12
};

let infantry = {
	name: 'Infantry',
	plural: 'Infantry',
	amount: 0,
	enabled: true,
	baseStrength: 49,
	baseDefense: 15,
	unitType: 'land',
	upkeep: 10,
};

let tank = {
	name: 'Tank',
	plural: 'Tanks',
	amount: 0,
	enabled: true,
	baseStrength: 80,
	baseDefense: 50,
	unitType: 'land',
	upkeep: 20,
};



export const military:Collection<Soldier> = new Collection(
   		'Military',
   		[
   			footSoldier,
   			archer,
   			spearman,
   			galley,
   			cavalry,
   			cannon,
   			infantry,
   			tank
   		]
	);