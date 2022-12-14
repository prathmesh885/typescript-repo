"use strict";
let cl = console.log;
let obj = {
    fname: "xyz",
    lname: "abc",
    age: 45,
    contact: 2413543545,
    email: "abc123@gmail.com",
    address: "lane Node. 1, goregao east, Mumbai",
    child: {
        fname: "xyz",
        lname: "abc",
        age: 45,
        contact: 2413543545,
        email: "abc123@gmail.com",
        address: "lane Node. 1, goregao east, Mumbai",
    }
};
let newObj = {
    fname: "xyz",
    lname: "abc",
    age: 45,
    contact: 2413543545,
    email: "abc123@gmail.com",
    address: "lane Node. 1, goregao east, Mumbai",
    child: {
        fname: "xyz",
        lname: "abc",
        age: 45,
        contact: 2413543545,
        email: "abc123@gmail.com",
        address: "lane Node. 1, goregao east, Mumbai",
    }
};
// fetch api =>
let baseUrl = "https://jsonplaceholder.typicode.com/posts";
// fetch(baseUrl).then(res => res.json()).then(cl).catch(err => cl(err))
// 1) post =>
// fetch(baseUrl, {
//     method: "GET",
//     body: body,
//     headers: {
//         "content-type": "application/json"
//     }
// }).then(res => res.json()).then(cl).catch(err => cl(err))
// Ajax =>
// let xhr = new XMLHttpRequest();
// xhr.open("GET", baseUrl, true);
// xhr.onload = function () {
//     cl(xhr.response);
// }
// xhr.send();
