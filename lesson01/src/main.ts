const password: string | number = 22;

type UserInfo = {
    first: string,
    last: string,
    age: number
}

type AccountDetails = {
    email: string,
    password: string
}

const user: UserInfo | AccountDetails = {
    email: "souvik@gmail.com",
    password: "1234567898"
}

const items: (number | string)[] = [1, 2, 3, 4, 5, 6, "souvik"]
console.log(items)