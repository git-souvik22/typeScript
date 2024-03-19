type User = {
    name: string;
    age: number;
    email?: string
};

const user: User = {
    name: "Souvik Roy",
    age: 22,
}

console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`);