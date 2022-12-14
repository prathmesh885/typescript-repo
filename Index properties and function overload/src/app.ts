let cl = console.log;

// TypeGuird =>

// type Empl = { name: string, startDate: Date }
// type Admin = { name: string, previlages: string[] }

// type Manager = Empl & Admin

// // Intersection=>
// let e1: Manager;
// e1 = {
//     name: "sdfdsfs",
//     startDate: new Date(),
//     previlages: []
// }

// // Union =>
// type NewEmpl = Empl | Admin

// let e2: NewEmpl;
// e2 = {
//     name: "sdfdsfs",
//     startDate: new Date(),
//     previlages: []
// }
// // Guard =>

// function printEmplyInfo(e: NewEmpl) {
//     cl(e.name)
//     if ("startDate" in e) {
//         cl(e.startDate);
//     }
//     if ("previlages" in e) {
//         cl(e.previlages)
//     }
// }

// let emply1: Empl = {
//     name: "dsfsdf",
//     startDate: new Date()
// }

// let emply2: Admin = {
//     name: "dsfsdf",
//     previlages: ['fdgreds', 'dfgdf']
// }

// printEmplyInfo(emply2);


// 2 -class =>

// class Car {
//     drive() {
//         cl("drive a car");
//     }
// }

// class Truck {
//     drive() {
//         cl("Drive a truck");
//     }
//     loadCarbo(amount: number) {
//         cl(`load carbo in truck having amount ${amount}`)
//     }
// }

// type Vehichle = Car | Truck

// function usesVehicle(v: Vehichle) {
//     v.drive()
//     if ("loadCarbo" in v) {
//         v.loadCarbo(1111)
//     }
// }
// let c = new Car();
// let t = new Truck();

// usesVehicle(c)
// usesVehicle(t)



// interface =>


interface Ibird {
    flyingSpedd: number;
}

interface Ihorce {
    runningSpeed: number;
}

type Animal = Ibird | Ihorce;

function movingAnimal(animal: Animal) {
    if ("flyingSpedd" in animal) {
        cl(`flyingSpeed of animal ${animal.flyingSpedd}`)
    }
    if ("runningSpeed" in animal) {
        cl(`runningSpeed of animal ${animal.runningSpeed}`)
    }
}

let an1: Ibird = {
    flyingSpedd: 653;
}

let an2: Ihorce = {
    runningSpeed: 468
}

movingAnimal(an1);
movingAnimal(an2);


