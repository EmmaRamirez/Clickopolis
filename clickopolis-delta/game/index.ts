
import Game = require('./game');
import Civilization = require('./civilization');
import Resource = require('./resource');
import notify = require('./notify');


let game:Game = new Game(0);

document.querySelector('.prev-btn').setAttribute('disabled', 'true');


function createCiv(step:number, leaderNameInput:HTMLInputElement, civNameInput:HTMLInputElement, locationInput:HTMLSelectElement):void {
  let leaderName:string = leaderNameInput.value;
  let civName:string = civNameInput.value;
  let location:string = locationInput.value;
  let prevBtn:HTMLButtonElement = <HTMLButtonElement>document.querySelector('.prev-btn');
  let nextBtn:HTMLButtonElement = <HTMLButtonElement>document.querySelector('.next-btn');

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
  let playerCiv:Civilization = new Civilization(civName, leaderName, location);
  let stepOne:HTMLElement = <HTMLElement>document.querySelector('.step-one');
  let stepTwo:string = `
    <span class='step-two'>
      <h2>Welcome ${playerCiv.leaderName}, leader of ${playerCiv.civName}, brave inhabitant of the ${playerCiv.location}!</h2>
      <p>What are your traits, O Glorious Leader? (Select <span id='traitsLeft'>3</span>)</p>
      <div class='checkbox-list'>
        <label><input type='checkbox' value='industrious'>Industrious</label>
        <label><input type='checkbox' value='aggressive'>Aggressive</label>
        <label><input type='checkbox' value='pacifistic'>Pacificistic</label>
        <label><input type='checkbox' value='expansionist'>Expansionist</label>
        <label><input type='checkbox' value='isolationist'>Isolationist</label>
        <label><input type='checkbox' value='deliberate'>Deliberate</label>
        <label><input type='checkbox' value='cunning'>Cunning</label>
        <label><input type='checkbox' value='communal'>Communal</label>
        <label><input type='checkbox' value='individualistic'>Individualistic</label>
        <label><input type='checkbox' value='persuasive'>Persuasive</label>
      </div>
    </span>`;
  stepOne.insertAdjacentHTML('afterend', stepTwo);
  stepOne.className += " hidden";
}

document.querySelector('.next-btn').addEventListener('click', function():void {
  createCiv(game.introStep, <HTMLInputElement>document.getElementById('leaderName'), <HTMLInputElement>document.getElementById('civName'), <HTMLSelectElement>document.getElementById('location'));
});
