let stringArr = ['one', 'hey', 'Souvik']

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true]

// we cannot add any data of datatype other than string in stringArr.
stringArr[0] = 'Developer';
stringArr.push('fogg');

// we can add only string and numerical datatype to this guitars variable.
guitars[0] = 1984;
guitars.unshift('hey');

let test = [];
let bands: string[] = [];
bands.push("Souvik Roy");

// Tuple
let myTuple: [string, number, boolean] = ["souvik", 22, true];

let mixed = ["developa", 22, false];

myTuple[1] = 12;

// Object

let myObj: object;
myObj = []
// console.log(typeof myObj);
myObj = bands;
myObj = {}

const exampleObj = {
    prop1: "Souvik",
    prop2: 22
}

// we cannot assign data types other than 22
exampleObj.prop2 = 22;

// custom data type
interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Souvik",
    active: false,
    albums: [1984, "SR"]
}

let jp: Guitarist = {
    name: "Developa",
    active: true,
    albums: [1994, "DV"]
}

let greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `hello ${guitarist.name.toUpperCase()}!`
    }
    return 'hello Unknown'
}

// console.log(greetGuitarist(jp));

// enums

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U);
