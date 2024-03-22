function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item));
};

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers);

const stringArray = ["apple", "banana", "cherry", "date"];
const shortwords = filterArray<string>(stringArray, (word) => word.length < 6);
console.log(shortwords);