import { ExportThis } from "/classExport";

class Car {
    static carCounter = 0;
    make = "";
    model = "";
    year = "";
    color = "";
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        Car.increment();
    }

    static increment() {
        Car.carCounter++;
    }

    get printName() {
        return this.make;
    }
    get printModel() {
        return this.model;
    }
    get printYear() {
        return this.year;
    }
    get printColor() {
        return this.color;
    }

    set setName(make) {
        this.make = make;
    }
    set setModel(model) {
        this.model = model;
    }
    set setYear(year) {
        this.year = year;
    }
    set setColor(color) {
        this.color = color;
    }
}

let obj = new Car("Toyota", "Hybrid", "2015", "red");
let obj1 = new Car("SUbaru", "Hybrid", "2018", "black");
let obj2 = new Car("Honda", "Hybrid", "2022", "white");
console.log(Car.carCounter);

// class Animal{
//     legs;
//     constructor(legs){
//         this.legs = legs;
//     }

//     get getLegs(){
//         return this.legs;
//     }

//     set setLegs(legs){
//         this.legs = legs;
//     }
// }

// class Bird extends Animal{
//     static count = 0;
//     name;
//     doesFly;
//     constructor(name,legs,value){
//         Bird.count++;
//         super(legs);
//         this.name = name;
//         this.doesFly = value;
//     }
//     fly(){
//         if(this.doesFly){
//             console.log(`yes ${this.name} flies and has ${this.legs} legs.`);
//         }
//         else{
//             console.log(`no ${this.name} does not fly and has ${this.legs} legs.`);
//         }
//     }
//     set setBird(legs){
//         super.setLegs = legs;
//     }
// }

// let pigeon = new Bird("pigeon",2,true);
// pigeon.fly();
// let chicken = new Bird("chicken",5,false);
// chicken.setBird = 2;
// chicken.fly();
// //checking count of Birds
// console.log(Bird.count);

// function Car(make, model) {
//     if (new.target === Car) {
//         console.log("A new instance of Car is being created.");
//         console.log(new.target.name);
//         this.make = make;
//         this.model = model;
//     } else {
//         console.log("Car must be instantiated with the new keyword.");
//         return new Car(make, model);
//     }
// }

// const car1 = new Car("Toyota", "Camry");
// // Output: A new instance of Car is being created.

// const car2 = new Car("Honda", "Accord");
// // Output: Car must be instantiated with the new keyword.
// // A new instance of Car is being created.

// class Circle {
//     #radius = 0;
//     constructor(radius) {
//         this.radius = radius;
//     }
//     get area() {
//         return Math.PI * Math.pow(this.radius, 2);
//     }
//     set radius(value) {
//         if (typeof value === "number" && value > 0) {
//             this.#radius = value;
//         } else {
//             throw "The radius must be a positive number";
//         }
//     }
//     get radius() {
//         return this.#radius;
//     }
//     static hasRadius(circle) {
//         return #radius in circle;
//     }
// }

// let circle = new Circle(10);

// console.log(Circle.hasRadius(circle));

// const ssn = Symbol('ssn');
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     [ssn]: '123-345-789'
// };

// const kv = Object.entries(person);

// console.log(kv);

// let value1 = null;
// let value2 = null;
// let value3 = "woof";
// let value4 = "meow";
// let value5 = value1 ?? value2 ?? value3 ?? value4;
// console.log(value5);

// const obj = {
//     name: "dummy",
//     func: function () {
//         console.log(this.name);
//     },
// };

// const obj2 = {
//     name: "abdullah",
// };

// obj.func.apply(obj2);

// obj = new ExportThis("abdullah", "bashir");
