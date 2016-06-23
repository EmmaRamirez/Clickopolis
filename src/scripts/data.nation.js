"use strict";
var Nation = require('./nation');
var Collection = require('./collection');
var Utils = require('./utils');
var u = new Utils();
// constructor(name:string, image:number, color:string, description:string, influence:number, strength:number, defense:number, cash:number, peacefulness:number, isAtWar:boolean)
function createRandomName() {
    var prefix = ['viv', 'arg', 'top', 'tum', 'tu', 'roq', 'lax', 'acr', 'arc', 'ber', 'l', 'lol', 'lon', 'arlon', 'ganlon'];
    var joiner = ['o', 'a', 'e', 'u'];
    var suffix = ['polis', 'topia', 'dom', 'gok', 'ton', 'runq', 'lore', 'dash', 'm', 'n'];
    var resultString = u.choose(prefix) + u.choose(joiner) + u.choose(suffix);
    return u.capitalize(resultString);
}
var argaria = new Nation('Argaria', 1, '#344211', 'A tiny and impotent nation composed of villagers.', 0, 10, 10, 130, 7, false);
var nations = new Collection('Nations', []);
module.exports = nations;
//# sourceMappingURL=data.nation.js.map