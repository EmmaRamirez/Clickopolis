"use strict";
var Game = require('./game');
var Civilization = require('./civilization');
var game = new Game(0);
document.querySelector('.prev-btn').setAttribute('disabled', 'true');
function createCiv(step, leaderNameInput, civNameInput, locationInput) {
    var leaderName = leaderNameInput.value;
    var civName = civNameInput.value;
    var location = locationInput.value;
    var prevBtn = document.querySelector('.prev-btn');
    var nextBtn = document.querySelector('.next-btn');
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
    var playerCiv = new Civilization(civName, leaderName, location);
    var stepOne = document.querySelector('.step-one');
    var stepTwo = "\n    <span class='step-two'>\n      <h2>Welcome " + playerCiv.leaderName + ", leader of " + playerCiv.civName + ", brave inhabitant of the " + playerCiv.location + "!</h2>\n      <p>What are your traits, O Glorious Leader? (Select <span id='traitsLeft'>3</span>)</p>\n      <div class='checkbox-list'>\n        <label><input type='checkbox' value='industrious'>Industrious</label>\n        <label><input type='checkbox' value='aggressive'>Aggressive</label>\n        <label><input type='checkbox' value='pacifistic'>Pacificistic</label>\n        <label><input type='checkbox' value='expansionist'>Expansionist</label>\n        <label><input type='checkbox' value='isolationist'>Isolationist</label>\n        <label><input type='checkbox' value='deliberate'>Deliberate</label>\n        <label><input type='checkbox' value='cunning'>Cunning</label>\n        <label><input type='checkbox' value='communal'>Communal</label>\n        <label><input type='checkbox' value='individualistic'>Individualistic</label>\n        <label><input type='checkbox' value='persuasive'>Persuasive</label>\n      </div>\n    </span>";
    stepOne.insertAdjacentHTML('afterend', stepTwo);
    stepOne.className += " hidden";
}
document.querySelector('.next-btn').addEventListener('click', function () {
    createCiv(game.introStep, document.getElementById('leaderName'), document.getElementById('civName'), document.getElementById('location'));
});
//# sourceMappingURL=index.js.map