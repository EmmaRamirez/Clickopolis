import { Collection, Achievement, Game, Civilization } from '../classes';

let babyClicker = new Achievement('Baby Clicker', 'click once.', function (playerCiv:Civilization, game:Game) {
  if (game.totalClicks > 0) {
    return true;
  } else {
    return false;
  }
});
let aHundredMightyClicks = new Achievement('A Hundred Mighty Clicks', 'click 100 times.', function (playerCiv:Civilization, game:Game) {
  return true;
});
let theGreatClicker = new Achievement('The Great Clicker', 'click 1K times.', function (playerCiv:Civilization, game:Game) {
  return false;
});
let royalClicker = new Achievement('Royal Clicker', 'click 25K times.', function (playerCiv:Civilization, game:Game) {
  return false;
});
let empireOfClicks = new Achievement('Empire of Clicks', 'click 50K times.', function (playerCiv:Civilization, game:Game) {
  return false;
});
let hyperClicker = new Achievement('HyperClicker', 'click 100K times.', function (playerCiv:Civilization, game:Game) {
  return false;
});




export let achievementData = new Collection('achievements', [
  babyClicker, aHundredMightyClicks, theGreatClicker, royalClicker, empireOfClicks, hyperClicker
]);
