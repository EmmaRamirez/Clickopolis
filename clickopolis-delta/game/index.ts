// <reference path="store.d.ts" />
// <reference path="underscore.d.ts" />

import _ = require('underscore');
import Utils = require('./utils');
import Game = require('./game');
import Settings = require('./settings');
import Civilization = require('./civilization');
import Resource = require('./resource');
import Resources = require('./resources');
import Tech = require('./tech');
import Templates = require('./template');
import notify = require('./notify');



console.log(_.random(0, 100));

let game:Game = new Game(0);
let playerCiv:Civilization;
let templates:Templates = new Templates();
let food:Resource = new Resource('food', 1, 0, 1000, 0, 'food', 'Food.');
let prod:Resource = new Resource('prod', 1, 0, 2000, 0, 'prod', 'Prod.');
let stone:Resource = new Resource('stone', 0, 0, -1, 0, 'stone', 'Stone');
let fish:Resource = new Resource('fish', 0, 0, -1, 0, 'fish', 'Fish are caught in nets by citizens every now and then. Each fish provides +.5 <img src="img/health.png"> Fish are a popular trade item with Desert nations.');
let banana:Resource = new Resource('banana', 0, 0, -1, 0, 'banana', 'Banana');
let spices:Resource = new Resource('spices', 0, 0, -1, 0, 'spices', 'Spices');
let gold:Resource = new Resource('gold', 0, 0, -1, 0, 'gold', 'Gold');
let gems:Resource = new Resource('gems', 0, 0, -1, 0, 'gems', 'Gemss');
let oil:Resource = new Resource('oil', 0, 0, -1, 0, 'oil', 'Oil');
let uranium:Resource = new Resource('uranium', 0, 0, -1, 0, 'uranium', 'Uranium');
let iron:Resource = new Resource('iron', 0, 0, -1, 0, 'iron', 'Iron');
let horse:Resource = new Resource('horse', 0, 0, -1, 0, 'horse', 'Horsies :]');
let spaghetti:Resource = new Resource('spaghetti', 0, 0, -1, 0, 'spaghetti', 'Spaghetts');
let chihuahua:Resource = new Resource('chihuahua', 0, 0, -1, 0, 'chihuahua', 'Bark!');
//notify('hello');

let resources:Resources = new Resources([food, prod, stone, fish, spices, banana, gold, gems, oil, iron, uranium, chihuahua, spaghetti, horse]);

let agriculture:Tech = new Tech('agriculture', 'ancient', 'a technology', ['use it fool']);
let mining:Tech = new Tech('mining', 'ancient', 'not safe for minors', ['improves miners']);




let u = new Utils();

let isWindowActive:boolean = true;

window.addEventListener('focus', function () {
  isWindowActive = true;
});

window.addEventListener('blur', function () {
  isWindowActive = false;
});

function saveGame():void {
  store.set('game', game);
  store.get('game');
}


function savePlayer():void {
  store.set('playerCiv', playerCiv);
  console.log(store.get('playerCiv'));
}

function removeItem(arr:any[], item:any) {
  for (var i = arr.length - 1; i--;) {
    if (arr[i] === item) arr.splice(i, 1);
  }
}

function abbrNum (number:any, decPlaces:number) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);
    // Enumerate number abbreviations
    var abbrev = [ "k", "m", "b", "t" ];
    // Go through the array backwards, so we do the largest first
    for (var i=abbrev.length-1; i>=0; i--) {
        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);
        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.round(number*decPlaces/size)/decPlaces;
             // Handle special case where we round up to the next abbreviation
             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }
             // Add the letter for the abbreviation
             number += abbrev[i];
             // We are done... stop
             break;
        }
    }

    return number;
};

function time(d:number) {
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);
  return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
};

function choose(arr:any[]) {
  return arr[Math.floor(Math.random()*arr.length)];
}

function prepend(node:any, html:string) {
  let el = <HTMLElement>document.querySelector(node);
  el.insertAdjacentHTML('beforeend', html);
}

function append(node:any, html:string) {
  let el = <HTMLElement>document.querySelector(node);
  el.insertAdjacentHTML('afterend', html);
}

function bindElement(node:string, eventType:string, callback:Function) {
  let el = <HTMLElement>document.querySelector(node);
  el.addEventListener(eventType, function( event ) {
    console.log(callback)
    return callback();
  });
}

function hideElement(element:HTMLElement) {
  element = <HTMLElement>element;
  element.className += " hidden";
}

function removeElement(element:HTMLElement) {
  element = <HTMLElement>element;
  element.remove();
}

function elt(query:string, all:boolean = false):any {
  if (all === false)
    return <HTMLElement>document.querySelector(query);
  else
    return <NodeListOf<HTMLElement>>document.querySelectorAll(query);
}

function startGame() {
  if (store.get('playerCiv') !== undefined) {
    let loadCiv = store.get('playerCiv');
    playerCiv = new Civilization(loadCiv.civName, loadCiv.leaderName, loadCiv.location);
    startSavedGame();
  } else {
    startNewGame();
    playerCiv = new Civilization('', '', '');
  }
}

function startSavedGame() {
  console.debug("Loading Saved Game...");
  append('body', templates.createStartScreen(playerCiv, game));
  //store.clear();

  bindElement('.load-btn', 'click', function() {
    createGameUI();
  });

  bindElement('.current-btn', 'click', function() {
    createGameUI();
  });
};


function startNewGame() {
  console.debug("Starting New Game...");

  append('body', templates.settingsScreen);

  // bindElement('.new-btn', 'click', function () {
  //   console.log('Hey...is this thing working??');
  // });

  bindElement('.begin-btn', 'click', function() {
    //console.log('hi');
    setPlayerCiv();
    createGameUI();
  });

  document.querySelector('#trait').addEventListener('change', function() {
    traitsSelection(0);
  });


};

function setPlayerCiv() {
  let civNameInput = <HTMLInputElement>document.querySelector('#civName'),
      leaderNameInput = <HTMLInputElement>document.querySelector('#leaderName'),
      location = <HTMLSelectElement>document.querySelector('#location');
  playerCiv.civName = civNameInput.value;
  playerCiv.leaderName = leaderNameInput.value;
  playerCiv.location = location.value;
  savePlayer();
}



function traitsSelection(index:number) {
  let traitSelect = <HTMLSelectElement>document.querySelector('#trait');
  let trait = traitSelect.value;
  playerCiv.leaderTraits[index] = trait;
  console.log(traitSelect.value, playerCiv.leaderTraits);
  savePlayer();
}

function createGameUI() {
  let intro = <HTMLElement>document.querySelector('.clickopolis-intro');
  let clickopolisGame = document.createElement('section');
  clickopolisGame.innerHTML = '';

  clickopolisGame.setAttribute('class', 'clickopolis');
  clickopolisGame.setAttribute('id', 'clickopolis');

  drawUI(clickopolisGame);

  intro != undefined ? intro.remove() : console.log('intro not defined');

  document.body.appendChild(clickopolisGame);
  //append('body', templates.resourcesScreen);

  bindElement('.food-btn', 'click', function () {
    //event.preventDefault();
    addClickToTotal('.r-food-total', 'food');
    checkPopulationGrowthCost();
  });

  bindElement('.prod-btn', 'click', function () {
    //event.preventDefault();
    addClickToTotal('.r-prod-total', 'prod');
    checkPopulationGrowthCost();
  });

  resourceClick();

  bindElement('.pop-btn', 'click', function () {
    let popGrowthCost = document.querySelector('.pop-growth-cost');
    let populationText = document.querySelector('.population-text');
    resources.get('food').total -= playerCiv.populationGrowthCost;
    playerCiv.population += 1;
    playerCiv.populationGrowthCost = Math.round(playerCiv.populationGrowthCost * playerCiv.population * .9);

    populationText.textContent = playerCiv.population.toString();
    popGrowthCost.textContent = playerCiv.populationGrowthCost.toString();

    checkPopulationGrowthCost();

  });



}

function addClickToTotal(el:string, item:string) {
  let element = elt(el);
  if (resources.get(item).total >= resources.get(item).max) resources.get(item).total = resources.get(item).max;
  else resources.get(item).total += resources.get(item).perClick;

  element.innerHTML = resources.get(item).total.toString() + ' total';
}

setInterval(function() {

  if (isWindowActive) {
    if (resources.get('food').total >= resources.get('food').max) resources.get('food').total = resources.get('food').max;
    else resources.get('food').total += resources.get('food').perSecond;

    elt('.r-food-total').textContent = resources.get('food').total.toString() + ' total';


    if (resources.get('prod').total >= resources.get('prod').max) resources.get('prod').total = resources.get('prod').max;
    else resources.get('food').total += resources.get('prod').perSecond;

    elt('.r-prod-total').textContent = resources.get('prod').total.toString() + ' total';

    game.time += 1;

    addGoldenAgePoints();
    checkPopulationGrowthCost();
  }


  console.log(isWindowActive);

}, 1000);

setInterval(function() {
  if (isWindowActive) {
     game.year += 1;
     addCash();
     addResearchPoints();
  }
}, 1000 * 60);

function drawUI(el:HTMLElement) {
  el.innerHTML =  templates.createScreenHeader(playerCiv, game) +
                  templates.createResourcesScreen(playerCiv, resources) +
                  templates.createCivilizationScreen(playerCiv) +
                  templates.createCitizenScreen(playerCiv) +
                  templates.createEconomyScreen(playerCiv) +
                  templates.createBuildingsScreen() +
                  templates.createTechnologyScreen(playerCiv) +
                  templates.createDiplomacyScreen(playerCiv) +
                  templates.createSettingsScreen();
}

function addGoldenAgePoints() {
  let goldenAgeProgress = elt('.golden-age-progress');
  let goldenAgeMeter = elt('.metric-golden-age');
  let goldenAgePoints = playerCiv.happiness - playerCiv.anger;
  playerCiv.goldenAgeProgress += goldenAgePoints;
  goldenAgeProgress.textContent = u.abbrNum(playerCiv.goldenAgeProgress);

  let goldenAgePercent:string = ((playerCiv.goldenAgeProgress / goldenAgePoints) / 100) + '%';
  let bgString:string = `linear-gradient(to right, #BDBD6C 0%, #BDBD6C ${goldenAgePercent}, #222 ${goldenAgePercent}, #222)`;
  goldenAgeMeter.style.background = bgString;
}

function addResearchPoints() {


  playerCiv.research += playerCiv.population;


  elt('.research-text').textContent = playerCiv.research.toString();

  let researchPercent:string = ((playerCiv.research / playerCiv.researchCost) * 100) + '%';

  let bgString:string = `linear-gradient(to right, #83D4D4 0%, #83D4D4 ${researchPercent}, #444 ${researchPercent}, #444 100%)`;
  elt('.research-progress-bar').style.background = bgString;

  if (playerCiv.research > playerCiv.researchCost) {
    elt('.research-exceeding').textContent = 'You are currently exceeding your current tech goal.';
  } else {
    elt('.research-exceeding').textContent = '';
  }
}

function addCash() {
  playerCiv.cash += 10;
  let cashText = elt('.cash-text');
  cashText.textContent = playerCiv.cash.toString();
}

function resourceClick() {
  let resourceButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.resource');
  [].forEach.call(resourceButtons, function (item:any) {
    item.addEventListener('click', function () {
      item.className = "resource";
      let name = this.getAttribute('data-resource');
      let r = resources.get(name);
      if (this.className === "resource active") {
        this.className = "resource";
      } else {
        this.className += " active";
        elt('.resource-info-screen').innerHTML = `
          <h3><img src='img/${r.image}.png'> ${r.name}<br></h3>
          <p>${r.description}</p>
        `;
      }
      showResourceInfo(name);
    });
  });
}

function showResourceInfo(name:string) {
  console.log(name);
}

function checkPopulationGrowthCost() {
  let button = document.querySelector('.pop-btn');
  if (playerCiv.populationGrowthCost > resources.get('food').total) {
    console.log(playerCiv.populationGrowthCost);
    button.className = 'disabled pop-btn';
    return false;
  } else {
    console.log(playerCiv.populationGrowthCost);
    button.className = 'pop-btn';
    return true;
  }

}


function checkAchievements() {

}



function init() {
  startGame();
}

init();
