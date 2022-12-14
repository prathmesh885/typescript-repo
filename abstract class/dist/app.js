"use strict";
let cl = console.log;
class Department {
    constructor(dName, dId) {
        this.dName = dName;
        this.dId = dId;
        this.empArray = [];
    }
    // describe() {
    //     cl(`This is department ${this.dName} and ID is ${this.dId}`)
    // }
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
    describe() {
    }
    constructor(dId, accountingReport) {
        super("Accounting", dId);
        this.accountingReport = accountingReport;
        this.lastReport = accountingReport[accountingReport.length - 1];
    }
    static getInstance(id) {
        // return this.instance = new AccountingDepat(id, [])
        if (AccountingDepat.instance) {
            return this.instance;
        }
        else {
            this.instance = new AccountingDepat(id, []);
            return this.instance;
        }
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
}
let acc = AccountingDepat.getInstance("d-210");
let acc1 = AccountingDepat.getInstance("d-21444");
let acc3 = AccountingDepat.getInstance("d-288888888888888884");
cl(acc);
cl(acc1);
cl(acc3);
//# sourceMappingURL=app.js.map