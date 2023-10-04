// Type Aliases
type StringOrNumber = string | number;

type StringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: StringOrNumberArray
}

type UserId = StringOrNumber

// literal types

let myName: "souvik";

let userName: "Souvik" | "Developa" | "MERN";

userName = "MERN"

// function

const add = (a: number, b: number): number => {
    return a + b;
}

const logMsg = (message: any): void => {
    console.log(message);
}

// logMsg("hello!")
// logMsg(add(2, 3));

let substract = function (c: number, d: number): number {
    return c - d;
}

// type mathFunction = (a: number, b: number) => number;
interface mathFunction { (a: number, b: number): number }

let multiply: mathFunction = (c, d) => {
    return c * d;
}
// logMsg(multiply(2, 2));

// optional parameters 

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c != "undefined") {
        return a + b + c;
    }
    return a + b;
}

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
}


// logMsg(addAll(2, 2, 4));
// logMsg(addAll(2, 4));
// logMsg(sumAll(2, 4));
// logMsg(sumAll(undefined, 4));

// Rest Parameter

const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr);
}

// logMsg(total(1, 2, 3, 4));

// function definition
function sum(a: number, b: number) {
    return a + b;
}

// function call
console.log(sum(5, 10));