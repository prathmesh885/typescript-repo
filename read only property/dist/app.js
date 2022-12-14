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
class AccountingDepat extends Department {
    constructor(dName, dId, accountingReport) {
        super(dName, dId);
        this.dName = dName;
        this.dId = dId;
        this.accountingReport = accountingReport;
    }
    addReport(report) {
        this.accountingReport.push(report);
    }
    describe() {
        cl("accounting reports");
    }
}
let accounting = new AccountingDepat("Accounting", 'D-210', []);
accounting.addEmployee("casc"),
    accounting.addEmployee("asds");
accounting.addReport("tds");
cl(accounting);
cl(accounting.dName);
cl(accounting.dId);
accounting.describe();
//# sourceMappingURL=app.js.map