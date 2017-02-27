export class Tech {
  name: string;
  era: string;
  enabled: boolean;
  purchased: boolean;
  selected: boolean;
  visible: boolean;
  prerequisite: Tech[];
  description: string;
  effects: string[];
  categories: string[];
  func: Function;

  constructor(name: string, era: string, description: string, effects: string[], categories: string[] = [], func:Function = function(){}) {
    this.name = name;
    this.era = era;
    //this.prerequisite = prequisite;
    this.description = description;
    this.effects = effects;

    this.enabled = false;
    this.purchased = false;
    this.selected = false;
    this.visible = true;
    this.categories = categories;
    this.func = func;
  }
}
