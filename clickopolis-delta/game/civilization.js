"use strict";
var Civilization = (function () {
    function Civilization(civName, leaderName, location) {
        this.civName = civName;
        this.leaderName = leaderName;
        this.location = location;
        this.leaderTraits = [];
        this.leaderTraitsMax = 3;
        this.happiness = 0;
        this.anger = 0;
        this.health = 0;
        this.pollution = 0;
        this.influence = 0;
        this.legacy = 0;
        this.achievements = 0;
        this.goldenAgeProgress = 0;
        this.goldenAgeGoal = 100000;
        this.population = 1;
        this.populationGrowthCost = 10;
    }
    return Civilization;
}());
module.exports = Civilization;
//# sourceMappingURL=civilization.js.map