interface MathOperation {
    (x: number, y: number): number
}

const add: MathOperation = (a, b) => a + b;
console.log(add(2, 2));