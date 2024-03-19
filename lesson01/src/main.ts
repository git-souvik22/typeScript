type UserInfo = {
    first: string,
    last: string,
    age: number,
};

type AccountDetails = {
    email: string,
    password: string,
}

type User = UserInfo & AccountDetails;

const souvik: User = {
    first: "Souvik",
    last: "Roy",
    age: 22,
    email: "souvik@gmail.com",
    password: "123456789"
};

console.log(`Name: ${souvik.first} ${souvik.last}, Age: ${souvik.age}, Email: ${souvik.email}, Password: ${souvik.password}`);
