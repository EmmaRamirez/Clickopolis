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
import Wonder = require('./wonder');
import Tech = require('./tech');
import Nation = require('./nation');
import Templates = require('./template');
//import Flags = require('./flags');
import notify = require('./notify');
import log = require('./log');

import techData = require('./data.tech');
import resourceData = require('./data.resource');
import citizenData = require('./data.citizen');
import buildingData = require('./data.building');
import nationData = require('./data.nation');
import wonderData = require('./data.wonder');

let u = new Utils();

let techs = techData;
let resources = resourceData;
let citizens = citizenData;
let buildings = buildingData;
let nations = nationData;
let wonders = wonderData;

let history:string[];

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

//u.elt('body').addEventListener('mousewheel', scrollHorizontally, false);

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

  u.elt('#trait').addEventListener('change', function() {
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
      notify({message: 'Yay! You have enough <img src="img/food.png"> to grow your population!'});
    }

    checkPopulationGrowthCost();
  });

  bindElement('.prod-btn', 'click', function () {
    event.preventDefault();
    addClickToTotal('.r-prod-total', 'prod');

    if (resources.get('prod').total === 15) {
      notify({message:'Yay! You have enough <img src="img/prod.png"> to build your first building!'});
    }
    checkPopulationGrowthCost();
  });

  resourceClick();

  bindElement('.pop-btn', 'click', function () {
    event.preventDefault();

    resources.get('food').total -= playerCiv.populationGrowthCost;
    resources.get('food').perSecond -= 1;
    u.elt('.r-food-ps').textContent = resources.get('food').perSecond.toFixed(1) + ' PS';

    updatePopulation(1);

    checkPopulationGrowthCost();

    notify({message:'Your population just grew! Your citizen was automatically assigned as a farmer.'});

  });

  setInfluenceImage();

  populateTechnologies();
  populateCitizens();
  populateBuildings();
  populateWonders();

  history = [`<span class='log'><strong>0 AC</strong>: The Civilization of ${playerCiv.civName} was founded by ${playerCiv.leaderName}!`];
  renderHistory(history);

  citizenClick();
  techClick();
  buildingClick();

  UiSettingsButtons();

}

function updatePopulationEmployed():void {
  u.elt('.citizens-population-text').textContent = playerCiv.populationEmployed.toString() + '/' + playerCiv.population.toString();
}

function updatePopulation(pop:number) {
  let popGrowthCost = document.querySelector('.pop-growth-cost');
  let populationText = document.querySelector('.population-text');

  playerCiv.population += pop;
  playerCiv.populationGrowthCost = Math.round((playerCiv.populationGrowthCost * 1.2) + playerCiv.population);

  populationText.textContent = playerCiv.population.toString();
  popGrowthCost.textContent = playerCiv.populationGrowthCost.toString();

  playerCiv.cashPM += pop * 1;
  playerCiv.researchPM += pop * 2;
  playerCiv.anger += pop * 1;
  playerCiv.pollution += pop * 1;

  //elt('.research-text').textContent = playerCiv.research.toString();
  u.elt('.cash-PM').textContent = playerCiv.cashPM;
  u.elt('.civ-anger-text').textContent = playerCiv.anger;
  u.elt('.civ-pollution-text').textContent = playerCiv.pollution;

  addCitizen('farmer', pop, '.farmer-num-text');

  updatePopulationEmployed();

}



function addClickToTotal(el:string, item:string) {
  let element = u.elt(el);
  if (resources.get(item).total >= resources.get(item).max) resources.get(item).total = resources.get(item).max;
  else resources.get(item).total += resources.get(item).perClick;

  element.innerHTML = resources.get(item).total.toFixed(0).toString() + ' total';
}

setInterval(function() {
  if (isWindowActive) {
    if (resources.get('food').total >= resources.get('food').max) resources.get('food').total = resources.get('food').max;
    else resources.get('food').total += resources.get('food').perSecond;
    u.elt('.r-food-total').textContent = resources.get('food').total.toFixed(0).toString() + ' total';

    if (resources.get('prod').total >= resources.get('prod').max) resources.get('prod').total = resources.get('prod').max;
    else resources.get('food').total += resources.get('prod').perSecond;
    u.elt('.r-prod-total').textContent = resources.get('prod').total.toFixed(0).toString() + ' total';



    updateTime();
    addGoldenAgePoints();
    addCash();
    addResearchPoints();
    checkPopulationGrowthCost()
    checkBuildingCosts();
    renderHistory(history);
    setInfluenceImage();
  }
}, 1000);

setInterval(function() {
  if (isWindowActive) {
     updateYear();
     checkUnemployed();
     history.push(`<div class='log'><strong>${game.year} AC</strong>: The year was logged.`);

  }
}, 1000 * 60);

function drawUI(el:HTMLElement) {
  el.innerHTML =  templates.createScreenHeader(playerCiv, game) +
                  templates.createResourcesScreen(playerCiv, resources) +
                  templates.createCivilizationScreen(playerCiv) +
                  templates.createCitizenScreen(playerCiv, citizens) +
                  templates.createEconomyScreen(playerCiv) +
                  templates.createBuildingsScreen() +
                  templates.createWondersScreen() +
                  templates.createTechnologyScreen(playerCiv) +
                  //templates.createDiplomacyScreen(playerCiv) +
                  //templates.createMilitaryScreen(playerCiv) +
                  //templates.createCultureScreen(playerCiv) +
                  //templates.createFaithScreen(playerCiv) +
                  templates.createHistoryScreen(playerCiv);
                  //templates.createSettingsScreen(playerCiv, game);
}

function checkUnemployed() {
  if (playerCiv.population !== playerCiv.populationEmployed) {
    notify({message: 'You have unemployed citizens! <img src="img/citizen.png"> Employ them in the citizens panel!'});
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
  let citizensContainer = u.elt('.citizens');
  citizensContainer.innerHTML = '';

  for (let i = 0; i < citizens.items.length; i++) {
    let c = citizens.items[i];
    let d:string;
    if (c.descriptionOverride) {
      d = `<span>${c.description}</span>`;
    } else {
      d = `
        <span>+${c.contrib1.amount} <img src="img/${c.contrib1.name}.png"> ${c.contrib1.mod}, </span>
        <span>+${c.contrib2.amount} <img src="img/${c.contrib2.name}.png"> ${c.contrib2.mod}</span>
      `;
    }
    citizensContainer.innerHTML += `
    <div class='row citizen-${c.name}' data-id='${i}'>
      <button data-citizen='${c.name}' data-citizen-amount='-1'>-1</button>
      <span class='citizen-icon'><img src='img/${c.image}.png'></span>
      <button data-citizen='${c.name}' data-citizen-amount='1'>+1</button>
      <span class='citizen-info'>
        ${u.capitalize(c.name + 's')}: <strong class='${c.name}-num-text'>${c.amount}</strong> | ${d}
      </span>
    </div>
    `;
  }
}

function populateBuildings() {
  let buildingsContainer = u.elt('.buildings');
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

//name: string;
// img: string;
// buildTime: number;
// remainingTime: number;
// description: string;
// effect: string;
// func: Function;

function populateWonders():void {
  let wondersContainer = u.elt('.wonders');
  wondersContainer.innerHTML = '';

  for (let i = 0; i < wonders.items.length; i++) {
    let w = wonders.items[i];
    wondersContainer.innerHTML = `
      <div class='wonder' data-id='${i}' data-wonder='${w.name}'>
        <span class='wonder-image'><img src='${w.getImg()}'></span>
        <span class='wonder-name'>${w.name}</span><br>
        <span class='wonder-description'>${w.description}</span>
        <span class='wonder-effect'>${w.effect}</span>
        <span class='btn btn-build-wonder'>Build (${u.time(w.buildTime)})</span>
      </div>
    `;
  }
}

function updateYear() {
  game.year += 1;
  u.elt('.game-year-text').textContent = game.year;
}

function updateTime() {
  game.time += 1;
  u.elt('.game-year-text').title = u.time(game.time);
}

function addGoldenAgePoints() {
  let goldenAgeProgress = u.elt('.golden-age-progress');
  let goldenAgeMeter = u.elt('.metric-golden-age');
  let goldenAgePoints = playerCiv.happiness - playerCiv.anger;
  playerCiv.goldenAgeProgress += goldenAgePoints;
  goldenAgeProgress.textContent = u.abbrNum(playerCiv.goldenAgeProgress);

  let goldenAgePercent:string = ((playerCiv.goldenAgeProgress / goldenAgePoints) / 100) + '%';
  let bgString:string = u.progressBar(goldenAgePercent, '#BDBD6C', '#222');
  goldenAgeMeter.style.background = bgString;
}

function addResearchPoints() {
  playerCiv.research += playerCiv.researchPM / 60;

  u.elt('.research-text').textContent = u.abbrNum(playerCiv.research.toFixed(1), 2);

  let researchPercent:string = ((playerCiv.research / playerCiv.researchCost) * 100) + '%';

  let bgString:string = u.progressBar(researchPercent, '#83D4D4', '#444');

  u.elt('.research-progress-bar').style.background = bgString;

  if (playerCiv.research > playerCiv.researchCost) {
    u.elt('.research-exceeding').textContent = 'You are currently exceeding your current tech goal.';
  } else {
    u.elt('.research-exceeding').textContent = '';
  }

  checkAutomaticTechPurchase();
}

function checkAutomaticTechPurchase() {
  if (playerCiv.research >= playerCiv.researchCost) {
    if (playerCiv.researchingTechsArray.length > 0) {
      purchaseTech(playerCiv.researchingTechsArray[0], undefined);
      playerCiv.researchingTechsArray.shift();
    }
  }
}

function addCash() {
  playerCiv.cash += playerCiv.cashPM / 60;
  let cashText = u.elt('.cash-text');
  cashText.textContent = playerCiv.cash.toFixed(2);
}

function setInfluenceImage() {
  if (playerCiv.influence >= 0) {
    u.elt('.influence-img').src = 'img/influence.png';
  } else {
    u.elt('.influence-img').src = 'img/influence-alt.png';
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
        u.elt('.resource-info-screen').innerHTML = `
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
      let amount:number = parseInt(this.getAttribute('data-citizen-amount'));
      if (citizens.get(citizen).name === 'ruler') {
        notify({message:'You can\'t have more than one ruler!'});
      } else {
        if (citizens.get(citizen).amount === 0 && amount < 0) {
          notify({message:'You can\'t go below zero ' + citizens.get(citizen).name + 's!'});
        } else {
          if ((playerCiv.population - playerCiv.populationEmployed) === 0 && amount > 0) {
            notify({message:'All of your population is already employed!'});
          } else {
            addCitizen(citizen, amount, sel);
          }
        }

      }
    });
  });
}

function addCitizen(citizen:string, amount: number, sel:string) {
  citizens.get(citizen).amount += amount;
  playerCiv.populationEmployed += amount;
  updatePopulationEmployed();
  citizens.get(citizen).func(resources, amount);
  console.log(citizens.get(citizen).func);
  u.elt(sel).textContent = citizens.get(citizen).amount;
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
        notify({message:`Your citizens built a ${buildings.get(building).name} for <img src="img/prod.png"> ${buildings.get(building).prodCost}`});
        buildings.get(building).amount += 1;
        resources.get('prod').total -= buildings.get(building).prodCost;
        u.elt(totalSelt).textContent = buildings.get(building).amount;
        buildings.get(building).prodCost = Math.floor(Math.sqrt(buildings.get(building).prodCost) + (buildings.get(building).prodCost * 1.25));
        console.log(buildings.get(building).prodCost);
        u.elt(costSelt, true)[index].textContent = buildings.get(building).prodCost.toString();
        console.table(buildings.get(building));
        buildings.get(building).func(playerCiv, resources);
      } else {
        notify({message:`You don't have the <img src="img/prod.png"> to purchase a ${buildings.get(building).name}`});
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
        if (techs.get(tech).purchased === true) {
          notify({message:'You already purchased the ' + techs.get(tech).name + ' technology!'});
        } else {
          techs.get(tech).selected = true;
          console.log(techs.get(tech).selected);
          item.setAttribute('data-selected', true);
          if (techs.get(tech).selected) {
            // TODO: fix this mess
            if (playerCiv.researchingTechsArray.indexOf(tech) > -1) {
              throw new Error('Invalid addition to tech array: already included.');
            } else {
              playerCiv.researchingTechsArray.push(techs.get(tech).name);
            }

            //u.elt('.researching-techs').textContent = techs.get(tech).name;
          }
          if (playerCiv.research >= playerCiv.researchCost) {
            purchaseTech(tech, item);
          }
        }
      }
      console.log(playerCiv.researchingTechsArray);
    });
  });
}

function purchaseTech(tech:string, element:HTMLElement) {
  notify({message: 'You discovered the ' + techs.get(tech).name + ' technology!'});
  history.push(log({year: game.year, message: playerCiv.leaderName + ' discovered the ' + techs.get(tech).name + ' technology!', categoryImage: 'research'}));
  techs.get(tech).purchased = true;
  if (typeof element != 'undefined') {
    element.setAttribute('data-purchased', 'true');
  } else {
    u.elt('[data-tech="' + tech + '"]').setAttribute('data-purchased', 'true');
  }
  playerCiv.research -= playerCiv.researchCost;
  playerCiv.researchCost = Math.floor(((playerCiv.population * 4) + playerCiv.researchCost * .8));
  u.elt('.research-cost-text').textContent = playerCiv.researchCost;
  techs.get(tech).func(citizens, resources);
}


function renderHistory(history:string[]) {
  if (typeof history != 'undefined') {
    let historyLog = u.elt('.history');
    historyLog.innerHTML = '';
    for (let i = history.length - 1; i >= 0; --i) {
      historyLog.innerHTML += history[i] + '<br>';
    }
    //console.log(history);
  }
}

function showResourceInfo(name:string) {
  console.log(name);
}

function checkPopulationGrowthCost() {
  let button = document.querySelector('.pop-btn');
  if (playerCiv.populationGrowthCost > resources.get('food').total) {
    button.className = 'disabled pop-btn';
    return false;
  } else {
    button.className = 'pop-btn';
    return true;
  }
}

function UiSettingsButtons() {
  u.elt('.grid-button').addEventListener('click', function () {
    u.elt('.clickopolis').style.width = '100%';
  });
  u.elt('body').removeEventListener('mousewheel', scrollHorizontally, false);
}


function checkAchievements() {

}



function init() {
  startGame();
}

init();
