window.myApp = window.myApp|| {};

window.myApp.Utils = (function (theModule){
    'use strict';
        const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
        
            theModule.getDayName =(index)=>{
                return days[index -1];
            };
            theModule.getDayNumber = (name)=>{
                for(let i =0; i<days.length; i++){
                    if(name===days[i]){
                        return i+1;
                    }
                }
                return 'Invalid entry';   
            };
            return theModule;
        }
    )(window.myApp.Utils || {});
   
   