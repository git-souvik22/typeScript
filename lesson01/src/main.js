var Box = /** @class */ (function () {
    function Box(initialContent) {
        this.content = initialContent;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    ;
    Box.prototype.setContent = function (newContent) {
        this.content = newContent;
    };
    ;
    return Box;
}());
var numberBox = new Box(20);
console.log(numberBox.getContent());
numberBox.setContent(100);
console.log(numberBox.getContent());
