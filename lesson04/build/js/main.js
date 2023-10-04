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
// logMsg("hello!")
// logMsg(add(2, 3));
let substract = function (c, d) {
    return c - d;
};
let multiply = (c, d) => {
    return c * d;
};
// logMsg(multiply(2, 2));
// optional parameters 
const addAll = (a, b, c) => {
    if (typeof c != "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// logMsg(addAll(2, 2, 4));
// logMsg(addAll(2, 4));
// logMsg(sumAll(2, 4));
// logMsg(sumAll(undefined, 4));
// Rest Parameter
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
// logMsg(total(1, 2, 3, 4));
// function definition
const sum = (a, b) => {
    return a + b;
};
// function call
console.log(sum(5, 10));
