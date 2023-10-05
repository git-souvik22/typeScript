let myFullName = "Souvik Roy";
let myFirstName = "Souvik";
let myLastName = "Roy";

myFullName = myFirstName + myLastName;
// console.log(myFullName)

let text: string = "Hi I'm a Mern developer";

let upperCaseText: string = text.toUpperCase();
// console.log(upperCaseText);

let lowerCaseText: string = text.toLowerCase();
// console.log(lowerCaseText);

let longText: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae soluta error nisi ipsa, quia adipisci corporis assumenda, veniam sunt fugit sint ratione, hic vitae laudantium ex quod nihil quasi quaerat!";

let shortText: string = longText.slice(0, 10);
// console.log(shortText);


let str1: string = "Lorem ipsum dolor sit amet consectetur";
let str2: string = "hic vitae laudantium ex quod nihil quasi quaerat!";

let areEqual: boolean = str1 === str2;
console.log(areEqual);

let product: string = "Shirt";
let price: number = 500;

console.log(`The product ${product} is priced at ${price} dollars.`);

function isEven(numb: number): boolean {
    return numb % 2 === 0
}
// console.log(isEven(4));

function isDivisibleBy4and8(num: number): boolean {
    return num % 4 === 0 && num % 8 === 0;
}

console.log(isDivisibleBy4and8(8));
