function getRandomKeyValuePair(obj) {
    var keys = Object.keys(obj);
    var randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
var stringObject = { a: "apple", b: "banana", c: "cherry" };
var res = getRandomKeyValuePair(stringObject);
console.log(res);
