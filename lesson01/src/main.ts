class Box<T>{
    private content: T
    constructor(initialContent: T) {
        this.content = initialContent;
    }

    getContent(): T {
        return this.content;
    }

    setContent(newContent: T): void {
        this.content = newContent;
    }
}

const stringBox = new Box<string>("Hello, TypeScript");
console.log(stringBox.getContent());