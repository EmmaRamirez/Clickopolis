import Collection = require('./collection');
import Achievement = require('./achievement');
import Game = require('./game');
import Civilization = require('./civilization');

let babyClicker = new Achievement('Baby Clicker', function () {

});

let achievementData = new Collection('achievements', [
  babyClicker
]);

export = achievementData;
