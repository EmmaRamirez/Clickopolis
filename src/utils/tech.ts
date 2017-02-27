import { Collection, Tech } from '../classes';
import { techs } from '../data';

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
