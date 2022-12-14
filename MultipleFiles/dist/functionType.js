"use strict";
// Function Type =>
// let cl = console.log;
const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mul = (n1, n2) => n1 * n2;
const div = (n1, n2) => n1 / n2;
const calc = (n1, n2, cb) => {
    return cb(n1, n2);
};
cl(calc(30, 20, add));
cl(calc(30, 20, sub));
cl(calc(30, 20, mul));
cl(calc(40, 20, div));
