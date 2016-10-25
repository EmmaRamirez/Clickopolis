import Civilization = require('./civilization');
import notify = require('./notify');
import Collection = require('./collection');
import Utils = require('./utils');

import Resource = require('./resource');
import resourceData = require('./data.resource')

let u = new Utils();
let resources = resourceData;

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
      console.log('Happening!');
    },
    rarity: 'rare'
  },
  {
    func: function (options) {
      let horse = options.resource.get('horse');
      if (horse.unlocked) {
        horse.total += 1;
      }
    },
    rarity: 'uncommon'
  },
  {
    func: function (options) {
      let cattle = options.resources.get('cattle');
      if (cattle.unlocked) {
        cattle.total += 1;
      }
    },
    rarity: 'common'
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
