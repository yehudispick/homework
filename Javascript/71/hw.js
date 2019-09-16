(function(){
    'use strict';

    function Vehicle(color){
        this.color = color;
    }

    Vehicle.prototype.go = function(speed){
        this.speed = speed;
        console.log(`now going at speed ${speed}`);
    };

    Vehicle.prototype.print = function(){
        console.log(this.speed, this.color);
    };

    function Plane(color){
        Vehicle.call(this, color);
    }

    Plane.prototype =Object.create(Vehicle.prototype);

    Plane.prototype.go = function(speed){
        this.speed = speed;
        console.log(`now flying at speed ${this.speed}`);
    };

    const car = new Vehicle('Blue');
    car.go(50);
    car.print();

    const jet = new Plane('White');
    jet.go(300);
    jet.print();
    }());