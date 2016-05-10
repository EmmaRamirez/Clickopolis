function notify(message:string):void {
  // TODO: create settimeout
  let note = document.createElement('p');
  note.setAttribute('class', 'notification');

  note.textContent = message;
  document.body.appendChild(note);
}

export = notify;
