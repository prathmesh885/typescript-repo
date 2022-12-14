
// Function Type =>
// let cl = console.log;

type combine = number | string;
type OperationFun = (n1: number, n2: number) => number

const add: OperationFun = (n1: number, n2: number) => n1 + n2

const sub: OperationFun = (n1: number, n2: number) => n1 - n2

const mul: OperationFun = (n1, n2) => n1 * n2

const div: OperationFun = (n1, n2) => n1 / n2

type calcFun = (n1: number, n2: number, cb: OperationFun) => number;

const calc: calcFun = (n1: number, n2: number, cb: OperationFun) => {
    return cb(n1, n2)
}
cl(calc(30, 20, add))
cl(calc(30, 20, sub))
cl(calc(30, 20, mul))
cl(calc(40, 20, div))
