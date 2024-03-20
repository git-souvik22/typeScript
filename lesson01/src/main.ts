interface MathOperation {
    (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
const substract: MathOperation = (a, b) => a - b;

console.log(add(2, 5));
console.log(substract(10, 7));