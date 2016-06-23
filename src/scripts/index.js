/// <reference path="./require.d.ts" />
/// <reference path="store.d.ts" />
/// <reference path="underscore.d.ts" />
"use strict";
var Utils = require('./utils');
var Game = require('./game');
var Civilization = require('./civilization');
var Templates = require('./template');
var notify = require('./notify');
var techData = require('./data.tech');
var resourceData = require('./data.resource');
var citizenData = require('./data.citizen');
var u = new Utils();
var techs = techData;
var resources = resourceData;
var citizens = citizenData;
var game = new Game(0);
var playerCiv;
var templates = new Templates();
var isWindowActive = true;
var isCtrlPressed = false;
window.addEventListener('focus', function () {
    isWindowActive = true;
});
window.addEventListener('blur', function () {
    isWindowActive = false;
});
document.addEventListener('keydown', function (event) {
    if (event.which === 17) {
        isCtrlPressed = true;
    }
});
function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.querySelector('body').scrollLeft -= (delta * -30); // Multiplied by 40
    e.preventDefault();
}
elt('body').addEventListener('mousewheel', scrollHorizontally, false);
function saveGame() {
    store.set('game', game);
    store.get('game');
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
function time(d) {
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
}
function choose(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
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
function hideElement(element) {
    element = element;
    element.classList.add('hidden');
}
function removeElement(element) {
    element = element;
    element.remove();
}
function elt(query, all) {
    if (all === void 0) { all = false; }
    if (all === false)
        return document.querySelector(query);
    else
        return document.querySelectorAll(query);
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
    append('body', templates.createStartScreen(playerCiv, game));
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
function setPlayerCiv() {
    var civNameInput = document.querySelector('#civName'), leaderNameInput = document.querySelector('#leaderName'), location = document.querySelector('#location');
    playerCiv.civName = civNameInput.value;
    playerCiv.leaderName = leaderNameInput.value;
    playerCiv.location = location.value;
    savePlayer();
}
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
    clickopolisGame.innerHTML = '';
    clickopolisGame.setAttribute('class', 'clickopolis');
    clickopolisGame.setAttribute('id', 'clickopolis');
    drawUI(clickopolisGame);
    intro != undefined ? intro.remove() : console.log('intro not defined');
    document.body.appendChild(clickopolisGame);
    //append('body', templates.resourcesScreen);
    bindElement('.food-btn', 'click', function () {
        event.preventDefault();
        addClickToTotal('.r-food-total', 'food');
        checkPopulationGrowthCost();
    });
    bindElement('.prod-btn', 'click', function () {
        event.preventDefault();
        addClickToTotal('.r-prod-total', 'prod');
        checkPopulationGrowthCost();
    });
    resourceClick();
    bindElement('.pop-btn', 'click', function () {
        event.preventDefault();
        var popGrowthCost = document.querySelector('.pop-growth-cost');
        var populationText = document.querySelector('.population-text');
        resources.get('food').total -= playerCiv.populationGrowthCost;
        playerCiv.population += 1;
        playerCiv.populationGrowthCost = Math.round(playerCiv.populationGrowthCost * playerCiv.population * .9);
        populationText.textContent = playerCiv.population.toString();
        popGrowthCost.textContent = playerCiv.populationGrowthCost.toString();
        updatePopulation(1);
        checkPopulationGrowthCost();
        notify('Your population just grew, unlocking more possibilities!');
    });
    setInfluenceImage();
    populateTechnologies();
    citizenClick();
    techClick();
    UiSettingsButtons();
}
function updatePopulation(pop) {
    playerCiv.cashPM += pop * 1;
    playerCiv.researchPM += pop * 2;
    playerCiv.anger += pop * 1;
    playerCiv.pollution += pop * 1;
    //elt('.research-text').textContent = playerCiv.research.toString();
    elt('.cash-PM').textContent = playerCiv.cashPM;
    elt('.civ-anger-text').textContent = playerCiv.anger;
    elt('.civ-pollution-text').textContent = playerCiv.pollution;
}
function addClickToTotal(el, item) {
    var element = elt(el);
    if (resources.get(item).total >= resources.get(item).max)
        resources.get(item).total = resources.get(item).max;
    else
        resources.get(item).total += resources.get(item).perClick;
    element.innerHTML = resources.get(item).total.toString() + ' total';
}
setInterval(function () {
    if (isWindowActive) {
        if (resources.get('food').total >= resources.get('food').max)
            resources.get('food').total = resources.get('food').max;
        else
            resources.get('food').total += resources.get('food').perSecond;
        elt('.r-food-total').textContent = resources.get('food').total.toString() + ' total';
        if (resources.get('prod').total >= resources.get('prod').max)
            resources.get('prod').total = resources.get('prod').max;
        else
            resources.get('food').total += resources.get('prod').perSecond;
        elt('.r-prod-total').textContent = resources.get('prod').total.toString() + ' total';
        updateTime();
        addGoldenAgePoints();
        addCash();
        addResearchPoints();
        checkPopulationGrowthCost();
    }
}, 1000);
setInterval(function () {
    if (isWindowActive) {
        updateYear();
    }
}, 1000 * 60);
function drawUI(el) {
    el.innerHTML = templates.createScreenHeader(playerCiv, game) +
        templates.createResourcesScreen(playerCiv, resources) +
        templates.createCivilizationScreen(playerCiv) +
        templates.createCitizenScreen(playerCiv, citizens) +
        templates.createEconomyScreen(playerCiv) +
        templates.createBuildingsScreen() +
        templates.createTechnologyScreen(playerCiv) +
        templates.createDiplomacyScreen(playerCiv) +
        templates.createMilitaryScreen(playerCiv) +
        templates.createCultureScreen(playerCiv) +
        templates.createFaithScreen(playerCiv) +
        templates.createSettingsScreen(playerCiv, game);
}
function populateTechnologies() {
    var technologies = document.querySelector('.technologies');
    console.debug("tech element", technologies);
    for (var i = 0; i < techs.items.length; i++) {
        var t = techs.items[i];
        console.log(techs.items[i]);
        technologies.innerHTML += "\n    <div class='tech' data-tech='" + t.name + "' data-selected=" + t.selected + " data-purchased=" + t.purchased + ">\n      <span class='tech-name'>" + t.name + "</span>\n      <span class='tech-description'>" + t.description + "</span>\n      <ul class='tech-list'>\n        <li>" + t.effects[0] + "</li>\n        <li>" + t.effects[1] + "</li>\n      </ul>\n    </div>";
    }
}
function updateYear() {
    game.year += 1;
    elt('.game-year-text').textContent = game.year;
}
function updateTime() {
    game.time += 1;
    elt('.game-year-text').title = time(game.time);
}
function addGoldenAgePoints() {
    var goldenAgeProgress = elt('.golden-age-progress');
    var goldenAgeMeter = elt('.metric-golden-age');
    var goldenAgePoints = playerCiv.happiness - playerCiv.anger;
    playerCiv.goldenAgeProgress += goldenAgePoints;
    goldenAgeProgress.textContent = u.abbrNum(playerCiv.goldenAgeProgress);
    var goldenAgePercent = ((playerCiv.goldenAgeProgress / goldenAgePoints) / 100) + '%';
    var bgString = "linear-gradient(to right, #BDBD6C 0%, #BDBD6C " + goldenAgePercent + ", #222 " + goldenAgePercent + ", #222)";
    goldenAgeMeter.style.background = bgString;
}
function addResearchPoints() {
    playerCiv.research += playerCiv.researchPM / 60;
    elt('.research-text').textContent = u.abbrNum(playerCiv.research.toFixed(1), 2);
    var researchPercent = ((playerCiv.research / playerCiv.researchCost) * 100) + '%';
    var bgString = u.progressBar(researchPercent, '#83D4D4', '#444');
    elt('.research-progress-bar').style.background = bgString;
    if (playerCiv.research > playerCiv.researchCost) {
        elt('.research-exceeding').textContent = 'You are currently exceeding your current tech goal.';
    }
    else {
        elt('.research-exceeding').textContent = '';
    }
}
function addCash() {
    playerCiv.cash += playerCiv.cashPM / 60;
    var cashText = elt('.cash-text');
    cashText.textContent = playerCiv.cash.toFixed(2);
}
function setInfluenceImage() {
    if (playerCiv.influence >= 0) {
        elt('.influence-img').src = 'img/influence.png';
    }
    else {
        elt('.influence-img').src = 'img/influence-alt.png';
    }
}
function resourceClick() {
    var resourceButtons = document.querySelectorAll('.resource');
    [].forEach.call(resourceButtons, function (item) {
        item.addEventListener('click', function () {
            item.className = "resource";
            var name = this.getAttribute('data-resource');
            var r = resources.get(name);
            if (this.className === "resource active") {
                this.className = "resource";
            }
            else {
                this.className += " active";
                elt('.resource-info-screen').innerHTML = "\n          <h3><img src='img/" + r.image + ".png'> " + r.name + "<br></h3>\n          <p>" + r.description + "</p>\n        ";
            }
            showResourceInfo(name);
        });
    });
}
function citizenClick() {
    var citizenButtons = document.querySelectorAll('button[data-citizen]');
    [].forEach.call(citizenButtons, function (item) {
        item.addEventListener('click', function () {
            var citizen = this.getAttribute('data-citizen');
            var sel = '.' + citizen + '-num-text';
            console.log(citizens.get(citizen).amount);
            console.log(this.getAttribute('data-citizen-amount'));
            citizens.get(citizen).amount += this.getAttribute('data-citizen-amount');
            console.log(citizens.get(citizen).amount);
            elt(sel).textContent = citizens.get(citizen).amount;
            console.log(elt(sel).textContent);
            // console.log(this.getAttribute('data-citizen-amount'));
            // console.log(citizens.get(this.getAttribute('data-citizen')));
            // elt(this.getAttribute('data-citizen') + '-num-text').textContent = citizens.get(this.getAttribute('data-citizen')).amount + 1;
        });
    });
}
function techClick() {
    var techEls = document.querySelectorAll('.tech');
    [].forEach.call(techEls, function (item) {
        item.addEventListener('click', function () {
            var tech = item.getAttribute('data-tech');
            var selected = item.getAttribute('data-selected');
            if (isCtrlPressed) {
                if (techs.get(tech).selected) {
                    techs.get(tech).selected = false;
                    item.setAttribute('data-selected', false);
                }
            }
            else {
                techs.get(tech).selected = true;
                console.log(techs.get(tech).selected);
                item.setAttribute('data-selected', true);
                if (techs.get(tech).selected) {
                    // TODO: fix this mess
                    elt('.researching-techs').textContent = techs.get(tech).name;
                }
                if (playerCiv.research >= playerCiv.researchCost) {
                    notify('You purchased the ' + techs.get(tech).name + ' technology!');
                    techs.get(tech).purchased = true;
                    item.setAttribute('data-purchased', true);
                    playerCiv.research -= playerCiv.researchCost;
                    playerCiv.researchCost = Math.floor(((playerCiv.population * 4) + playerCiv.researchCost * .8));
                    elt('.research-cost-text').textContent = playerCiv.researchCost;
                }
            }
        });
    });
}
function showResourceInfo(name) {
    console.log(name);
}
function checkPopulationGrowthCost() {
    var button = document.querySelector('.pop-btn');
    if (playerCiv.populationGrowthCost > resources.get('food').total) {
        console.log(playerCiv.populationGrowthCost);
        button.className = 'disabled pop-btn';
        return false;
    }
    else {
        console.log(playerCiv.populationGrowthCost);
        button.className = 'pop-btn';
        return true;
    }
}
function UiSettingsButtons() {
    elt('.grid-button').addEventListener('click', function () {
        elt('.clickopolis').style.width = '100%';
    });
    elt('body').removeEventListener('mousewheel', scrollHorizontally, false);
}
function checkAchievements() {
}
function init() {
    //elt('.clickopolis-intro').style.background = 'linear-gradient(to bottom, rgba(white, 0.5), rgba(white, 0.5)), url(../img/world.png)';
    startGame();
}
init();
//# sourceMappingURL=index.js.map