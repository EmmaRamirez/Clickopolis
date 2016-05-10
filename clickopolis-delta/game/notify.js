"use strict";
function notify(message) {
    // TODO: create settimeout
    var note = document.createElement('p');
    note.setAttribute('class', 'notification');
    note.textContent = message;
    document.body.appendChild(note);
}
module.exports = notify;
//# sourceMappingURL=notify.js.map