// function tsFunc(par1: number) {
//     return par1 + 1;
// }
var printUser = function (user) {
    return "Name: ".concat(user.name, ", Age: ").concat(user.age, ", Location: ").concat(user.location);
};
var res = printUser({ name: "Souvik", age: 22, location: "Krishnagar" });
console.log(res);
