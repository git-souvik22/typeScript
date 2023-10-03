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