"use strict";
var Game = (function () {
    function Game(introStep) {
        this.introStep = introStep;
        this.era = 'ancient';
        this.year = 0;
        this.time = 0;
        this.version = '0.0.1';
    }
    return Game;
}());
module.exports = Game;
//# sourceMappingURL=game.js.map