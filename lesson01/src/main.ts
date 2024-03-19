class myClass {
    private _myproperty: number = 0;

    get myproperty(): number {
        return this._myproperty;
    };

    set myproperty(value: number) {
        this._myproperty = value;
    }
}

const myInstance = new myClass();

console.log(`Current value is: ${myInstance.myproperty}`);

myInstance.myproperty = 10;

console.log(`Current value is: ${myInstance.myproperty}`);