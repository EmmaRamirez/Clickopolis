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
}

export const military:Collection<Soldier> = new Collection(
   		'Military',
   		[
   			footSoldier,
   			archer,
   			spearman,
   			galley,
   		]
	);