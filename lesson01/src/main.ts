
// ---------------------------------------------------------------
function uniqueDataTypesFunc<Type>(item: Type, defaultValue: Type): [Type, Type] {
    return [item, defaultValue];
};

interface Dog {
    name: string,
    breed: string,
}

const dog1 = uniqueDataTypesFunc<Dog>({ name: "Goldy", breed: "Golden retriever" }, { name: "Tommy", breed: "Labrador" });

console.log(dog1);