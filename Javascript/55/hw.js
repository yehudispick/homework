const dayOfweek = (function(){
    'use strict';
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
    return{
        getDayName: function(index){
            return days[index -1];
        },
        getDayNumber: function(name){
            for(let i =0; i<days.length; i++){
                if(name===days[i]){
                    return i+1;
                }
            }
            return 'Invalid entry';   
        }
    };
})();

console.log(dayOfweek.getDayName(2));
console.log(dayOfweek.getDayNumber('Monday'));


const intrestCalculator=(function(){
    'use strict';
    let rate;
    let years;
    return{
        setRate: function(r){
            return  rate =r;
        },
        setYears: function(y){
            return years =y;
        },
        calculateIntrest: function(principal){
            return principal*(1 +((rate/100)*years));
        }
    };

})();

console.log(intrestCalculator.setRate(3.875));
console.log(intrestCalculator.setYears(5));
console.log(intrestCalculator.calculateIntrest(10000));
