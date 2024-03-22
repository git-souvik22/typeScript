class Box<T> {
    private content: T;
    constructor(initialContent: T) {
        this.content = initialContent;
    }
    getContent(): T {
        return this.content;
    };
    setContent(newContent: T): void {
        this.content = newContent;
    };
}

const stringBox = new Box<string>("Hello, Typescript");
console.log(stringBox.getContent())
stringBox.setContent("New Value Added");
console.log(stringBox.getContent());