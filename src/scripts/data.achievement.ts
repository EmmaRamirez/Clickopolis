import Collection = require('./collection');
import Achievement = require('./achievement');
import Game = require('./game');
import Civilization = require('./civilization');

let babyClicker = new Achievement('Baby Clicker', 'click once.');
let aHundredMightyClicks = new Achievement('A Hundred Mighty Clicks', 'click 100 times.');
let theGreatClicker = new Achievement('The Great Clicker', 'click 1K times.');
let royalClicker = new Achievement('Royal Clicker', 'click 25K times.');
let empireOfClicks = new Achievement('Empire of Clicks', 'click 50K times.');
let hyperClicker = new Achievement('HyperClicker', 'click 100K times.');

let achievementData = new Collection('achievements', [
  babyClicker, aHundredMightyClicks, theGreatClicker, royalClicker, empireOfClicks, hyperClicker
]);

export = achievementData;
