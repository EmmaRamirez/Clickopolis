import Collection = require('./collection');

interface Point {
  x: number;
  y: number;
}

enum BiomeTypes {
  Desert,
  Jungle,
  Forest,
  Island,
  Coast,
  Mountain,
  Tundra,
  Glacier
}

interface Biome {
  name: BiomeTypes;
  description: string;
}

class Civilization {
  civName: string;

  leaderName: string;
  leaderTraits: string[];
  leaderTraitsMax: number;

  location: string;
  biomes: Collection<Biome>;

  happiness: number;
  anger: number;
  health: number;
  pollution: number;
  influence: number;
  land: number;
  legacy: number;

  population: number;
  populationGrowthCost: number;
  populationReal: number;
  populationEmployed: number;

  achievements: number;
  wondersBuilt: number;

  cash: number;
  cashPM: number;

  goldenAges: number;
  goldenAgeProgress: number;
  goldenAgeGoal: number;
  goldenAgeMult: number;

  research: number;
  researchPM: number;
  researchCost: number;
  researchingTechs: string;
  researchingTechsArray: string[];

  techs: number;

  faith: number;
  faithPM: number;

  strength: number;
  defense: number;


  conquestedCivs: Civilization[];

  reset() {
    // exhaustive method goes here
  }

  constructor(civName:string, leaderName:string, location:string) {
    this.civName = civName;
    this.leaderName = leaderName;
    this.location = location;

    this.leaderTraits = [];
    this.leaderTraitsMax = 3;

    this.happiness = 15;
    this.anger = 1;
    this.health = 25;
    this.pollution = 1;
    this.influence = 0;
    this.land = 1;
    this.legacy = 0;

    this.achievements = 0;
    this.wondersBuilt = 0;

    this.goldenAgeProgress = 0;
    this.goldenAgeGoal = 100000;

    this.population = 1;
    this.populationGrowthCost = 10;
    this.populationReal = 1000;
    this.populationEmployed = 1;

    this.cash = 0;
    this.cashPM = 0;

    this.research = 0;
    this.researchPM = 0;
    this.researchCost = 10;
    this.researchingTechsArray = [];
    this.techs = 0;

    this.faith = 0;
    this.faithPM = 0;

    this.strength = 10;
    this.defense = 10;
  }




}

export = Civilization;
