const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const btn = document.getElementById("btn")!;
const result = document.getElementById("result")!;

function add(n1: number, n2: number) {
    return n1 + n2;
}

btn.addEventListener("click", function () {
    console.log(add(+num1.value, +num2.value));
    result.innerHTML = "" + add(+num1.value, +num2.value)
});
