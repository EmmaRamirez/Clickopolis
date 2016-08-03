import Collection = require('./collection');
import Resource = require('./resource');
import Citizen = require('./citizen');
import Building = require('./building');
import Wonder = require('./wonder');

class Utils {
  abbrNum (number:any, decPlaces:number = 2):string {
    decPlaces = Math.pow(10,decPlaces);
    let abbrev = [ 'K', 'M', 'B', 'T', 'Q', 'Qt', 'S', 'St', 'O', 'N', 'D' ];
    for (let i = abbrev.length - 1; i >= 0; i--) {
      let size = Math.pow(10,(i+1)*3);
      if (size <= number) {
         number = Math.round(number * decPlaces/size) / decPlaces;
         if((number == 1000) && (i < abbrev.length - 1)) {
             number = 1;
             i++;
         }
         number += abbrev[i];
         break;
      }
    }
    return number;
  }

  capitalize(str:string):string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  dasherize(str:string):string {
    return str.trim().replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
  }

  choose(arr:any[]):any {
    return arr[Math.floor(Math.random()*arr.length)];
  }

  elt(query:string, all:boolean = false):any {
    if (all === false)
      return <HTMLElement>document.querySelector(query);
    else
      return <NodeListOf<HTMLElement>>document.querySelectorAll(query);
  }

  hideElement(element:HTMLElement) {
    element = <HTMLElement>element;
    element.classList.add('hidden');
  }

  once(fn: Function, context:any):Function {
    let result:Function;
    return function() {
      if (fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }
      return result;
    }
  }


  progressBar(percent:string, progressColor: string, endColor: string, direction: string = 'right'):string {
    function render() {
      let progressBar = `linear-gradient(to ${direction}, ${progressColor} 0%, ${progressColor} ${percent}, ${endColor} ${percent}, ${endColor} 100%)`;
      return progressBar;
    }
    return render();
  }

  randomColor():string {
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return randomColor;
  }

  setContributions(c:Citizen):string {
    let d:string;
    if (c.descriptionOverride) {
      d = `<span>${c.description}</span>`;
    } else {
      if (typeof c.contrib2.amount === 'undefined') {
        d = `
          <span>${c.contrib1.amount > 0 ? '+' : ''}${c.contrib1.amount} <img src="img/${c.contrib1.name}.png"> ${c.contrib1.mod} </span>
        `;
      } else {
        d = `
          <span>${c.contrib1.amount > 0 ? '+' : ''}${c.contrib1.amount} <img src="img/${c.contrib1.name}.png"> ${c.contrib1.mod}, </span>
          <span>${c.contrib2.amount > 0 ? '+' : ''}${c.contrib2.amount} <img src="img/${c.contrib2.name}.png"> ${c.contrib2.mod}</span>
        `;
      }
    }
    return d;
  }

  showBuilding(building:string, buildings:Collection<Building>):void {
    buildings.get(building).visible = true;
    let elt = this.elt('[data-building="' + building + '"]');
    elt.setAttribute('data-visible', 'true');
  }

  showCitizen(citizen:string, citizens:Collection<Citizen>):void {
    citizens.get(citizen).visible = true;
    let elt = this.elt('.citizen-' + citizen);
    elt.setAttribute('data-visible', 'true');
  }

  showWonder(wonder:string, wonders:Collection<Wonder>):void {
    wonders.get(wonder).visible = true;
    let elt = this.elt('[data-building="' + wonder + '"]');
    elt.setAttribute('data-visible', 'true');
  }

  time(d:number):string {
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);
    return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
  }

  unlockBuilding(building:string, buildings:Collection<Building>):void {
    buildings.get(building).enabled = true;
    let elt = this.elt('[data-building="' + building + '"]');
    elt.setAttribute('data-enabled', 'true');
  }

  unlockCitizen(citizen:string, citizens:Collection<Citizen>):void {
    citizens.get(citizen).enabled = true;
    let elt = this.elt('.citizen-' + citizen);
    elt.setAttribute('data-enabled', 'true');
  }

  unlockResource(resource:string, resources:Collection<Resource>):void {
    // NOTES: this needs to be streamlined~
    resources.get(resource).unlocked = true;
    let elt = this.elt('[data-resource="' + resource + '"]');
    elt.setAttribute('data-unlocked', true);
  }

  unlockWonder(wonder:string, wonders:Collection<Wonder>):void {
    wonders.get(wonder).enabled = true;
    let elt = this.elt('[data-wonder="' + wonder + '"]');
    elt.setAttribute('data-enabled', true);
  }

}

export = Utils;
