import Collection = require('./collection');
import Tech = require('./tech');
import techData = require('./data.tech');

let techs = techData;



export function unlockTech(tech:string):boolean {
  if (!techs.get(tech).enabled) {
    techs.get(tech).enabled = true;
    return true;
  } else {
    throw new Error('Technology already enabled');
  }
}

export function unlockTechs(techs:string[]):boolean {
  return false;
}

