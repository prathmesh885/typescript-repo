"use strict";
let cl = console.log;
class Department {
    constructor(dName, dId) {
        this.dName = dName;
        this.dId = dId;
        this.empArray = [];
    }
    describe() {
        cl(`This is department ${this.dName} and ID is ${this.dId}`);
    }
    addEmployee(emp) {
        this.empArray.push(emp);
    }
    printNoOfEmp() {
        cl(`Number of employees are ${this.empArray.length}`);
    }
}
let accounting = new Department("Accounting", 'D-210');
accounting.addEmployee("casc"),
    accounting.addEmployee("asds");
cl(accounting);
// cl(accounting.dName);
// cl(accounting.dId);
// accounting.describe();
//# sourceMappingURL=app.js.map