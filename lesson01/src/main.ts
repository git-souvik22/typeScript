function printNumber(item: number, defaultValue: number): [number, number] {
    return [item, defaultValue];
}

const num = printNumber(12, 20);

console.log(num);