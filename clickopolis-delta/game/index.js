// <reference path="store.d.ts" />
// <reference path="underscore.d.ts" />
"use strict";
var _ = require('underscore');
var Game = require('./game');
var Civilization = require('./civilization');
var Templates = require('./template');
console.log(_.random(0, 100));
var game = new Game(0);
var playerCiv;
var templates = new Templates();
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
    var el = document.querySelector(node);
    el.insertAdjacentHTML('beforeend', html);
}
function append(node, html) {
    var el = document.querySelector(node);
    el.insertAdjacentHTML('afterend', html);
}
function bindElement(node, eventType, callback) {
    var el = document.querySelector(node);
    el.addEventListener(eventType, function (event) {
        console.log(callback);
        return callback();
    });
}
function unbindElement(node, eventType) {
}
function hideElement(element) {
    element = element;
    element.className += " hidden";
}
function removeElement(element) {
    element = element;
    element.remove();
}
function startGame() {
    if (store.get('playerCiv') !== undefined) {
        var loadCiv = store.get('playerCiv');
        playerCiv = new Civilization(loadCiv.civName, loadCiv.leaderName, loadCiv.location);
        startSavedGame();
    }
    else {
        startNewGame();
        playerCiv = new Civilization('', '', '');
    }
}
function startSavedGame() {
    console.debug("Loading Saved Game...");
    append('body', templates.createStartScreen(playerCiv));
    //store.clear();
    bindElement('.load-btn', 'click', function () {
        createGameUI();
    });
    bindElement('.current-btn', 'click', function () {
        createGameUI();
    });
}
;
function startNewGame() {
    console.debug("Starting New Game...");
    append('body', templates.settingsScreen);
    // bindElement('.new-btn', 'click', function () {
    //   console.log('Hey...is this thing working??');
    // });
    bindElement('.begin-btn', 'click', function () {
        //console.log('hi');
        setPlayerCiv();
        createGameUI();
    });
    document.querySelector('#trait').addEventListener('change', function () {
        traitsSelection(0);
    });
}
;
function traitsSelection(index) {
    var traitSelect = document.querySelector('#trait');
    var trait = traitSelect.value;
    playerCiv.leaderTraits[index] = trait;
    console.log(traitSelect.value, playerCiv.leaderTraits);
    savePlayer();
}
function createGameUI() {
    var intro = document.querySelector('.clickopolis-intro');
    var clickopolisGame = document.createElement('section');
    clickopolisGame.setAttribute('class', 'clickopolis');
    clickopolisGame.setAttribute('id', 'clickopolis');
    clickopolisGame.innerHTML = templates.createScreenHeader(playerCiv) + templates.resourcesScreen + templates.createCitizenScreen(playerCiv);
    intro.remove();
    document.body.appendChild(clickopolisGame);
    //append('body', templates.resourcesScreen);
}
function setPlayerCiv() {
    var civNameInput = document.querySelector('#civName'), leaderNameInput = document.querySelector('#leaderName'), location = document.querySelector('#location');
    playerCiv.civName = civNameInput.value;
    playerCiv.leaderName = leaderNameInput.value;
    playerCiv.location = location.value;
    savePlayer();
}
// function startScreen():void {
//   let htmlString:string = `
//     <section class="clickopolis-start">
// <h1>Clickopolis</h1>
// <div class="start-options">
//   <button class="large-btn start-btn load-btn">Load Game...</button>
//   <button class="large-btn start-btn new-btn">New Game</button>
//   <button class="large-btn start-btn current-btn">
//     <p class="current-game-heading">Current Game - ${playerCiv.leaderName} of ${playerCiv.civName} </p>
//     <p>
//       <span>
//         <img src="img/achievements.png"> 5
//       </span>
//       <span>
//         <img src="img/strength.png"> 33
//       </span>
//       <span>
//         <img src="img/defense.png"> 44
//       </span>
//       <span>
//         <img src="img/legacy.png"> 2
//       </span>
//       <span>
//         <img src="img/coin.png"> 1K
//       </span>
//       <span>
//         <img src="img/wonder.png"> 1
//       </span>
//     </p>
//   </button>
// </div>
//     </section>
//   `;
//   document.body.insertAdjacentHTML('beforeend', htmlString);
//   bindLoadGameButton();
//   bindNewGameButton();
//   bindCurrentGameButton();
// }
// function bindLoadGameButton() {};
// function bindNewGameButton():void {
//   document.querySelector('.new-btn').addEventListener('click', function(event) {
//     newGameStart();
//   });
// };
function bindCurrentGameButton() { }
;
// function newGameStart():void {
//   let htmlString = `
//     <section class="clickopolis-intro">
//       <span class="step-one">
//         <h1>Welcome to the World of Clickopolis!</h1>
//         <p>Starting from the flames of the ancient world, you will progress steadily towards modernity&hellip;and beyond. You, the leader of a small faction of hunter-gatherers, have decided to settle
//           <select id="location">
//             <option value="none">select an option!</option>
//             <option value="coast">by the Coast</option>
//             <option value="oasis">in an Oasis</option>
//             <option value="forest">in a Forest</option>
//             <option value="tundra">in a Tundra</option>
//             <option value="iceberg">on an Iceberg</option>
//           </select>
//         </p>
//         <p>Your name? <input type="text" id="leaderName" placeholder="Jake"><br><br> And the name of your empire? <input type="text" id="civName" placeholder="Jaketopia"></p>
//       </span>
//
//       <button class="step-btn next-btn">Next &rarr;</button>
//     </section>
//   `;
//   document.querySelector('.clickopolis-start').remove();
//   prepend('body', htmlString);
//   bindNextButton();
//   //bindPrevButton();
// }
function bindNextButton() {
    document.querySelector('.next-btn').addEventListener('click', function () {
        switch (game.introStep) {
            case 0:
                var lni = document.getElementById('leaderName');
                var cni = document.getElementById('civName');
                var loc = document.getElementById('location');
                createCiv(game.introStep, lni, cni, loc);
                //game.introStep++;
                break;
            case 1:
                console.log('1 step ay');
                configureSettings();
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
function configureSettings() {
    var stepTwo = document.querySelector('.step-two');
    hideElement(stepTwo);
    var stepThree = "\n    <section class='step-three'>\n      <h2>Configure & Confirm Your Settings</h2>\n      <label>Name</label><input value=\"" + playerCiv.leaderName + "\"><br>\n      <label>Civilization</label><input value=\"" + playerCiv.civName + "\"><br>\n      <label>Settlement<label><input value=\"" + playerCiv.location + "\"><br>\n\n    </section>\n  ";
    prepend('.stepThree', stepThree);
}
function init() {
    startGame();
}
init();
//# sourceMappingURL=index.js.map