"use strict";
function notify(message, color) {
    if (color === void 0) { color = '#222'; }
    // TODO: create settimeout
    var note = document.createElement('div');
    note.className = 'notification';
    note.textContent = message;
    note.style.backgroundColor = color;
    document.body.appendChild(note);
    setTimeout(function () {
        note.className = 'notification hidden';
    }, 2500);
}
module.exports = notify;
//# sourceMappingURL=notify.js.map