interface Note {
  message:string;
  icon?: string;
  year?:number;
  color?:string;
  time?:number;
  css?:string;
  history?:string[];
  historyOnly?:boolean;
}

declare var Notification: any;

export function notify(note:Note, isWindowActive:boolean = true):void {
  if (isWindowActive) {
    if (typeof note.time === 'undefined') {
      note.time = 2500;
    }
    if (typeof note.historyOnly === 'undefined') {
      note.historyOnly = false;
    }
    if (!note.historyOnly) {
      console.debug('Note was created with message of: ' + note.message);
      let notification = document.createElement('div');
      notification.className = 'notification';
      notification.innerHTML = note.message;
      notification.style.backgroundColor = note.color;
      notification.setAttribute('style', note.css);
      document.body.appendChild(notification);
      setTimeout(function () {
        notification.className = 'notification hidden';
      }, note.time);
    }
    console.log(note);
  } else {
    let options = {
      body: note.message,
      icon: typeof note.icon !== 'undefined' ? note.icon : '../img/civilization.png',
    }
    if (!('Notification' in window)) {
    } else if (Notification.permission === 'granted') {
      let notification = new Notification('Clickopolis', options)
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === 'granted') {
          let notification = new Notification('Clickopolis', options);
        }
      })
    }
  }
  if (typeof note.history !== 'undefined' && typeof note.year !== 'undefined') {
    note.history.push(`<strong>${note.year}:</strong> note.message`);
  }
}
