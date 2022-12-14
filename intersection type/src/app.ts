let cl = console.log;
// type x = number | string;
// type y = number | string[];

interface Igreet {
    name: string,
    greet(phrase: string): void
}

class Person implements Igreet {
    age: number;
    name: string;
    constructor(age: number, n: string) {
        this.age = age;
        this.name = n
    }
    greet(phrase: string): void {
        cl(`${phrase} ${this.name}`)
    }
}

let c1 = new Person(45, "sadsad")
cl(c1)

c1.greet("dddsfddsfsd")



type Empl = {
    name: string;
    age: number;
}
type Admin = {
    name: string;
    privilages: string[]
}

type ElevetedEmp = Empl & Admin;

let e1: ElevetedEmp;

e1 = {
    name: "sdfsdf",
    age: 45,
    privilages: []
}

cl(e1)

// TypeCasting =>

const info = document.getElementById("info")! as HTMLInputElement

info.value = "asfdsf"

// abstract class Department {
//     private empArray: string[] = [];
//     constructor(public dName: string, protected readonly dId: string) {

//     }
//     abstract describe(): void
//     // describe() {
//     //     cl(`This is department ${this.dName} and ID is ${this.dId}`)
//     // }
//     addEmployee(emp: string) {
//         this.empArray.push(emp);
//     }
//     printNoOfEmp() {
//         cl(`Number of employees are ${this.empArray.length}`)
//     }
//     static createEmp(empname: string) {
//         return { name: empname }
//     }

// }

// class AccountingDepat extends Department {
//     static instance: AccountingDepat;
//     describe(): void {
//     }
//     private lastReport: string
//     private constructor(dId: string, private accountingReport: string[]) {
//         super("Accounting", dId)
//         this.lastReport = accountingReport[accountingReport.length - 1]
//     }
//     static getInstance(id: string) {
//         // return this.instance = new AccountingDepat(id, [])
//         if (AccountingDepat.instance) {
//             return this.instance
//         } else {
//             this.instance = new AccountingDepat(id, []);
//             return this.instance
//         }
//     }
//     get accessLastReport() {
//         if (this.lastReport) {
//             return (this.lastReport)
//         } else {
//             throw new Error("No report is available")
//         }
//     }
//     set accessLastReport(val: string) {
//         if (!val) {
//             throw new Error("plz provide a proper vlue")
//         } else {
//             this.accountingReport[this.accountingReport.length - 1] = val;
//             this.lastReport = val;
//         }
//     }
//     // addReport(report: string) {
//     //     this.accountingReport.push(report)
//     // }

//     // describe() {
//     //     cl("accounting reports")
//     // }
// }

// let acc = AccountingDepat.getInstance("d-210")
// let acc1 = AccountingDepat.getInstance("d-21444")
// let acc3 = AccountingDepat.getInstance("d-288888888888888884")

// cl(acc);
// cl(acc1);
// cl(acc3);

