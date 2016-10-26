import Civilization = require('./civilization');
import notify = require('./notify');
import Collection = require('./collection');
import { Utils } from './utils';

import Resource = require('./resource');
import resourceData = require('./data.resource')

import Citizen = require('./citizen');
import citizenData = require('./data.citizen');

let u = new Utils();

function choose(arr:any[]):any {
  return arr[Math.floor(Math.random() * arr.length)];
}

interface ClickopolisEvent {
  func: Function;
  rarity: string;
}

const Events:ClickopolisEvent[] = [
  {
    func: function(options) {
      let banana = options.resources.get('banana');
      if (banana.unlocked) {
        banana.total += 1;
      }
    },
    rarity: 'rare'
  },
  {
    func: function (options) {
      let horse = options.resources.get('horse');
      if (horse.unlocked) {
        horse.total += 1;
      }
    },
    rarity: 'uncommon'
  },
  {
    func: (options) => {
      let cattle = options.resources.get('cattle');
      if (cattle.unlocked) {
        cattle.total += 1;
      }
    },
    rarity: 'common'
  },
  {
    func: (options) => {
      let stone = options.resources.get('stone');
      let miners = options.citizens.get('miner');
      if (stone.unlocked) {
        stone.total += miners.amount;
      }
    },
    rarity: 'common'
  },
  {
    func: (options) => {
      let spices = options.resources.get('spices');
      let woodcutters = options.citizens.get('woodcutter');
      if (spices.unlocked) {
        spices.total += woodcutters.amount;
      }
    }
  }
];

const filterEvents = function(rarity:string) {
  return Events.filter((value) => {
    return value.rarity === rarity;
  });
}

interface RollEventOptions {
  playerCiv: Civilization;
  resources: Collection<Resource>;
  citizens: Collection<Citizen>;
}

export function rollEvent(options:RollEventOptions) {
  let roll = Math.floor(Math.random() * 100);
  let cb;

  console.log(roll);

  if (roll <= 10) {
    cb = choose(filterEvents('rare'));
    console.log(cb);
  } else if (10 < roll && roll <= 35) {
    cb = choose(filterEvents('uncommon'));
    console.log(cb);
  } else if (35 < roll && roll <= 100) {
    cb = choose(filterEvents('common'));
    console.log(cb);
  }

  cb.func(options);
}
