class Circle {
    constructor(x, y) {
        this.x = x, this.y = y;
    }
    clone() {
        return new Circle(this.x, this.y);
    }
}


module.exports = Circle;