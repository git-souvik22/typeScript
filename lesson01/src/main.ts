class Person {
    private first: string;
    private last: string

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last
    }

    getName(): string {
        return `${this.first} ${this.last}`
    }
}

const person1 = new Person("John", "Doe");
console.log(person1.getName());