// SL - nice, also much harder to follow without proper indentation
window.app = window.app || {};

window.app.counter = (function (theModule) {
    'use strict';
    let counter = 0;

    // SL - nice, I see you really like arrow functions.
    theModule.increment = () =>
        counter += 1;
    theModule.currentCount = () =>
        counter;

    return theModule;
}
)(window.app.Utils || {});