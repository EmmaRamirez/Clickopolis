import { Collection, Achievement, Game, Civilization } from '../classes';

let babyClicker =  Achievement('Baby Clicker', 'click once.', function (playerCiv:Civilization, game:Game) {
  if (game.totalClicks > 0) {
    return true;
  } else {
    return false;
  }
});
let aHundredMightyClicks =  Achievement('A Hundred Mighty Clicks', 'click 100 times.', function (playerCiv:Civilization, game:Game) {
  return true;
});
let theGreatClicker =  Achievement('The Great Clicker', 'click 1K times.', function (playerCiv:Civilization, game:Game) {
  return false;
});
let royalClicker =  Achievement('Royal Clicker', 'click 25K times.', function (playerCiv:Civilization, game:Game) {
  return false;
});
let empireOfClicks =  Achievement('Empire of Clicks', 'click 50K times.', function (playerCiv:Civilization, game:Game) {
  return false;
});
let hyperClicker =  Achievement('HyperClicker', 'click 100K times.', function (playerCiv:Civilization, game:Game) {
  return false;
});




export let achievements = new Collection('achievements', [
  babyClicker, aHundredMightyClicks, theGreatClicker, royalClicker, empireOfClicks, hyperClicker
]);
