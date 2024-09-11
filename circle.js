// CIRCLE - SHAPE
Shape = require('/shape.js');

class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius;
    }

    calculateArea() {
        return (3.14 * (Math.pow(this.radius, 2));
    }
}

module.exports = Circle;