const {Triangle, Circle, Square} = require('./shapes');

describe('Shape', () => {

    // test for triangle
    describe('triangle', () => {
        it('should create a blue triangle with white text that says SVG', () => {
            const shape = new Triangle();
            expect(shape.render()).toEqual(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
            </svg>
            `);
        })
    });
    // test for circle
    describe('circle', () => {
        it('should create a green circle with white text that says SVG', () => {
            const shape = new Circle ();
            expect(shape.render()).toEqual(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="110" r="90" fill="green"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
            </svg>
            `);
        })
    });
    // test for square
    describe('square', () => {
        it('should create a red square with white text that says SVG', () => {
            const shape = new Square ();
            expect(shape.render()).toEqual(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="100" y="100" width="150" height="150" fill="red"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
            </svg>
            `);
        })
    });
})