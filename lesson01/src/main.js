var myClass = /** @class */ (function () {
    function myClass() {
        this._myProperty = 0;
    }
    Object.defineProperty(myClass.prototype, "myProperty", {
        get: function () {
            return this._myProperty;
        },
        set: function (value) {
            this._myProperty = value;
        },
        enumerable: false,
        configurable: true
    });
    return myClass;
}());
var myInstance = new myClass();
console.log("Current value is: ".concat(myInstance.myProperty));
myInstance.myProperty = 10;
console.log("Current value is: ".concat(myInstance.myProperty));
