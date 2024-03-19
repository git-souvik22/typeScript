var Person = /** @class */ (function () {
    function Person(first, last) {
        this.first = first;
        this.last = last;
    }
    Person.prototype.getName = function () {
        return "".concat(this.first, " ").concat(this.last);
    };
    return Person;
}());
var person1 = new Person("John", "Doe");
console.log(person1.getName());
