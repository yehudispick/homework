(function(){ 
    'use strict';

    class Vehicle{
        constructor(color){
            this.color = color;
        }

        go(speed){
            this.speed = speed;
            console.log(`now going at speed ${speed}`);
        }

        print(){
            console.log(this.speed, this.color);
        }
    }

    class Plane extends Vehicle{
        constructor(color){
            super(color);
        }
        
        go(speed){
            this.speed = speed;
            console.log(`now FLYING at speed ${speed}`);
        }
    }

    const car = new Vehicle('Blue');
    car.go(50);
    car.print();

    const jet = new Plane('White');
    jet.go(300);
    jet.print();

}());