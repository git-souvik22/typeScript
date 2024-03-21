// ---------------------------------------------------------------
function uniqueDataTypesFunc(item, defaultValue) {
    return [item, defaultValue];
}
;
var dog1 = uniqueDataTypesFunc({ name: "Goldy", breed: "Golden retriever" }, { name: "Tommy", breed: "Labrador" });
console.log(dog1);
