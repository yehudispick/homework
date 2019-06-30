window.myApp = window.myApp|| {};
window.myApp.Utils = (function (theModule){
    'use strict';
        theModule. stringCaseInsensitiveEquals =(string1,string2)=>{
            if(string1.toUpperCase() === string2.toUpperCase()){
                return true;
            }
            return false;
        };
    return theModule;
})(window.myApp.Utils || {});