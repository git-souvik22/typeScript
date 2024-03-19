class Person {
    private first: string;
    private last: string;
    protected age: number

    constructor(first: string, last: string, age: number) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    getName(): string {
        return `Name: ${this.first} ${this.last}, Age: ${this.age}`
    }
}

class Human extends Person {
    constructor(first: string, last: string, age: number) {
        super(first, last, age);
    }
}

const souvik = new Human("Souvik", "Roy", 22);
console.log(souvik);