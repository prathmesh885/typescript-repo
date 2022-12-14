let cl = console.log;

// Type Inference =>
// If we dclr a property and assign a value to it
// Ts will assign a datatype to that dclr.

let x = 10; //Typeof x >> number

let y: number = 100

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult === true) {
        let result = n1 + n2;
        cl(phrase + result);
    }
    else {
        return n1 + n2;
    }
}

let r = add(200, 300, true, "The addition is ")
cl(r);