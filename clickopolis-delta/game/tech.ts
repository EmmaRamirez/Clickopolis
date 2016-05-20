class Tech {
  name: string;
  era: string;
  available: boolean;
  purchased: boolean;
  prerequisite: Tech[];
  description: string;
  effects: string[];

  Tech(name: string, era: string, prequisite: Tech[], description: string, effects: string[]) {
    this.name = name;
    this.era = era;
    this.prerequisite = prequisite;
    this.description = description;
    this.effects = effects;
    this.available = false;
    this.purchased = false;
  }
}

export = Tech;
