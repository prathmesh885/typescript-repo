let cl = console.log;

class Department {
    private empArray: string[] = [];
    constructor(public dName: string, protected readonly dId: string) {

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

class AccountingDepat extends Department {

    constructor(public dName: string, readonly dId: string, private accountingReport: string[]) {
        super(dName, dId)
    }
    addReport(report: string) {
        this.accountingReport.push(report)
    }
    describe() {
        cl("accounting reports")
    }
}

let accounting = new AccountingDepat("Accounting", 'D-210', [])
accounting.addEmployee("casc"),
    accounting.addEmployee("asds")
accounting.addReport("tds")

cl(accounting);
cl(accounting.dName);
cl(accounting.dId);
accounting.describe();










