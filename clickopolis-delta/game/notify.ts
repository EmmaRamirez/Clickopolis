function notify(message:string):void {
  // TODO: create settimeout
  let note = document.createElement('p');
  note.className = 'notification';
  
  note.textContent = message;
  document.body.appendChild(note);
}

export = notify;
