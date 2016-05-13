function notify(message:string):void {
  // TODO: create settimeout
  let note = document.createElement('div');
  note.className = 'notification';

  note.textContent = message;
  document.body.appendChild(note);
}

export = notify;
