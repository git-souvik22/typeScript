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
console.log(shortText);
let str1 = "Lorem ipsum dolor sit amet consectetur";
let str2 = "hic vitae laudantium ex quod nihil quasi quaerat!";
let areEqual = str1.includes(str2);
console.log(areEqual);
