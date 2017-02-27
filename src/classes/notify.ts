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

let prevNoteMessage;

export function notify(note:Note, isWindowActive:boolean = true):void {
  if (prevNoteMessage !== note.message) {
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

        notification.innerHTML = `<div class='notification-message'>${note.message}</div>`;
        if (typeof note.icon !== 'undefined') {
          notification.innerHTML += `<div class='notification-image'><img src='img/${note.icon}.png'></div>`;
        }
        notification.innerHTML += '<br><span class="dismiss">Click to Dimiss</span>';
        notification.style.backgroundColor = note.color;
        notification.setAttribute('style', note.css);
        document.body.appendChild(notification);
        // setTimeout(function () {
        //   notification.className = 'notification hidden';
        // }, note.time);
        notification.addEventListener('click', () => {
          notification.className = 'notification dismissal-animation';
          setTimeout(function () {
            notification.remove();
          }, 500);
        });
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

    prevNoteMessage = note.message;
  }
}
