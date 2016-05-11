// <reference path="store.d.ts" />
// <reference path="underscore.d.ts" />
"use strict";
var _ = require('underscore');
var Game = require('./game');
var Civilization = require('./civilization');
console.log(_.random(0, 100));
var game = new Game(0);
var playerCiv;
if (store.get('playerCiv') !== undefined) {
    var loadCiv = store.get('playerCiv');
    playerCiv = new Civilization(loadCiv.civName, loadCiv.leaderName, loadCiv.location);
}
else {
    playerCiv = new Civilization('', '', '');
}
function savePlayer() {
    store.set('playerCiv', playerCiv);
    console.log(store.get('playerCiv'));
}
function removeItem(arr, item) {
    for (var i = arr.length - 1; i--;) {
        if (arr[i] === item)
            arr.splice(i, 1);
    }
}
function prepend(node, html) {
    document[node].insertAdjacentHTML('beforeend', html);
}
function startScreen() {
    var htmlString = "\n    <section class=\"clickopolis-start\">\n      <h1>Clickopolis</h1>\n      <div class=\"start-options\">\n        <button class=\"large-btn start-btn load-btn\">Load Game...</button>\n        <button class=\"large-btn start-btn new-btn\">New Game</button>\n        <button class=\"large-btn start-btn current-btn\">\n          <p class=\"current-game-heading\">Current Game - " + playerCiv.leaderName + " of " + playerCiv.civName + " </p>\n          <p>\n            <span>\n              <img src=\"img/achievements.png\"> 5\n            </span>\n            <span>\n              <img src=\"img/strength.png\"> 33\n            </span>\n            <span>\n              <img src=\"img/defense.png\"> 44\n            </span>\n            <span>\n              <img src=\"img/legacy.png\"> 2\n            </span>\n            <span>\n              <img src=\"img/coin.png\"> 1K\n            </span>\n            <span>\n              <img src=\"img/wonder.png\"> 1\n            </span>\n          </p>\n        </button>\n      </div>\n    </section>\n  ";
    document.body.insertAdjacentHTML('beforeend', htmlString);
    bindLoadGameButton();
    bindNewGameButton();
    bindCurrentGameButton();
}
function bindLoadGameButton() { }
;
function bindNewGameButton() {
    document.querySelector('.new-btn').addEventListener('click', function (event) {
        newGameStart();
    });
}
;
function bindCurrentGameButton() { }
;
function newGameStart() {
    var htmlString = "\n    <section class=\"clickopolis-intro\">\n      <span class=\"step-one\">\n        <h1>Welcome to the World of Clickopolis!</h1>\n        <p>Starting from the flames of the ancient world, you will progress steadily towards modernity&hellip;and beyond. You, the leader of a small faction of hunter-gatherers, have decided to settle\n          <select id=\"location\">\n            <option value=\"none\">select an option!</option>\n            <option value=\"coast\">by the Coast</option>\n            <option value=\"oasis\">in an Oasis</option>\n            <option value=\"forest\">in a Forest</option>\n            <option value=\"tundra\">in a Tundra</option>\n            <option value=\"iceberg\">on an Iceberg</option>\n          </select>\n        </p>\n        <p>Your name? <input type=\"text\" id=\"leaderName\" placeholder=\"Jake\"><br><br> And the name of your empire? <input type=\"text\" id=\"civName\" placeholder=\"Jaketopia\"></p>\n      </span>\n\n      <button class=\"step-btn prev-btn\">&larr; Prev</button>\n      <button class=\"step-btn next-btn\">Next &rarr;</button>\n    </section>\n  ";
    document.querySelector('.clickopolis-start').remove();
    prepend('body', htmlString);
    bindNextButton();
    //bindPrevButton();
}
function bindNextButton() {
    document.querySelector('.next-btn').addEventListener('click', function () {
        switch (game.introStep) {
            case 0:
                var lni = document.getElementById('leaderName');
                var cni = document.getElementById('civName');
                var loc = document.getElementById('location');
                createCiv(game.introStep, lni, cni, loc);
                game.introStep++;
                break;
            case 1:
                console.log('1 step ay');
                game.introStep++;
                break;
            default:
                break;
        }
    });
}
function validateStepOne() {
}
function createCiv(step, leaderNameInput, civNameInput, locationInput) {
    var leaderName = leaderNameInput.value;
    var civName = civNameInput.value;
    var location = locationInput.value;
    var prevBtn = document.querySelector('.prev-btn');
    var nextBtn = document.querySelector('.next-btn');
    playerCiv.leaderName = leaderName;
    playerCiv.civName = civName;
    playerCiv.location = location;
    savePlayer();
    if (step === 0) {
        if (leaderName === "" || civName === "" || location === "none") {
            console.error('Not all fields filled out.');
        }
        else {
            createCivStepOne(leaderName, civName, location);
            prevBtn.disabled = false;
            game.introStep = 1;
        }
    }
    if (step === 1) {
    }
}
function createCivStepOne(leaderName, civName, location) {
    //let playerCiv:Civilization = new Civilization(civName, leaderName, location);
    var stepOne = document.querySelector('.step-one');
    var stepTwo = "\n    <span class='step-two'>\n      <h2>Welcome " + playerCiv.leaderName + ", leader of " + playerCiv.civName + ", brave inhabitant of the " + playerCiv.location + "!</h2>\n      <p>What are your traits, O Glorious Leader? (Select <em id='traitsLeft'>3</em>)</p>\n      <div class='checkbox-list trait-cbl'>\n        <label><input type='checkbox' value='aggressive'>Aggressive</label>\n        <label><input type='checkbox' value='communal'>Communal</label>\n        <label><input type='checkbox' value='cunning'>Cunning</label>\n        <label><input type='checkbox' value='deliberate'>Deliberate</label>\n        <label><input type='checkbox' value='expansionist'>Expansionist</label>\n        <label><input type='checkbox' value='individualistic'>Individualistic</label>\n        <label><input type='checkbox' value='industrious'>Industrious</label>\n        <label><input type='checkbox' value='isolationist'>Isolationist</label>\n        <label><input type='checkbox' value='pacifistic'>Pacificistic</label>\n        <label><input type='checkbox' value='persuasive'>Persuasive</label>\n      </div>\n    </span>";
    stepOne.insertAdjacentHTML('afterend', stepTwo);
    stepOne.className += " hidden";
    activateTraitList(playerCiv);
}
function activateTraitList(playerCiv) {
    var traitCheckBoxes = document.querySelectorAll('.trait-cbl input');
    var traitsLeft = document.getElementById('traitsLeft');
    for (var i = 0; i < traitCheckBoxes.length; i++) {
        traitCheckBoxes[i].addEventListener('change', function (event) {
            if (this.checked === true) {
                if (playerCiv.leaderTraits.length >= 3) {
                    console.error("Exceedeed max traits.");
                    event.preventDefault();
                }
                else {
                    playerCiv.leaderTraits.push(this.value);
                    console.log(playerCiv.leaderTraits);
                    traitsLeft.textContent = (3 - playerCiv.leaderTraits.length).toString();
                }
            }
            else {
                removeItem(playerCiv.leaderTraits, this.value);
                console.log(playerCiv.leaderTraits);
                traitsLeft.textContent = (playerCiv.leaderTraits.length).toString();
            }
        });
    }
}
function init() {
    startScreen();
}
init();
//# sourceMappingURL=index.js.map