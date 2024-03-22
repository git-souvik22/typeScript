var Box = /** @class */ (function () {
    function Box(initialContent) {
        this.content = initialContent;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    Box.prototype.setContent = function (newContent) {
        this.content = newContent;
    };
    return Box;
}());
var stringBox = new Box("Hello, TypeScript");
console.log(stringBox.getContent());
