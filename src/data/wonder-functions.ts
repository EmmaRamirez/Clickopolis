import { Utils, iterateOverNodelist } from './utils';

const u = new Utils;



export const WonderFunction = {
	check: (wonder, args) => {
		if (wonder === 'The Great Pyramids') {
			return (args.resources.get('stone').total >= 20) ? true : false;
		}
	},
	prebuild: (wonder, args) => {
		if (wonder === 'The Great Pyramids') {
			args.resources.get('stone').total -= 10;
		}
	},
	finished: (wonder, args) => {
		if (wonder === 'The Great Pyramids') {

		}
	}
}
