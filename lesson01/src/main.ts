interface Person {
    firstName: string,
    lastName: string,
    age: number,
    sayHello(): void
}

function greet(person: Person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
    person.sayHello();
};

const john: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    sayHello() {
        console.log("Hi There!");
    },
}

const souvik: Person = {
    firstName: "Souvik",
    lastName: "Roy",
    age: 22,
    sayHello() {
        console.log("Web Developer");
    },
}

greet(john);
greet(souvik);