function filterArray(array, condition) {
    return array.filter(function (item) { return condition(item); });
}
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = filterArray(numberArray, function (num) { return num % 2 === 0; });
console.log(evenNumbers);
var stringArr = ["apple", "banana", "cherry", "date"];
var shortWords = filterArray(stringArr, function (word) { return word.length < 6; });
console.log(shortWords);
