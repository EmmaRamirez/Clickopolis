import Collection = require('./collection');
import Civilization = require('./civilization');
import Legacy = require('./legacy');
import Utils = require('./utils');

let louisXIV = new Legacy('Louis XIV', 'culture', 1, function (level:number, playerCiv:Civilization) {
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
});

let legacies = new Collection<Legacy>('legacies', [louisXIV]);

export = legacies;
