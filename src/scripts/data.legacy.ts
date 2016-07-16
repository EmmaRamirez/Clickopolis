import Collection = require('./collection');
import Civilization = require('./civilization');
import Legacy = require('./legacy');
import Utils = require('./utils');

let louisXIV = new Legacy(
  'Louis XIV', 'culture', 1,
  [
    `<h3>Culture Level 1</h3>
    <ul>
      <li>+3 <img src="img/culture.png"> PM</li>
      <li>+20% <img src="img/culture.png"></li>
    </ul>`
  ],
  function (level:number, playerCiv:Civilization) {
    level = this.level;

    switch (level) {
      case 1:
        playerCiv.culturePM += 3;
        break;
      case 2:
        playerCiv.culturePM += 10;
        break;
      default:
        break;
    }
  }
);

let mansaMusaII = new Legacy(
  'Mansa Musa II', 'economy', 1,
  [
    `<h3>Economy Level 1</h3>
    <ul>
      <li>+100 <img src="img/coin.png"> PM</li>
    </ul>
    `
  ],
  function () {

  }
);
let gengisKhan = new Legacy(
  'Genghis Khan', 'military', 1,
  [

  ],
  function () {

  }
);
let peterTheGreat = new Legacy(
  'Peter the Great', 'research', 1,
  [

  ],
  function () {

  }
);
let georgeWashington = new Legacy(
  'George Washington', 'civilization', 1,
  [

  ],
  function () {

  }
);
let philipII = new Legacy(
  'Philip II', 'faith-alt', 1,
  [

  ],
  function () {

  }
);

let legacies = new Collection<Legacy>('legacies', [louisXIV, mansaMusaII, gengisKhan, peterTheGreat, georgeWashington, philipII]);

export = legacies;
