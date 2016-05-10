import Civilization = require('./civilization');
import Resource = require('./resource');



function createEmpire(triggerBtn:HTMLButtonElement, leaderNameInput:HTMLInputElement, civNameInput:HTMLInputElement, locationInput:HTMLSelectElement):void {
  triggerBtn.addEventListener('click', function (event) {
    // TODO: Replace this with the constructor for Civilization!!
    if (civNameInput.value === "" || leaderNameInput.value === "" || locationInput.value === "none") {
      alert("one of the fields is missing, bro.");
    } else {
      let playerCiv = new Civilization(civNameInput.value, leaderNameInput.value, locationInput.value);

      console.log(playerCiv.leaderName, playerCiv.civName, playerCiv.location);

      let info = document.createElement('p');
      info.textContent = `Welcome ${playerCiv.leaderName}, leader of ${playerCiv.civName}, brave inhabitant of the ${playerCiv.location}!`;

      document.body.appendChild(info);
    }
  }, false);
}

createEmpire(<HTMLButtonElement>document.getElementById('continue'),
             <HTMLInputElement>document.getElementById('leadername'), <HTMLInputElement>document.getElementById('civname'),
             <HTMLSelectElement>document.getElementById('location'));
