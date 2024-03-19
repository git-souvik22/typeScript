class Person {
    private first: string;
    private last: string;
    protected age: number

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    getName(): string {
        return `Name: ${this.first} ${this.last}, Age: ${this.age}`
    }
}

class Human extends Person {
    constructor(first: string, last: string, age: number) {
        super(first, last);
        this.age = age;
    }
}

const souvik = new Human("Souvik", "Roy", 22);
console.log(souvik);