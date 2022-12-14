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
    private lastReport: string
    constructor(public dName: string, readonly dId: string, private accountingReport: string[]) {
        super(dName, dId)
        this.lastReport = accountingReport[accountingReport.length - 1]
    }
    get accessLastReport() {
        if (this.lastReport) {
            return (this.lastReport)
        } else {
            throw new Error("No report is available")
        }
    }
    set accessLastReport(val: string) {
        if (!val) {
            throw new Error("plz provide a proper vlue")
        } else {
            this.accountingReport[this.accountingReport.length - 1] = val;
            this.lastReport = val;
        }
    }


    addReport(report: string) {
        this.accountingReport.push(report)
    }
    describe() {
        cl("accounting reports")
    }
}

let accounting = new AccountingDepat("Accounting", 'D-210', ["Form -16"])
accounting.addEmployee("casc"),
    accounting.addEmployee("asds")
accounting.addReport("tds")

cl(accounting);
cl(accounting.dName);
cl(accounting.dId);
accounting.describe();


cl(accounting.accessLastReport);
accounting.accessLastReport = "TDS";

cl(accounting);





