var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Whow Whow!");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meaw = function () {
        console.log("Mew Maw!");
    };
    return Cat;
}());
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meaw();
    }
    ;
}
var myDog = new Dog();
var myCat = new Cat();
animalSound(myDog);
animalSound(myCat);
