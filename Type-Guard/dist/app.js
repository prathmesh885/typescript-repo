"use strict";
let cl = console.log;
function movingAnimal(animal) {
    if ("flyingSpedd" in animal) {
        cl(`flyingSpeed of animal ${animal.flyingSpedd}`);
    }
    if ("runningSpeed" in animal) {
        cl(`runningSpeed of animal ${animal.runningSpeed}`);
    }
}
let an1 = {
    flyingSpedd: 653
};
let an2 = {
    runningSpeed: 468
};
movingAnimal(an1);
movingAnimal(an2);
//# sourceMappingURL=app.js.map