import Collection = require('./collection');
import Tech = require('./tech');
import techData = require('./data.tech');

let techs = techData;


class techUtils {

  encodeToString() {
    
  }

  decodeFromString() {

  }

  renderTechnologies(techSelector:HTMLElement, techs:Collection<Tech>):void {

  }

  unlockTech(tech:string):boolean {
    if (!techs.get(tech).enabled) {
      techs.get(tech).enabled = true;
      return true;
    } else {
      throw new Error('Technology already enabled');
    }
  }

  unlockTechs(techs:string[]):boolean {
    return false;
  }

}

export = techUtils;
