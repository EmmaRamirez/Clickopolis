// <reference path="store.d.ts" />
// <reference path="underscore.d.ts" />

import _ = require('underscore');
import Game = require('./game');
import Settings = require('./settings');
import Civilization = require('./civilization');
import Resource = require('./resource');
import Templates = require('./template');
import notify = require('./notify');


console.log(_.random(0, 100));

let game:Game = new Game(0);
let playerCiv:Civilization;
let templates:Templates = new Templates();
let food:Resource = new Resource('food', 1, 0, 200, 0);
let resources:Resource[] = [food];

console.log(resources[0]);




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

  clickopolisGame.setAttribute('class', 'clickopolis');
  clickopolisGame.setAttribute('id', 'clickopolis');
  clickopolisGame.innerHTML = templates.createScreenHeader(playerCiv) + templates.resourcesScreen + templates.createCitizenScreen(playerCiv);

  intro != undefined ? intro.remove() : console.log('intro not defined');

  document.body.appendChild(clickopolisGame);
  //append('body', templates.resourcesScreen);

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
function bindCurrentGameButton() {};

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
  document.querySelector('.next-btn').addEventListener('click', function() {

    switch (game.introStep) {
      case 0:
        let lni = <HTMLInputElement>document.getElementById('leaderName');
        let cni = <HTMLInputElement>document.getElementById('civName');
        let loc = <HTMLSelectElement>document.getElementById('location');
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

function createCiv(step:number, leaderNameInput:HTMLInputElement, civNameInput:HTMLInputElement, locationInput:HTMLSelectElement):void {
  let leaderName:string = leaderNameInput.value;
  let civName:string = civNameInput.value;
  let location:string = locationInput.value;
  let prevBtn:HTMLButtonElement = <HTMLButtonElement>document.querySelector('.prev-btn');
  let nextBtn:HTMLButtonElement = <HTMLButtonElement>document.querySelector('.next-btn');

  playerCiv.leaderName = leaderName;
  playerCiv.civName = civName;
  playerCiv.location = location;

  savePlayer();

  if (step === 0) {
    if (leaderName === "" || civName === "" || location === "none") {
      console.error('Not all fields filled out.')
    } else {
      createCivStepOne(leaderName, civName, location);
      prevBtn.disabled = false;
      game.introStep = 1;
    }
  }
  if (step === 1){

  }

}

function createCivStepOne(leaderName:string, civName:string, location:string):void {
  //let playerCiv:Civilization = new Civilization(civName, leaderName, location);
  let stepOne:HTMLElement = <HTMLElement>document.querySelector('.step-one');
  let stepTwo:string = `
    <span class='step-two'>
      <h2>Welcome ${playerCiv.leaderName}, leader of ${playerCiv.civName}, brave inhabitant of the ${playerCiv.location}!</h2>
      <p>What are your traits, O Glorious Leader? (Select <em id='traitsLeft'>3</em>)</p>
      <div class='checkbox-list trait-cbl'>
        <label><input type='checkbox' value='aggressive'>Aggressive</label>
        <label><input type='checkbox' value='communal'>Communal</label>
        <label><input type='checkbox' value='cunning'>Cunning</label>
        <label><input type='checkbox' value='deliberate'>Deliberate</label>
        <label><input type='checkbox' value='expansionist'>Expansionist</label>
        <label><input type='checkbox' value='individualistic'>Individualistic</label>
        <label><input type='checkbox' value='industrious'>Industrious</label>
        <label><input type='checkbox' value='isolationist'>Isolationist</label>
        <label><input type='checkbox' value='pacifistic'>Pacificistic</label>
        <label><input type='checkbox' value='persuasive'>Persuasive</label>
      </div>
    </span>`;
  stepOne.insertAdjacentHTML('afterend', stepTwo);
  stepOne.className += " hidden";
  activateTraitList(playerCiv);
}





function activateTraitList(playerCiv:Civilization):void {
  let traitCheckBoxes:NodeListOf<HTMLInputElement> = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.trait-cbl input');
  let traitsLeft:HTMLSpanElement = <HTMLSpanElement>document.getElementById('traitsLeft');
  for (var i = 0; i < traitCheckBoxes.length; i++) {
    traitCheckBoxes[i].addEventListener('change', function(event) {


      if (this.checked === true) {
        if (playerCiv.leaderTraits.length >= 3) {
          console.error("Exceedeed max traits.");
          event.preventDefault();
        } else {
          playerCiv.leaderTraits.push(this.value);
          console.log(playerCiv.leaderTraits);
          traitsLeft.textContent = (3 - playerCiv.leaderTraits.length).toString();
        }

      } else {
        removeItem(playerCiv.leaderTraits, this.value);
        console.log(playerCiv.leaderTraits);
        traitsLeft.textContent = (playerCiv.leaderTraits.length).toString();
      }
    });
  }
}

function configureSettings() {
  let stepTwo = <HTMLElement>document.querySelector('.step-two');
  hideElement(stepTwo);
  let stepThree = `
    <section class='step-three'>
      <h2>Configure & Confirm Your Settings</h2>
      <label>Name</label><input value="${playerCiv.leaderName}"><br>
      <label>Civilization</label><input value="${playerCiv.civName}"><br>
      <label>Settlement<label><input value="${playerCiv.location}"><br>

    </section>
  `;
  prepend('.stepThree', stepThree);

}

function init() {
  startGame();
}

init();
