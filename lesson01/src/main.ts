function printNumber(item: number, defaultValue: number): [number, number] {
    return [item, defaultValue];
}

function printString(item: string, defaultValue: string): [string, string] {
    return [item, defaultValue];
}

const num = printNumber(12, 20);
const str = printString("Hello", "World");
console.log(num);
console.log(str);