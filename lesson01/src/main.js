var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(first, last) {
        this.first = first;
        this.last = last;
    }
    Person.prototype.getName = function () {
        return "Name: ".concat(this.first, " ").concat(this.last, ", Age: ").concat(this.age);
    };
    return Person;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(first, last, age) {
        var _this = _super.call(this, first, last) || this;
        _this.age = age;
        return _this;
    }
    return Human;
}(Person));
var souvik = new Human("Souvik", "Roy", 22);
console.log(souvik);
