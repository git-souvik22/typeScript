function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1];
}

const reversedPair = reversePair("World", "Hello");
console.log(reversedPair);