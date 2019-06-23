'use strict';

function myevery(theArray,callback){
    let result =true;
    for(let i=0; i<theArray.length; i++){
        if(!callback(theArray[i])){
        result=false;
        break;
        }
    }
return result;
}
const letters=['a','B','c'];
function isUpperCase(letter){
    if (letter === letter.toUpperCase()){
        return true;
    }
}
const isLowerCase =letter =>{
    if (letter === letter.toLowerCase()){
        return true;
    }
};

console.log('myevery(letters,isUpperCase)' , myevery(letters,isUpperCase));
console.log('every(letters,isUpperCase)' , letters.every(isUpperCase));
console.log('myevery(letters,isLowerCase)' , myevery(letters,letter =>{
    if (letter === letter.toLowerCase()){
        return true;
    }
}));
console.log('every(letters,isLowerCase)' , letters.every(letter =>{
    if (letter === letter.toLowerCase()){
        return true;
    }
}));

function mySome(theArray,callback){
    let result =false;
    for(let i=0; i<theArray.length; i++){
        if(callback(theArray[i])){
        result=true;
        break;
        }
    }
return result;
}
console.log('mySome(letters,isUpperCase)' , mySome(letters,isUpperCase));
console.log('some(letters,isUpperCase)' , letters.some(isUpperCase));
console.log('mySome(letters,isLowerCase)' , mySome(letters,isLowerCase));
console.log('some(letters,isLowerCase)' , letters.some(isLowerCase));

function onlyif(array,test, action){
    for(let i=0; i<array.length; i++){
        if(test(array[i])){
            action(array[i]);
        }
        
    }
    
}
console.log('onlyif(letters,isUpperCase,letter => console.log(letter,"passed"))',onlyif(letters,isUpperCase,letter => console.log(letter,'passed')));
console.log('foreach and filter', letters.filter(isUpperCase).forEach(letter => console.log(letter,'passed')));