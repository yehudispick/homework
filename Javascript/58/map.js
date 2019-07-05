// SL - comment - really hard to read without proper indentation
(function () {
    'use strict';
    function mymap(theArray, callback) {
        let newArray = [];
        for (let i = 0; i < theArray.length; i++) {
            newArray[i] = callback(theArray[i]);
        }
        return newArray;
    }
    let numbers = [2, 4, 6];
    let result = mymap(numbers, num => num * 2); // SL - comment - arrow function nice
    console.log(numbers);
    console.log(result);
})();