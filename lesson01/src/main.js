// function printNumber(item: number, defaultValue: number): [number, number] {
//     return [item, defaultValue];
// }
// function printString(item: string, defaultValue: string): [string, string] {
//     return [item, defaultValue];
// }
// function printBoolean(item: boolean, defaultValue: boolean): [boolean, boolean] {
//     return [item, defaultValue];
// }
// const num = printNumber(12, 20);
// const str = printString("Hello", "World");
// const bool = printBoolean(true, false);
// console.log(num);
// console.log(str);
// console.log(bool);
// ---------------------------------------------------------------
function uniqueDataTypesFunc(item, defaultValue) {
    return [item, defaultValue];
}
;
var num = uniqueDataTypesFunc(10, 20);
var str = uniqueDataTypesFunc("Hello", "World");
console.log(num);
console.log(str);
