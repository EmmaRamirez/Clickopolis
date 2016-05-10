"use strict";
var Civilization = (function () {
    function Civilization(civName, leaderName, location) {
        this.civName = civName;
        this.leaderName = leaderName;
        this.location = location;
        this.leaderTraits = [];
    }
    return Civilization;
}());
module.exports = Civilization;
//# sourceMappingURL=civilization.js.map