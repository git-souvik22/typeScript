function filterArray(array, condition) {
    return array.filter(function (item) { return condition(item); });
}
;
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = filterArray(numberArray, function (num) { return num % 2 === 0; });
console.log(evenNumbers);
var stringArray = ["apple", "banana", "cherry", "date"];
var shortwords = filterArray(stringArray, function (word) { return word.length < 6; });
console.log(shortwords);
;
var fruitArray = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" }
];
var redFruits = filterArray(fruitArray, function (fruit) { return fruit.color === "Red"; });
console.log(redFruits);
