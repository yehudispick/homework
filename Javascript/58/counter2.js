window.app = window.app || {};

window.app.counter2 = (function (theModule) {
    'use strict';

    // SL - comment - and another arrow function!
    theModule.createCounter = () => {
        let counter = 0;

        return {
            // SL - comment - but not in here...
            increment: function () {
                counter += 1;
            },
            currentCount: function () {
                return counter;
            }
        };
    };
    return theModule;
}
)(window.app.Utils || {});


// SL - comment - I would try to be consistent with arrow functions, have a convention for when you use them and when you dont
// personally, I use them mostly when creating a short quick one time use function typically as a callback, and not much otherwise
// unless perhaps indicated by need to get a different "this" as we have seen in class (but ot yet really seen a need for, we will soon)
// you may prefer to always use them, thats fine too, just be consistent (and keep in mind the issues with "this")