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


function saveGame():void {
  store.set('game', game);
  store.get('game');
}

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

function elt(query:string, all:boolean = false):any {
  if (all == false)
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


  //btnClick();
  //resourceClick('.food-btn', 0);
  //resourceClick('.prod-btn', 1);

  // bindElement('.prod-btn', 'click', function () {
  //   let prodTotalElement = <HTMLElement>document.querySelector('.r-prod-total');
  //
  //   resources[1].total += resources[1].perClick;
  //   prodTotalElement.innerHTML = resources[1].total.toString() + ' total';
  //
  //   console.log(this);
  // });

  bindElement('.food-btn', 'click', function () {
    let foodTotalElement = <HTMLElement>document.querySelector('.r-food-total');

    if (resources[0].total >= resources[0].max) resources[0].total = resources[0].max;
    else resources[0].total += resources[0].perClick;


    foodTotalElement.innerHTML = resources[0].total.toString() + ' total';

    console.log(this);
  });


}

setInterval(function() {
  if (resources[0].total >= resources[0].max) resources[0].total = resources[0].max;
  else resources[0].total += resources[0].perSecond;

  elt('.r-food-total').textContent = resources[0].total.toString() + ' total';

}, 1000);

function drawUI(el:HTMLElement) {
  el.innerHTML =  templates.createScreenHeader(playerCiv, game) +
                  templates.createResourcesScreen(playerCiv, resources) +
                  templates.createCivilizationScreen(playerCiv) +
                  templates.createCitizenScreen(playerCiv);
}

function resourceClick(button:string, i:number) {
  let resourceButtons = <NodeListOf<HTMLElement>>document.querySelectorAll(button);
  let foodTotalElement = <HTMLElement>document.querySelector('.r-food-total');
  // resourceButtons.forEach(function (item:any, idx:number) {
  //   item.addEventListener('click', function () {
  //     console.log(item, idx);
  //   });
  // };
  [].forEach.call(resourceButtons, function(item:any) {
    item.addEventListener('click', function () {
      resources[i].total += resources[i].perClick;
      foodTotalElement.innerHTML = resources[i].total.toString() + ' total';
      console.log(this);
      //createGameUI();
    })(item);
  })
}






function init() {
  startGame();
}

init();
