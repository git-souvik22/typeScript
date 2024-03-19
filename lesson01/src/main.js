var myClass = /** @class */ (function () {
    function myClass() {
        this._myproperty = 0;
    }
    Object.defineProperty(myClass.prototype, "myproperty", {
        get: function () {
            return this._myproperty;
        },
        set: function (value) {
            this._myproperty = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return myClass;
}());
var myInstance = new myClass();
console.log("Current value is: ".concat(myInstance.myproperty));
myInstance.myproperty = 10;
console.log("Current value is: ".concat(myInstance.myproperty));
