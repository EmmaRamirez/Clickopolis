import Collection = require('./collection');
import { Biome } from './biome';
import { Leader } from './leader';

interface Point {
  x: number;
  y: number;
}

class Civilization {
  civName: string;

  leader: Leader;
  leaderName: string;
  

  color: string;

  location: string;
  biomes: Collection<Biome>;

  happiness: number;
  happinessBase: number;
  happinessFromBuildings: number;
  happinessFromWonders: number;
  happinessFromCitizens: number;
  happinessFromResources: number;
  happinessFromCultureBonuses: number;
  happinessFromFaithBonuses: number;
  happinessFromEvents: number;
  happinessMod: number;

  hutHappiness: number;

  anger: number;
  angerFromPopulation: number;
  angerMod: number;

  health: number;
  healthBase: number;
  healthFromResources: number;
  healthFromBuildings: number;

  pollution: number;
  pollutionFromPopulation: number;
  pollutionFromResources: number;
  pollutionFromBuildings: number;
  pollutionFromCorporations: number;
  pollutionMod: number;

  land: number;
  legacy: number;

  population: number;
  populationGrowthCost: number;
  populationReal: number;
  populationEmployed: number;

  achievements: number;
  wondersBuilt: number;

  immigration: number;
  emigration: number;
  netMigration: number;

  influenceDomestic: number;
  influenceInternational: number;


  cash: number;
  cashPM: number;
  cashPMFromCitizens: number;
  cashPMFromBuildings: number;
  cashPMFromBuildingMaintenance: number;
  cashPMFromMilitary: number;
  cashPMFromTradeRoutes: number;
  cashPMFromTradeDeals: number;
  cashPMFromSocialPolicies: number;
  cashPMFromFaith: number;
  cashPMFromLegacy: number;
  cashPMFromWonders: number;

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
  faithGameTotal: number;
  faithPMFromBuildings: number;
  faithPMFromSocialPolicies: number;
  faithPMFromResources: number;
  faithPMFromLegacy: number;
  faithPMFromWonders: number;
  faithPM: number;
  faithCost: number;

  faithBonusPantheonLimit: number;
  faithBonusPantheonTotal: number;

  culture: number;
  culturePM: number;
  culturePMMod: number;

  socialPolicySlots: number;
  socialPolicies: any[];

  strength: number;
  strengthBase: number;
  strengthFromMilitary: number;
  strengthFromBuildings: number;
  strengthMod: number;

  defense: number;
  defenseBase: number;
  defenseFromMilitary: number;
  defenseFromBuildings: number;
  defenseMod: number;

  canMeetNations: boolean;
  canMeetCoastalNations: boolean;
  canMeetOceanicNations: boolean;



  conquestedCivs: Civilization[];

  reset() {
    // exhaustive method goes here
  }

  constructor(civName:string, leaderName:string, leader:Leader, biomes:Collection<Biome>) {
    this.civName = civName;
    this.leaderName = leaderName;
    //this.location = location;
    this.biomes = biomes;
    this.leader = leader;

    this.color = '#5fe49b';

    this.happiness = 0;
    this.happinessMod = 1;
    this.happinessBase = 15;
    this.happinessFromBuildings = 0;
    this.happinessFromWonders = 0;
    this.happinessFromCitizens = 0;
    this.happinessFromResources = 0;
    this.happinessFromCultureBonuses = 0;
    this.happinessFromFaithBonuses = 0;
    this.happinessFromEvents = 0;

    this.hutHappiness = 1;

    this.anger = 0;
    this.angerMod = 1;
    this.angerFromPopulation = 1;

    this.health = 0;
    this.healthBase = 25;
    this.healthFromResources = 0;
    this.healthFromBuildings = 0;

    this.pollution = 0;
    this.pollutionFromPopulation = 0;
    this.pollutionFromBuildings = 0;
    this.pollutionFromCorporations = 0;
    this.pollutionFromResources = 0;
    this.pollutionMod = 1;

    this.land = 40;
    this.legacy = 0;

    this.achievements = 0;
    this.wondersBuilt = 0;

    this.goldenAgeProgress = 0;
    this.goldenAgeGoal = 100000;
    this.goldenAges = 0;

    this.influenceDomestic = 0;
    this.influenceInternational = 0;

    this.immigration = 0;
    this.emigration = 0;
    this.netMigration = this.immigration - this.emigration;

    this.population = 1;
    this.populationGrowthCost = 10;
    this.populationReal = 1000;
    this.populationEmployed = 1;

    this.cash = 0;
    this.cashPM = 0;
    this.cashPMFromCitizens = 0;
    this.cashPMFromBuildings = 0;
    this.cashPMFromBuildingMaintenance = 0;
    this.cashPMFromMilitary = 0;
    this.cashPMFromTradeRoutes = 0;

    this.research = 0;
    this.researchPM = 0;
    this.researchCost = 10;
    this.researchingTechsArray = [];
    this.techs = 0;

    this.faith = 0;
    this.faithPM = 0;
    this.faithCost = 1;

    this.faithBonusPantheonLimit = 7;
    this.faithBonusPantheonTotal = 0;

    this.culture = 0;
    this.culturePM = 0;
    this.culturePMMod = 1;

    this.socialPolicySlots = 3;
    this.socialPolicies = [];

    this.strength = 10;
    this.strengthBase = 10;
    this.strengthFromBuildings = 0;
    this.strengthFromMilitary = 0;
    this.strengthMod = 1;

    this.defense = 10;
    this.defenseBase = 10;
    this.defenseFromBuildings = 0;
    this.defenseFromMilitary = 0;
    this.defenseMod = 1;

    this.canMeetNations = false;
    this.canMeetCoastalNations = false;
    this.canMeetOceanicNations = false;
  }
}

export = Civilization;
