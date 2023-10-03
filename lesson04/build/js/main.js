"use strict";
// literal types
let myName;
let userName;
userName = "MERN";
// function
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello!");
logMsg(add(2, 3));
let substract = function (c, d) {
    return c - d;
};
let multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(2, 2));
