window.app = window.app|| {};

window.app.counter2 = (function (theModule){
    'use strict';
        
        
        theModule.createCounter=()=>{
            theModule.numInstances = (theModule.numInstances || 0) + 1;
            let counter =0;
            
            return{
                increment: function (){
                    counter+=1;
                },
                currentCount:function(){
                 return counter;
                }
            };   
        };
        return theModule;
        }
    )(window.app.Utils || {});