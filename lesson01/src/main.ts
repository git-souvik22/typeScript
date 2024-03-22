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

const numberBox = new Box<number>(20);
console.log(numberBox.getContent());
numberBox.setContent(100);
console.log(numberBox.getContent());