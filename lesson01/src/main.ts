type Employee = {
    id: number,
    name: string,
}

type Manager = {
    department: string,
    role: string,
}

type ManagerWithEmployeeInfo = Employee & Manager;

const manager: ManagerWithEmployeeInfo = {
    id: 2001,
    name: "Souvik Roy",
    department: "TECH",
    role: "Full Stack Developer",
};

console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);