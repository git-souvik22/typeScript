interface Computer {
    name: string,
    ram: number,
    hdd: number,
}

const computerInterface: Computer = {
    name: "Asus Zenfone 15",
    ram: 12,
    hdd: 256,
}

console.log(computerInterface.name);
console.log(computerInterface.ram);
console.log(computerInterface.hdd);