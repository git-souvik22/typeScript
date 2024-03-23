class Dog {
    bark(): void {
        console.log("Whow Whow!");
    }
}

class Cat {
    meaw(): void {
        console.log("Mew Maw!");
    }
}

function animalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meaw();
    };
}

const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog);
animalSound(myCat);