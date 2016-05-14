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
        this.influence = 0;
        this.legacy = 0;
        this.achievements = 0;
    }
    return Civilization;
}());
module.exports = Civilization;
//# sourceMappingURL=civilization.js.map