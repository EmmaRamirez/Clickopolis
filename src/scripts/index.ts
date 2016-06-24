/// <reference path="./require.d.ts" />
/// <reference path="store.d.ts" />
/// <reference path="underscore.d.ts" />

//require('../styles/sass/index.scss');
//require('../styles/stylus/index.styl');

import _ = require('underscore');
import Utils = require('./utils');
import Game = require('./game');
import Settings = require('./settings');
import Collection = require('./collection');
import Civilization = require('./civilization');
import Resource = require('./resource');
import Citizen = require('./citizen');
import Building = require('./building');
import Tech = require('./tech');
import Nation = require('./nation');
import Templates = require('./template');
//import Flags = require('./flags');
import notify = require('./notify');

import techData = require('./data.tech');
import resourceData = require('./data.resource');
import citizenData = require('./data.citizen');
import buildingData = require('./data.building');
import nationData = require('./data.nation');

let u = new Utils();

let techs = techData;
let resources = resourceData;
let citizens = citizenData;
let buildings = buildingData;
let nations = nationData;

let game:Game = new Game(0);
let playerCiv:Civilization;
let templates:Templates = new Templates();

let isWindowActive:boolean = true;
let isCtrlPressed:boolean = false;

window.addEventListener('focus', function () {
  isWindowActive = true;
});

window.addEventListener('blur', function () {
  isWindowActive = false;
});

document.addEventListener('keydown', function (event:any) {
  if (event.which === 17) {
    isCtrlPressed = true;
  }
})

function scrollHorizontally(e:any) {
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  document.querySelector('body').scrollLeft -= (delta*-30); // Multiplied by 40
  e.preventDefault();
}

elt('body').addEventListener('mousewheel', scrollHorizontally, false);

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

function time(d:number) {
  let h = Math.floor(d / 3600);
  let m = Math.floor(d % 3600 / 60);
  let s = Math.floor(d % 3600 % 60);
  return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
}

function choose(arr:any[]):any {
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
    //console.log(callback)
    return callback();
  });
}

function hideElement(element:HTMLElement) {
  element = <HTMLElement>element;
  element.classList.add('hidden');
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
    event.preventDefault();
    addClickToTotal('.r-food-total', 'food');
    if (resources.get('food').total === 10) {
      notify('Yay! You have enough <img src="img/food.png"> to grow your population!');
    }

    checkPopulationGrowthCost();
  });

  bindElement('.prod-btn', 'click', function () {
    event.preventDefault();
    addClickToTotal('.r-prod-total', 'prod');

    if (resources.get('prod').total === 15) {
      notify('Yay! You have enough <img src="img/prod.png"> to build your first building!');
    }
    checkPopulationGrowthCost();
  });

  resourceClick();

  bindElement('.pop-btn', 'click', function () {
    event.preventDefault();
    let popGrowthCost = document.querySelector('.pop-growth-cost');
    let populationText = document.querySelector('.population-text');
    resources.get('food').total -= playerCiv.populationGrowthCost;
    playerCiv.population += 1;
    playerCiv.populationGrowthCost = Math.round(playerCiv.populationGrowthCost * playerCiv.population * .9);

    populationText.textContent = playerCiv.population.toString();
    elt('.citizens-population-text').textContent = playerCiv.populationEmployed.toString() + '/' + playerCiv.population.toString();
    popGrowthCost.textContent = playerCiv.populationGrowthCost.toString();

    updatePopulation(1);

    checkPopulationGrowthCost();

    notify('Your population just grew, unlocking more possibilities!');

  });

  setInfluenceImage();

  populateTechnologies();
  populateCitizens();
  populateBuildings();

  citizenClick();
  techClick();
  buildingClick();

  UiSettingsButtons();

}

function updatePopulation(pop:number) {
  playerCiv.cashPM += pop * 1;
  playerCiv.researchPM += pop * 2;
  playerCiv.anger += pop * 1;
  playerCiv.pollution += pop * 1;

  //elt('.research-text').textContent = playerCiv.research.toString();
  elt('.cash-PM').textContent = playerCiv.cashPM;
  elt('.civ-anger-text').textContent = playerCiv.anger;
  elt('.civ-pollution-text').textContent = playerCiv.pollution;

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



    updateTime();
    addGoldenAgePoints();
    addCash();
    addResearchPoints();
    checkPopulationGrowthCost()
    checkBuildingCosts();
    setInfluenceImage();
  }
}, 1000);

setInterval(function() {
  if (isWindowActive) {
     updateYear();
     checkUnemployed();
  }
}, 1000 * 60);

function drawUI(el:HTMLElement) {
  el.innerHTML =  templates.createScreenHeader(playerCiv, game) +
                  templates.createResourcesScreen(playerCiv, resources) +
                  templates.createCivilizationScreen(playerCiv) +
                  templates.createCitizenScreen(playerCiv, citizens) +
                  templates.createEconomyScreen(playerCiv) +
                  templates.createBuildingsScreen() +
                  templates.createTechnologyScreen(playerCiv) +
                  //templates.createDiplomacyScreen(playerCiv) +
                  //templates.createMilitaryScreen(playerCiv) +
                  //templates.createCultureScreen(playerCiv) +
                  //templates.createFaithScreen(playerCiv) +
                  templates.createSettingsScreen(playerCiv, game);
}

function checkUnemployed() {
  if (playerCiv.population !== playerCiv.populationEmployed) {
    notify('You have unemployed citizens! <img src="img/citizen.png"> Employ them in the citizens panel!');
  }
}

function checkBuildingCosts() {
  let buildingEls = <NodeListOf<HTMLElement>>document.querySelectorAll('.building');
  [].forEach.call(buildingEls, function (item:any, index:number) {
    let building = item.getAttribute('data-building');
    if (resources.get('prod').total >= buildings.get(building).prodCost) {
      item.setAttribute('data-purchaseable', true);
    } else {
      item.setAttribute('data-purchaseable', false);
    }
  });
}

function populateTechnologies() {
  let technologies = document.querySelector('.technologies');
  technologies.innerHTML = '';

  for (let i = 0; i < techs.items.length; i++) {
    let effects = '';
    for (let j = 0; j < techs.items[i].effects.length; j++) {
      effects += `<li>${techs.items[i].effects[j]}</li>`;
    }
    let t = techs.items[i];
    technologies.innerHTML += `
    <div class='tech' data-tech='${t.name}' data-selected=${t.selected} data-purchased=${t.purchased}>
      <span class='tech-name'>${t.name}</span>
      <span class='tech-description'>${t.description}</span>
      <ul class='tech-list'>
        ${effects}
      </ul>
    </div>`;
  }
}

function populateCitizens() {
  let citizensContainer = elt('.citizens');
  citizensContainer.innerHTML = '';

  for (let i = 0; i < citizens.items.length; i++) {
    let c = citizens.items[i];
    citizensContainer.innerHTML += `
    <div class='row citizen-${c.name}' data-id='${i}'>
      <button data-citizen='${c.name}' data-citizen-amount='-1'>-1</button>
      <span class='citizen-icon'><img src='img/${c.image}.png'></span>
      <button data-citizen='${c.name}' data-citizen-amount='1'>+1</button>
      <span class='citizen-info'>
        ${u.capitalize(c.name + 's')}: <strong class='${c.name}-num-text'>${c.amount}</strong> | ${c.description}
      </span>
    </div>
    `;
  }
}

function populateBuildings() {
  let buildingsContainer = elt('.buildings');
  buildingsContainer.innerHTML = '';

  for (let i = 0; i < buildings.items.length; i++) {
    let b = buildings.items[i];
    console.log(b);
    buildingsContainer.innerHTML += `
      <div class='building' data-id='${i}' data-building='${b.name}' data-purchaseable='false'>
        <span class='building-total' data-building='${b.name}' title='how many you own'>${b.amount}</span>
        <span class='building-cost'><span class='building-cost-text data-id='${i}'>${b.prodCost}</span> <img src='img/prod.png'></span>
        <span class='building-name'>${b.name}</span>
        <span class='building-description'>${b.description}</span>
        <span class='building-effect' data-building='${b.name}'>${b.effect}</span>
      </div>
    `;
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
  let goldenAgeProgress = elt('.golden-age-progress');
  let goldenAgeMeter = elt('.metric-golden-age');
  let goldenAgePoints = playerCiv.happiness - playerCiv.anger;
  playerCiv.goldenAgeProgress += goldenAgePoints;
  goldenAgeProgress.textContent = u.abbrNum(playerCiv.goldenAgeProgress);

  let goldenAgePercent:string = ((playerCiv.goldenAgeProgress / goldenAgePoints) / 100) + '%';
  let bgString:string = u.progressBar(goldenAgePercent, '#BDBD6C', '#222');
  goldenAgeMeter.style.background = bgString;
}

function addResearchPoints() {
  playerCiv.research += playerCiv.researchPM / 60;

  elt('.research-text').textContent = u.abbrNum(playerCiv.research.toFixed(1), 2);

  let researchPercent:string = ((playerCiv.research / playerCiv.researchCost) * 100) + '%';

  let bgString:string = u.progressBar(researchPercent, '#83D4D4', '#444');

  elt('.research-progress-bar').style.background = bgString;

  if (playerCiv.research > playerCiv.researchCost) {
    elt('.research-exceeding').textContent = 'You are currently exceeding your current tech goal.';
  } else {
    elt('.research-exceeding').textContent = '';
  }
}

function addCash() {
  playerCiv.cash += playerCiv.cashPM / 60;
  let cashText = elt('.cash-text');
  cashText.textContent = playerCiv.cash.toFixed(2);
}

function setInfluenceImage() {
  if (playerCiv.influence >= 0) {
    elt('.influence-img').src = 'img/influence.png';
  } else {
    elt('.influence-img').src = 'img/influence-alt.png';
  }
}

function resourceClick() {
  let resourceButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.resource');
  [].forEach.call(resourceButtons, function (item:any) {
    item.addEventListener('click', function () {
      [].forEach.call(resourceButtons, function (item:any) { item.className = "resource"; });
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

function citizenClick() {
  let citizenButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('button[data-citizen]');
  [].forEach.call(citizenButtons, function (item:any) {
    item.addEventListener('click', function () {
      let citizen:string = this.getAttribute('data-citizen');
      let sel:string = '.' + citizen + '-num-text';
      citizens.get(citizen).amount += parseInt(this.getAttribute('data-citizen-amount'));
      elt(sel).textContent = citizens.get(citizen).amount;
    });
  });
}

function buildingClick() {
  let buildingEls = <NodeListOf<HTMLElement>>document.querySelectorAll('.building');
  console.debug('buildingEls', buildingEls);

  [].forEach.call(buildingEls, function (item:any, index:number) {
    console.log(item);

    item.addEventListener('click', function () {

      let building = item.getAttribute('data-building');
      let totalSelt = '.building-total[data-building="' + buildings.get(building).name + '"]';
      let costSelt = '.building-cost-text';
      if (resources.get('prod').total >= buildings.get(building).prodCost) {
        notify(`Your citizens built a ${buildings.get(building).name} for <img src="img/prod.png"> ${buildings.get(building).prodCost}`);
        buildings.get(building).amount += 1;
        resources.get('prod').total -= buildings.get(building).prodCost;
        elt(totalSelt).textContent = buildings.get(building).amount;
        buildings.get(building).prodCost = Math.floor(Math.sqrt(buildings.get(building).prodCost) + (buildings.get(building).prodCost * 1.25));
        console.log(buildings.get(building).prodCost);
        elt(costSelt, true)[index].textContent = buildings.get(building).prodCost.toString();
        console.table(buildings.get(building));
        buildings.get(building).func(playerCiv);
      } else {
        notify(`You don't have the <img src="img/prod.png"> to purchase a ${buildings.get(building).name}`);
      }
    });

  });
}

function techClick() {
  let techEls = <NodeListOf<HTMLElement>>document.querySelectorAll('.tech');
  [].forEach.call(techEls, function (item:any) {
    item.addEventListener('click', function () {
      let tech = item.getAttribute('data-tech');
      let selected = item.getAttribute('data-selected');
      if (isCtrlPressed) {
        if (techs.get(tech).selected) {
          techs.get(tech).selected = false;
          item.setAttribute('data-selected', false);
        }
      } else {
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
    })
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

function UiSettingsButtons() {
  elt('.grid-button').addEventListener('click', function () {
    elt('.clickopolis').style.width = '100%';
  });
  elt('body').removeEventListener('mousewheel', scrollHorizontally, false);
}


function checkAchievements() {

}



function init() {
  startGame();
}

init();
