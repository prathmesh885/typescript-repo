"use strict";
let cl = console.log;
// working on class
// class => It is a blueprint for creating instance/object.
// function Depart(n){
//     this.dName = n  
// }
class Department {
    constructor(departmentName, id) {
        this.dName = departmentName;
        this.dId = id;
    }
    describe() {
        cl(`This is department ${this.dName} and ID is ${this.dId}`);
    }
}
let accounting = new Department("Accounting", 'D-210');
cl(accounting);
cl(accounting.dName);
cl(accounting.dId);
accounting.describe();
//# sourceMappingURL=app.js.map