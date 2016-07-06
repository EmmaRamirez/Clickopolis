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
import Era = require('./era');
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
let debugMode:boolean = false;


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
  el.addEventListener(eventType, function (event:Event) {
    //console.log(callback)
    return callback();
  });
}


function removeElement(element:HTMLElement) {
  element = <HTMLElement>element;
  element.remove();
}

function newEra(era:string) {
  // Stuff goes here to introduce new era
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
    //event.preventDefault();
    addClickToTotal('.r-food-total', 'food');
    if (resources.get('food').total === 10) {
      notify({message: 'Yay! You have enough <img src="img/food.png"> to grow your population!'});
    }

    checkPopulationGrowthCost();
  });

  bindElement('.prod-btn', 'click', function () {
    //event.preventDefault();
    addClickToTotal('.r-prod-total', 'prod');

    if (resources.get('prod').total === 15) {
      notify({message:'Yay! You have enough <img src="img/prod.png"> to build your first building!'});
    }
    checkPopulationGrowthCost();
  });

  resourceClick();

  bindElement('.pop-btn', 'click', function () {
    //event.preventDefault();

    resources.get('food').total -= playerCiv.populationGrowthCost;
    resources.get('food').perSecond -= 1;
    u.elt('.r-food-ps').textContent = resources.get('food').perSecond.toFixed(1) + ' PS';

    updatePopulation(1);

    checkPopulationGrowthCost();

    notify({message:'Your population just grew! Your citizen was automatically assigned as a farmer.'});

  });

  bindElement('#clear-local-storage', 'click', function () {
    store.clear();
  });

  setInfluenceImage();

  populateTechnologies();
  populateCitizens();
  populateBuildings();
  populateWonders();
  setTechQueue();

  history = [`<span class='log'><strong>0 AC</strong>: The Civilization of ${playerCiv.civName} was founded by ${playerCiv.leaderName}!`];
  renderHistory(history);

  citizenClick();
  techClick();
  buildingClick();
  wonderClick();

  UiSettingsButtons();

}

function updatePopulationEmployed():void {
  u.elt('.citizens-population-text').textContent = playerCiv.populationEmployed.toString() + '/' + playerCiv.population.toString();
}

function updatePopulation(pop:number) {
  let popGrowthCost = document.querySelector('.pop-growth-cost');
  let populationText = document.querySelector('.population-text');

  playerCiv.population += pop;
  playerCiv.populationGrowthCost = Math.round((playerCiv.populationGrowthCost) + playerCiv.population);

  populationText.textContent = playerCiv.population.toString();
  popGrowthCost.textContent = playerCiv.populationGrowthCost.toString();

  playerCiv.cashPM += pop * 2;
  playerCiv.researchPM += pop * 2;
  playerCiv.anger += pop * 1;
  playerCiv.pollution += pop * 1;

  //elt('.research-text').textContent = playerCiv.research.toString();
  u.elt('.cash-from-citizens').textContent = (playerCiv.population - 1) * 2;
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
    u.elt('.research-PM').textContent = playerCiv.researchPM;
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
                  templates.createMenuScreen() +
                  templates.createResourcesScreen(playerCiv, resources) +
                  templates.createCivilizationScreen(playerCiv) +
                  templates.createCitizenScreen(playerCiv, citizens) +
                  templates.createEconomyScreen(playerCiv) +
                  templates.createBuildingsScreen(resources) +
                  templates.createWondersScreen() +
                  templates.createTechnologyScreen(playerCiv) +
                  //templates.createDiplomacyScreen(playerCiv) +
                  //templates.createMilitaryScreen(playerCiv) +
                  //templates.createCultureScreen(playerCiv) +
                  //templates.createFaithScreen(playerCiv) +
                  templates.createLegacyScreen(playerCiv) +
                  templates.createAchievementsScreen(playerCiv) + 
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
    let categories = '';
    for (let j = 0; j < techs.items[i].categories.length; j++) {
      categories += `<div class='category' title=${u.capitalize(techs.items[i].categories[j])}><img src='img/${techs.items[i].categories[j]}.png'></div>`;
    }
    let t = techs.items[i];
    technologies.innerHTML += `
    <div class='tech' data-id='${i}' data-tech='${t.name}' data-selected=${t.selected} data-purchased=${t.purchased}>
      <span class='tech-name'>${t.name}</span>
      <span class='tech-description'>${t.description}</span>
      <ul class='tech-list'>
        ${effects}
      </ul>
      <div class='tech-categories'>
        ${categories}
      </div>
    </div>`;
  }
}

function setTechQueue() {
  u.elt('.tech-queue').innerHTML = '<div>Queue: </div>';
  for (let i = 0; i < playerCiv.researchingTechsArray.length; i++) {
    console.debug('Queue Item', i);
    u.elt('.tech-queue').innerHTML += `<span data-id='${i}'>${playerCiv.researchingTechsArray[i]} <img class='queue-cancel' data-q-id='${i}' data-tech='${playerCiv.researchingTechsArray[i]}' src='img/close.png'></span>`;
  }
  if (playerCiv.researchingTechsArray.length === 0) {
    u.elt('.tech-queue').innerHTML += ' You have no techs queued.';
  }
  handleQueueCancelClick();
}

function handleQueueCancelClick() {
  [].forEach.call(u.elt('.queue-cancel', true), function (item:any) {
    item.addEventListener('click', function() {
      let tech = item.getAttribute('data-tech');
      let index = techs.get(tech, true);
      let qIndex = item.getAttribute('data-q-id');
      console.debug('Tech index', index);
      console.debug('Q index', qIndex);
      playerCiv.researchingTechsArray.splice(qIndex, 1);
      u.elt('.tech[data-id="' + index + '"]').setAttribute('data-selected', false);
      //techs.get(tech).selected = false;
      setTechQueue();
    });
  });
}

function populateCitizens() {
  let citizensContainer = u.elt('.citizens');
  citizensContainer.innerHTML = '';

  for (let i = 0; i < citizens.items.length; i++) {
    let c = citizens.items[i];
    //let d:string;
    citizensContainer.innerHTML += `
    <div class='row citizen-${c.name}' data-visible='${c.visible}' data-enabled='${c.enabled}' data-id='${i}' style='border-right: 4px solid ${c.color}'>
      <button data-citizen='${c.name}' data-citizen-amount='-1'>-1</button>
      <span class='citizen-icon'><img src='img/${c.image}.png'></span>
      <button data-citizen='${c.name}' data-citizen-amount='1'>+1</button>
      <span class='citizen-info'>
        ${u.capitalize(c.name + 's')}: <strong class='${c.name}-num-text'>${c.amount}</strong> | <span class='contrib' data-citizen='${c.name}'>${u.setContributions(c) }</span>
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
      <div class='building' data-id='${i}' data-visible='${b.visible}' data-enabled='${b.enabled}' data-building='${b.name}' data-purchaseable='false'>
        <span class='building-total' data-building='${b.name}' title='how many you own'>${b.amount}</span>
        <span class='building-cost'><span class='building-cost-text data-id='${i}'>${b.prodCost}</span> <img src='img/prod.png'></span>
        <span class='building-name'>${b.name}</span>
        <span class='building-description'>${b.description}</span>
        <span class='building-effect' data-building='${b.name}'>${b.effect}</span>
      </div>
    `;
  }
}

// name: string;
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
    wondersContainer.innerHTML += `
      <div class='wonder' data-id='${i}' data-wonder='${w.name}' data-visible='${w.visible}' data-enabled='${w.enabled}'>
        <div class='wonder-progress-bar hidden' data-wonder='${w.name}'></div>
        <div class='wonder-image'>
          <span class='wonder-image'><img src='${w.getImg()}'></span>
          <span class='btn btn-build-wonder' data-wonder='${w.name}' data-id='${i}'>Build (${u.time(w.buildTime)})</span>
        </div>
        <div class='wonder-info'>
          <div class='wonder-name'>${w.name}</div>
          <div class='wonder-description'>${w.description}</div>
          <div class='wonder-effect'>${w.effect}</div>
        </div>
      </div>
    `;
  }
}

function populate(container:HTMLElement, collection:Collection<any>, template:string) {
  container.innerHTML = '';

  for (let i = 0; i < collection.items.length; i++) {
    let item = collection.items[i];
    container.innerHTML += templates.createWonder(item, i);
  }
}

//populate(u.elt('.wonders'), wonders, templates.createWonder() );

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

  if (goldenAgePoints > 0) {
    let goldenAgePercent:string = ((playerCiv.goldenAgeProgress / goldenAgePoints) / 100) + '%';
    let bgString:string = u.progressBar(goldenAgePercent, '#BDBD6C', '#222');
    goldenAgeMeter.style.background = bgString;
  } else {
    let goldenAgePercent:string = ((playerCiv.goldenAgeProgress / goldenAgePoints) / 100) + '%';
    let bgString:string = u.progressBar(goldenAgePercent, '#CC0000', '#CC0000');
    goldenAgeMeter.style.background = bgString;
  }
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
      setTechQueue();
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
  citizens.get(citizen).func(amount, resources, playerCiv);
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

function wonderClick() {
  let wonderEls = <NodeListOf<HTMLElement>>u.elt('.wonder', true);
  console.log(wonderEls);

  [].forEach.call(wonderEls, function (item:any, index:number) {
    item.addEventListener('click', function () {
      //alert('hello');
      let wonder = item.getAttribute('data-wonder');
      let wonderCheck = wonders.get(wonder).checkFunc(resources);
      if (wonderCheck) {
        if (wonders.get(wonder).buildTime === wonders.get(wonder).remainingTime) {
          notify({message: `Work has begun on the ${wonders.get(wonder).name}!`});
          startBuildingWonder(wonders.get(wonder));
        } else {
          notify({message: `You can't restart work on a wonder!`});
        }
      } else {
        notify({message: `You don't have the prerequisites to build ${wonders.get(wonder).name}!`});
      }
    });
  });
}

function startBuildingWonder(wonder:Wonder) {
  let intervalID:number;
  let bgString:string;
  let wonderProgressBar = u.elt('.wonder-progress-bar[data-wonder="' + wonder.name + '"]');
  //let wonderProgressBar = u.elt('.wonder', true)[0];
  let btnBuildWonder = u.elt('.btn-build-wonder[data-wonder="' + wonder.name + '"]');

  intervalID = setInterval(function() {
    console.log(wonder.remainingTime);
    btnBuildWonder.textContent = u.time(wonder.remainingTime);
    wonder.remainingTime--;
    //renderProgress(wonderProgressBar);
    stopTimer();
  }, 1000);

  function stopTimer() {
    if (wonder.remainingTime <= 1) {
      notify({message: `You completed the ${wonder.name}!`});
      wonder.func(playerCiv);
      btnBuildWonder.textContent = 'COMPLETE';
      history.push(log({year: game.year, message: `${playerCiv.civName} finished work on ${wonder.name}!`, categoryImage: 'wonder'}));
      clearInterval(intervalID);
    }
  }
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
          item.setAttribute('data-purchased', true);
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
              setTechQueue();
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
  history.push(log({year: game.year, message: playerCiv.civName + ' discovered ' + techs.get(tech).name + '!', categoryImage: 'research'}));
  techs.get(tech).purchased = true;
  if (typeof element != 'undefined') {
    element.setAttribute('data-purchased', 'true');
  } else {
    u.elt('[data-tech="' + tech + '"]').setAttribute('data-purchased', 'true');
  }
  playerCiv.research -= playerCiv.researchCost;
  playerCiv.researchCost = Math.floor(((playerCiv.population * 3) + playerCiv.researchCost * .8));
  u.elt('.research-cost-text').textContent = playerCiv.researchCost;
  techs.get(tech).func(citizens, resources, playerCiv, buildings, wonders);
  eraCheck();
}

function eraCheck() {
  if (100 === 99) {
    game.era = Era.Classical;
    triggerEra();
  }
}

function triggerEra() {
  u.elt('body').innerHTML += `
    <div class='overlay overlay-era'>
      <div class='modal modal-era era-${game.era}'>
        <h1>Welcome to the ${game.era} Era!</h1>
        <button class='btn-era large-btn'>Continue</button>
      </div>
    </div>
  `;
  u.elt('.btn-era').addEventListener('click', function () {
    removeElement(u.elt('.overlay-era'));
    //this.remove();
  });
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
