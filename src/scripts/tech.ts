class Tech {
  name: string;
  era: string;
  available: boolean;
  purchased: boolean;
  selected: boolean;
  prerequisite: Tech[];
  description: string;
  effects: string[];
  func: Function;

  constructor(name: string, era: string, description: string, effects: string[], func:Function = function(){}) {
    this.name = name;
    this.era = era;
    //this.prerequisite = prequisite;
    this.description = description;
    this.effects = effects;

    this.available = false;
    this.purchased = false;
    this.selected = false;
    this.func = func;
  }
}

export = Tech;
