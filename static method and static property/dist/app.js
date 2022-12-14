"use strict";
let cl = console.log;
// Static Method/ Property => that can be direcly call on class
// Eg. =>
//  Math.PI()
// Math.random()
// Array.from(), Array.of() 
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
    static createEmp(empname) {
        return { name: empname };
    }
}
class AccountingDepat extends Department {
    constructor(dName, dId, accountingReport) {
        super(dName, dId);
        this.dName = dName;
        this.dId = dId;
        this.accountingReport = accountingReport;
        this.lastReport = accountingReport[accountingReport.length - 1];
    }
    get accessLastReport() {
        if (this.lastReport) {
            return (this.lastReport);
        }
        else {
            throw new Error("No report is available");
        }
    }
    set accessLastReport(val) {
        if (!val) {
            throw new Error("plz provide a proper vlue");
        }
        else {
            this.accountingReport[this.accountingReport.length - 1] = val;
            this.lastReport = val;
        }
    }
    addReport(report) {
        this.accountingReport.push(report);
    }
    describe() {
        cl("accounting reports");
    }
}
let accounting = new AccountingDepat("Accounting", 'D-210', ["Form -16"]);
accounting.addEmployee("casc"),
    accounting.addEmployee("asds");
accounting.addReport("tds");
cl(accounting);
cl(accounting.dName);
cl(accounting.dId);
accounting.describe();
cl(accounting.accessLastReport);
accounting.accessLastReport = "TDS";
cl(accounting);
cl(Department.createEmp("xyz"));
cl(AccountingDepat.createEmp("adsfs"));
// new Department() =>then  call constructor
//# sourceMappingURL=app.js.map