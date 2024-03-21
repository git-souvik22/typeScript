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
function uniqueDataTypesFunc<Type>(item: Type, defaultValue: Type): [Type, Type] {
    return [item, defaultValue];
};

const res = uniqueDataTypesFunc<number>(10, 20);
console.log(res);