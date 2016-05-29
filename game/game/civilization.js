"use strict";
var Civilization = (function () {
    function Civilization(civName, leaderName, location) {
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
        this.legacy = 0;
        this.achievements = 0;
        this.goldenAgeProgress = 0;
        this.goldenAgeGoal = 100000;
        this.population = 1;
        this.populationGrowthCost = 10;
        this.populationReal = 1000;
        this.cash = 0;
        this.cashPM = 0;
        this.research = 0;
        this.researchPM = 0;
        this.researchCost = 10;
        this.researchingTechs = 'none';
        this.researchingTechsArray = [];
        this.techs = 0;
        this.strength = 10;
        this.defense = 10;
    }
    return Civilization;
}());
module.exports = Civilization;
//# sourceMappingURL=civilization.js.map