var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("Car has started...");
    };
    ;
    Car.prototype.stop = function () {
        console.log("Car has stopped");
    };
    return Car;
}());
var myCar = new Car;
myCar.start();
myCar.stop();
