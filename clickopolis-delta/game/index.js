"use strict";
var Civilization = require('./civilization');
function createEmpire(triggerBtn, leaderNameInput, civNameInput, locationInput) {
    triggerBtn.addEventListener('click', function (event) {
        // TODO: Replace this with the constructor for Civilization!!
        if (civNameInput.value === "" || leaderNameInput.value === "" || locationInput.value === "none") {
            alert("one of the fields is missing, bro.");
        }
        else {
            var playerCiv = new Civilization(civNameInput.value, leaderNameInput.value, locationInput.value);
            console.log(playerCiv.leaderName, playerCiv.civName, playerCiv.location);
            var info = document.createElement('p');
            info.textContent = "Welcome " + playerCiv.leaderName + ", leader of " + playerCiv.civName + ", brave inhabitant of the " + playerCiv.location + "!";
            document.body.appendChild(info);
        }
    }, false);
}
createEmpire(document.getElementById('continue'), document.getElementById('leadername'), document.getElementById('civname'), document.getElementById('location'));
//# sourceMappingURL=index.js.map