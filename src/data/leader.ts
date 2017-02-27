import { Utils } from './utils';
import { Trait, Leader } from './leader';
import Collection = require('./collection');

let tactical:Trait = {
	name: 'tactical',
	description: `<ul><li>Intelligence on rivals increased for each General in your army.</li><li>Can trigger Turning Point Battle against foes of similar strength.</li></ul>`,
	unlocked: true
}

let charismatic:Trait = {
	name: 'charismatic',
	description: `<ul><li>+25% Domestic Influence when at war.</li><li>+25% International Influence during peacetime.</li><li>Friendly nations are more likely to do favors for you.</li></ul>`,
	unlocked: true
}

let cannotTellALie:Trait = {
	name: 'cannot tell a lie',
	description: `<ul><li>Reveals Intents of all Nations when you unlock the Constitutions technology.</ul></li>`,
	unlocked: false
}

let fiscal:Trait = {
	name: 'fiscal',
	description: `<ul>
									<li>Buildings are 25% cheaper to produce</li>
									<li>Can only tax citizens at 50% efficiency</li>
								</ul>`,
	unlocked: true
}

let industrious:Trait = {
	name: 'industrious',
	description: `<ul>
									<li>Extra +.1 <img src='img/prod.png'> PS per citizen</li>
								</ul>`,
	unlocked: true
}

let theIronLady:Trait = {
	name: 'the iron lady',
	description: ``,
	unlocked: true
}

let peaceful:Trait = {
	name: 'peaceful',
	description: ``,
	unlocked: true
}

let abrahamLincoln = new Leader(
		'Abraham Lincoln',
		'United States of America',
		[tactical, charismatic, cannotTellALie]
	);

let magaretThatcher = new Leader(
		'Margaret Thatcher',
		'England',
		[fiscal, industrious, theIronLady]
	);

let nelsonMandela = new Leader(
		'Nelson Mandela',
		'South Africa',
		[peaceful]
	);

let maoZedong = new Leader(
		'Mao Zedong',
		'China',
		[peaceful]
	);

let jfk = new Leader(
		'John F Kennedy',
		'United States of America',
		[peaceful]
	);

let vladimirLenin = new Leader(
		'Vladimir Lenin',
		'Russia',
		[peaceful]
	);

let montezumaII = new Leader(
		'Montezuma II',
		'Aztec',
		[peaceful]
	);

export const leaders = new Collection<Leader>('leaders', [
		abrahamLincoln,
		magaretThatcher,
		nelsonMandela,
		maoZedong,
		jfk,
		vladimirLenin,
		montezumaII

	]);
