interface Utilities {
  abbrevNum: (number:any, decPlaces:number) => string;
  capitalize: (string:string) => string;
  choose: (arr:any[]) => any;
  dasherize: (string:string) => string;
  getTimeViaNumber: (time:number) => string;
  uuid: () => string;
}

export function abbrevNum(formattedNumber:any, decPlaces:number = 2):string {
  decPlaces = Math.pow(10, decPlaces);
  const abbrev = [ 'K', 'M', 'B', 'T', 'Q', 'Qt', 'S', 'St', 'O', 'N', 'D' ];
  for (let i = abbrev.length - 1; i >= 0; i--) {
      let size = Math.pow(10,(i+1)*3);
      if (size <= formattedNumber) {
           formattedNumber = Math.round(formattedNumber * decPlaces/size) / decPlaces;
           if((formattedNumber == 1000) && (i < abbrev.length - 1)) {
               formattedNumber = 1;
               i++;
           }
           formattedNumber += abbrev[i];
           break;
      }
  }
  return formattedNumber;
}

export function capitalize(string:string):string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function choose(arr:any[]):any {
  return arr[Math.floor(Math.random()*arr.length)];
}

export function dasherize(string:string):string {
  return string.trim().replace(/([A-Z])/g, '$1').replace(/[-_\s]+/g, '-').toLowerCase();
}

export function getTimeViaNumber(time:number):string {
  const h = Math.floor(time / 3600);
  const m = Math.floor(time % 3600 / 60);
  const s = Math.floor(time % 3600 % 60);
  return ((h > 0 ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s);
}

export function uuid():string {
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4';
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = '-';
  const uuid = s.join('');
  return uuid;
}

export let Utilities:Utilities = {
  abbrevNum,
  capitalize,
  choose,
  dasherize,
  getTimeViaNumber,
  uuid,
}
