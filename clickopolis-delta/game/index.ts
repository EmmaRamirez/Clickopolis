// <reference path="store.d.ts" />
// <reference path="underscore.d.ts" />

import _ = require('underscore');
import Game = require('./game');
import Settings = require('./settings');
import Civilization = require('./civilization');
import Resource = require('./resource');
import Resources = require('./resources');
import Templates = require('./template');
import notify = require('./notify');



console.log(_.random(0, 100));

let game:Game = new Game(0);
let playerCiv:Civilization;
let templates:Templates = new Templates();
let food:Resource = new Resource('food', 1, 0, 200, 0, 'food', 'Food.');
let prod:Resource = new Resource('prod', 1, 0, 200, 0, 'prod', 'Prod.');
let stone:Resource = new Resource('stone', 0, 0, -1, 0, 'stone', 'Stone');
let fish:Resource = new Resource('fish', 0, 0, -1, 0, 'fish', 'Fishies');

//notify('hello');

let resources:Resource[] = [food, prod, stone, fish];


game.era = 'ancient';

console.log(resources[0], resources[1]);




function savePlayer():void {
  store.set('playerCiv', playerCiv);
  console.log(store.get('playerCiv'));
}

function removeItem(arr:any[], item:any) {
  for (var i = arr.length - 1; i--;) {
    if (arr[i] === item) arr.splice(i, 1);
  }
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

function unbindElement(node:string, eventType:string) {

}

function hideElement(element:HTMLElement) {
  element = <HTMLElement>element;
  element.className += " hidden";
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
  append('body', templates.createStartScreen(playerCiv));
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
  clickopolisGame.innerHTML = templates.createScreenHeader(playerCiv) +
                              templates.createResourcesScreen(playerCiv, resources) +
                              templates.createCivilizationScreen(playerCiv) +
                              templates.createCitizenScreen(playerCiv);

  intro != undefined ? intro.remove() : console.log('intro not defined');

  document.body.appendChild(clickopolisGame);
  //append('body', templates.resourcesScreen);


  bindElement('.food-btn', 'click', function() {

    resources[0].total += 1;
    createGameUI();
  });
}


function setPlayerCiv() {
  let civNameInput = <HTMLInputElement>document.querySelector('#civName'),
      leaderNameInput = <HTMLInputElement>document.querySelector('#leaderName'),
      location = <HTMLSelectElement>document.querySelector('#location');
  playerCiv.civName = civNameInput.value;
  playerCiv.leaderName = leaderNameInput.value;
  playerCiv.location = location.value;
  savePlayer();
}



function init() {
  startGame();
}

init();
