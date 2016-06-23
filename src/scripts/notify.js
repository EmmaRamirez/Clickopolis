"use strict";
function notify(message, color, time) {
    if (color === void 0) { color = '#222'; }
    if (time === void 0) { time = 2500; }
    // TODO: create settimeout
    var note = document.createElement('div');
    note.className = 'notification';
    note.textContent = message;
    note.style.backgroundColor = color;
    document.body.appendChild(note);
    setTimeout(function () {
        note.className = 'notification hidden';
    }, time);
    note.remove();
}
module.exports = notify;
//# sourceMappingURL=notify.js.map