import { Utils } from './utils';

export interface Trait {
	name: string;
	description: string;
	unlocked: boolean;
}

export class Leader {
	name: string;
	traits: Trait[];

	constructor(name:string, traits:Trait[]) {
		this.name = name;
		this.traits = traits;
	}
}
