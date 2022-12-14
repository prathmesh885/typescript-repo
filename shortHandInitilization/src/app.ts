let cl = console.log;

class Department {
    private empArray: string[] = [];
    constructor(public dName: string, private dId: string) {

    }
    describe() {
        cl(`This is department ${this.dName} and ID is ${this.dId}`)
    }
    addEmployee(emp: string) {
        this.empArray.push(emp);
    }
    printNoOfEmp() {
        cl(`Number of employees are ${this.empArray.length}`)
    }
}
let accounting = new Department("Accounting", 'D-210')
accounting.addEmployee("casc"),
    accounting.addEmployee("asds")

cl(accounting);
// cl(accounting.dName);
// cl(accounting.dId);
// accounting.describe();










