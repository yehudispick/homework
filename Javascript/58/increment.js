for(let i=0; i<10; i++){
    window.app.counter.increment();
}

let secondModule1 =window.app.counter2.createCounter();
console.log(window.app.counter2.numInstances);
for (let i =0; i<5; i++){
    secondModule1.increment();
}

let secondModule2 =window.app.counter2.createCounter();
console.log(window.app.counter2.numInstances);
for(let i=0;i<15;i++){
    secondModule2.increment();
}

console.log(window.app.counter.currentCount());
console.log(secondModule1.currentCount());
console.log(secondModule2.currentCount());

window.app.counter2.createCounter();
window.app.counter2.createCounter();
console.log(window.app.counter2.numInstances);





