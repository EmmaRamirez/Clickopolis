

interface note {
  message:string;
  year?:number;
  color?:string;
  time?:number;
  css?:string;
  history?:string[];
}

function notify(note:note):void {
  if (typeof note.time === 'undefined') {
    note.time = 2500;
  }
  // TODO: create settimeout
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

  if (typeof history != 'undefined') {
    note.history.push(note.message);
  }
  console.log(note);
}

export = notify;
