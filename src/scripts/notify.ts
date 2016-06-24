function notify(message:string, color:string = '#222', time:number = 5000, css:string = ''):void {
  // TODO: create settimeout
  console.debug('Note was created with message of: ' + message);
  let note = document.createElement('div');
  note.className = 'notification';

  note.innerHTML = message;
  note.style.backgroundColor = color;
  note.setAttribute('style', css);
  document.body.appendChild(note);
  setTimeout(function () {
    note.className = 'notification hidden';
  }, time);

  console.log(note);
}

export = notify;
