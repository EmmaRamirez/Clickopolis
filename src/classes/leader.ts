import { Utils } from './utils';

export interface Trait {
	name: string;
	description: string;
	unlocked: boolean;
}

export class Leader {
	name: string;
	defaultCivName: string;
	traits: Trait[];

	constructor(name:string, defaultCivName:string, traits:Trait[]) {
		this.name = name;
		this.defaultCivName = defaultCivName;
		this.traits = traits;
	}
}
