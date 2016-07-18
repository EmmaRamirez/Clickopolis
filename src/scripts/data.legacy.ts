import Collection = require('./collection');
import Civilization = require('./civilization');
import Legacy = require('./legacy');
import notify = require('./notify');
import Utils = require('./utils');

let louisXIV = new Legacy(
  'Louis XIV', 'culture', 1, 5,
  [
    `<h3>Culture Level 1</h3>
    <ul>
      <li>+150 <img src="img/culture.png"> PM</li>
      <li>+20% <img src="img/culture.png"></li>
    </ul>`
  ],
  function (level:number, playerCiv:Civilization) {
    level = this.level;

    switch (level) {
      case 1:
        playerCiv.culturePM += 150;
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
  'Mansa Musa II', 'economy', 1, 5,
  [
    `<h3>Economy Level I</h3>
    <ul>
      <li>+100 <img src="img/coin.png"> PM</li>
    </ul>
    `,
    `<h3>Economy Level II</h3>
    <ul>
      <li>+1K <img src="img/coin.png"> PM</li>
    </ul>
    `
  ],
  function () {

  }
);
let gengisKhan = new Legacy(
  'Genghis Khan', 'military', 1, 5,
  [

  ],
  function () {

  }
);
let peterTheGreat = new Legacy(
  'Peter the Great', 'research', 1, 5,
  [

  ],
  function () {

  }
);
let georgeWashington = new Legacy(
  'George Washington', 'civilization', 1, 5,
  [

  ],
  function () {

  }
);
let philipII = new Legacy(
  'Philip II', 'faith-alt', 1, 5,
  [

  ],
  function () {

  }
);
let clemmensVonMetternich = new Legacy(
  'Clemmens von Metternich', 'diplomacy', 1, 5,
  [

  ],
  function () {

  }
);

let legacies = new Collection<Legacy>('legacies', [mansaMusaII, gengisKhan, peterTheGreat, georgeWashington, philipII, clemmensVonMetternich]);

export = legacies;
