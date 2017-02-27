import { Utils } from '../utils';
import { Trait } from './trait';

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
