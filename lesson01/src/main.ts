// function tsFunc(par1: number) {
//     return par1 + 1;
// }

// const res = tsFunc(3);

// console.log(res);

// arrow function

// const addone = (num: number) => num + 1;

// const response = addone(5);
// console.log(response);

// function printMessage(message: string): void {
//     console.log(`This is my ${message}`);
// };

// printMessage("text");

// const numbs: any[] = [1, 2, true, "souvik"];
// console.log(numbs);

type User = {
    name: string;
    age: number;
    location: string
}

const printUser = (user: User) => {
    return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`;
};

const res = printUser({ name: "Souvik", age: 22, location: "Krishnagar" });

console.log(res);