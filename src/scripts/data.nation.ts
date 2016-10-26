import Nation = require('./nation');
import Collection = require('./collection');
import { Utils } from './utils';

let u = new Utils();

// constructor(name:string, image:number, color:string, description:string, influence:number, strength:number, defense:number, cash:number, peacefulness:number, isAtWar:boolean)

function createRandomName():string {
  let prefix = ['viv', 'arg', 'top', 'tum', 'tu', 'roq', 'lax', 'acr', 'arc', 'ber', 'l', 'lol', 'lon', 'arlon', 'ganlon', 'entr', 'art'];
  let joiner = ['o', 'a', 'e', 'u'];
  let suffix = ['polis', 'topia', 'dom', 'gok', 'ton', 'runq', 'lore', 'dash', 'm', 'n', 'pia', 'los', 'las'];

  let resultString = u.choose(prefix) + u.choose(joiner) + u.choose(suffix);

  return u.capitalize(resultString);
}

let argaria:Nation = new Nation('Argaria', 1, '#344211', 'A tiny and impotent nation composed of villagers.', 0, 10, 10, 130, 7, false);


let nations:Collection<Nation> = new Collection('Nations', []);

export = nations;
