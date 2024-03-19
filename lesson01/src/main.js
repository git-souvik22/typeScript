var Person = /** @class */ (function () {
    function Person(first, last) {
        this.first = first;
        this.last = last;
    }
    return Person;
}());
var person1 = new Person("John", "Doe");
console.log(person1.first);
console.log(person1.last);
