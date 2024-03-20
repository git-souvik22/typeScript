function greet(person) {
    console.log("Hello, ".concat(person.firstName, " ").concat(person.lastName));
    person.sayHello();
}
var john = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    sayHello: function () {
        console.log("Hi There");
    }
};
var souvik = {
    firstName: "Souvik",
    lastName: "Roy",
    age: 22,
    sayHello: function () {
        console.log("Web3 Developer");
    }
};
greet(john);
greet(souvik);
