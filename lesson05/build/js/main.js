"use strict";
let myFullName = "Souvik Roy";
let myFirstName = "Souvik";
let myLastName = "Roy";
myFullName = myFirstName + myLastName;
// console.log(myFullName)
let text = "Hi I'm a Mern developer";
let upperCaseText = text.toUpperCase();
// console.log(upperCaseText);
let lowerCaseText = text.toLowerCase();
// console.log(lowerCaseText);
let longText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae soluta error nisi ipsa, quia adipisci corporis assumenda, veniam sunt fugit sint ratione, hic vitae laudantium ex quod nihil quasi quaerat!";
let shortText = longText.slice(0, 10);
// console.log(shortText);
let str1 = "Lorem ipsum dolor sit amet consectetur";
let str2 = "hic vitae laudantium ex quod nihil quasi quaerat!";
let areEqual = str1 === str2;
// console.log(areEqual);
let product = "Shirt";
let price = 500;
// console.log(`The product ${product} is priced at ${price} dollars.`);
function isEven(numb) {
    return numb % 2 === 0;
}
// console.log(isEven(4));
function isDivisibleBy4and8(num) {
    return num % 4 === 0 && num % 8 === 0;
}
// console.log(isDivisibleBy4and8(8));
let maxNumber = 9007199254740991n;
// console.log(maxNumber)
let anotherNumber = BigInt("90071992547409915");
console.log(anotherNumber);
let myfavNumber = 2;
myfavNumber = "SR";
myfavNumber = true;
let myFavNumber;
myFavNumber = 2;
myFavNumber = "Souvik";
myFavNumber = true;
if (typeof myFavNumber === "number") {
    console.log(myfavNumber + 8);
}
else if (typeof myFavNumber === "boolean") {
    console.log(myFavNumber);
}
