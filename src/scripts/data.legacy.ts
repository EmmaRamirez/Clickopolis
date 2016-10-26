import Collection = require('./collection');
import Civilization = require('./civilization');
import Legacy = require('./legacy');
import { notify } from './notify';
import { Utils } from './utils';

let empireOfTheArts = new Legacy(
  'Empire of the Arts', 'culture', 1, 5,
  [
    `<h3>Culture Level I</h3>
    <ul>
      <li>+150 <img src="img/culture.png"> PM</li>
      <li>+20% <img src="img/culture.png"></li>
    </ul>`,
    `<h3>Culture Level II</h3>
    <ul>
      <li>+1K <img src="img/culture.png"> PM</li>
      <li>+40% <img src="img/culture.png"></li>
    </ul>`,
    `<h3>Culture Level II</h3>
    <ul>
      <li>+10K <img src="img/culture.png"> PM</li>
      <li>+100% Great Work generation</li>
      <li>+60% <img src="img/culture.png"></li>
    </ul>`,
    `<h3>Culture Level IV</h3>
    <ul>
      <li>10% of <img src="img/culture.png"> PM converted into <img src="img/research.png"> PM</li>
    </ul>`,
    `<h3>Culture Level V</h3>
    <ul>
      <li>Unlock 10 new Great Works</li>
    </ul>`
  ],
  function (level:number, playerCiv:Civilization) {
    switch (level) {
      case 1:
        playerCiv.culturePM += 150;
        notify({message: `Your culture PM increased to <img src="img/culture.png"> ${playerCiv.culturePM}!`}, true);
        break;
      case 2:
        playerCiv.culturePM += 1000;
        break;
      case 3:
        playerCiv.culturePM += 10000;
        break;
      default:
        break;
    }
  }
);

let economicSuperpower = new Legacy(
  'Economic Superpower', 'economy', 1, 5,
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
    `,
    `<h3>Economy Level III</h3>
    <ul>
      <li>+10K <img src="img/coin.png"> PM</li>
      <li>+100% <img src="img/coin.png"> from Trade Routes</li>
    </ul>`,
    `<h3>Economy Level IV</h3>
    <ul>
      <li>+250K <img src="img/coin.png"> PM</li>
    </ul>`,
    `<h3>Economy Level V</h3>
    <ul>
      <li>+1M <img src="img/coin.png"> PM</li>
    </ul>`
  ],
  function (level:number, playerCiv:Civilization) {
    switch (level) {
      case 1:
        playerCiv.cashPM += 100;
        notify({message: `Your culture PM increased to <img src="img/coin.png"> ${playerCiv.cashPM}!`}, true)
        break;
      case 2:
        playerCiv.cashPM += 1000;
        break;
      case 3:
        playerCiv.cashPM += 10000;
        break;
      case 4:
        playerCiv.cashPM += 250000;
        break;
      case 5:
        playerCiv.cashPM += 1000000;
        break;
      default:
        break;
    }
  }
);
let neverSettingSun = new Legacy(
  'Never Setting Sun', 'military', 1, 5,
  [

  ],
  function () {

  }
);
let revolutionOfLetters = new Legacy(
  'Revolution of Letters', 'research', 1, 5,
  [
    ``,
    ``,
    ``,
    ``,
    ``
  ],
  function (level:number, playerCiv:Civilization) {
    switch (level) {
      case 1:
        break;
      default:
        break;
    }
  }
);
let trueEmpire = new Legacy(
  'True Empire', 'civilization', 1, 5,
  [
    ``,
    ``,
    ``,
    ``,
    ``
  ],
  function () {

  }
);
let divineKingdom = new Legacy(
  'Divine Kingdom', 'faith-alt', 1, 5,
  [
    `<h3>Faith Level I</h3>
    <ul>
      <li>+10 <img src="img/faith.png"> PM</li>
    </ul>`,
    `<h3>Faith Level II</h3>
    <ul>
      <li>+250 </li>
    </ul>`,
    ``,
    ``,
    ``
  ],
  function () {

  }
);
let worldStagePlayer = new Legacy(
  'World Stage Playa', 'diplomacy', 1, 5,
  [

  ],
  function () {

  }
);

let legacies = new Collection<Legacy>('legacies', [
  empireOfTheArts,
  economicSuperpower,
  neverSettingSun,
  revolutionOfLetters,
  trueEmpire,
  divineKingdom,
  worldStagePlayer
]);

export = legacies;
