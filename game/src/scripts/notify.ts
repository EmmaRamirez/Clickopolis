function notify(message:string, color:string = '#222', time:number = 2500):void {
  // TODO: create settimeout
  let note = document.createElement('div');
  note.className = 'notification';

  note.textContent = message;
  note.style.backgroundColor = color;
  document.body.appendChild(note);
  setTimeout(function () {
    note.className = 'notification hidden';
  }, time);
  note.remove();
}

export = notify;
