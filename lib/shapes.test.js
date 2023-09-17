const {Triangle, Circle, Square} = require('../lib/shapes');

describe('ShapesJS', () => {
    // test for triangle
    describe('triangle', () => {
        it('should create a blue triangle svg file')
        // example test provided in challenge instructions
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
    // test for circle
    describe('circle', () => {
        it('should create a green circle svg file')
            const shape = new Circle ();
            shape.setColor("green");
            expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="green" />');
    })
    // test for square
    describe('square', () => {
        it('should create a red square svg file')
            const shape = new Square ();
            shape.setColor("red");
            expect(shape.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill="red" />');
    })
})