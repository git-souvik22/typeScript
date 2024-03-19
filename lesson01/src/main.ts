class Person {
    public first: string;
    public last: string

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last
    }
}

const person1 = new Person("John", "Doe");
console.log(person1.first);
console.log(person1.last);