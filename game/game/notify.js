"use strict";
function notify(message) {
    // TODO: create settimeout
    var note = document.createElement('div');
    note.className = 'notification';
    note.textContent = message;
    document.body.appendChild(note);
    setTimeout(function () {
        note.className = 'notification hidden';
    }, 1000);
}
module.exports = notify;
//# sourceMappingURL=notify.js.map