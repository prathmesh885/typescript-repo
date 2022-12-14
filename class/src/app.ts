let cl = console.log;

// working on class
// class => It is a blueprint for creating instance/object.

// function Depart(n){
//     this.dName = n  
// }

class Department {
    dName: string; //field
    dId: string;

    constructor(departmentName: string, id: string) {
        this.dName = departmentName;
        this.dId = id;
    }
    describe() {
        cl(`This is department ${this.dName} and ID is ${this.dId}`)
    }
}

let accounting = new Department("Accounting", 'D-210')

cl(accounting);
cl(accounting.dName);
cl(accounting.dId);
accounting.describe();










