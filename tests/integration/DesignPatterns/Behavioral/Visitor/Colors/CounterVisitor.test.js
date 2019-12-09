const CounterVisitor = require('../../../../../../src/DesignPatterns/Behavioral/Visitor/Colors/CounterVisitor');
const Blue = require('../../../../../../src/DesignPatterns/Behavioral/Visitor/Colors/Blue');
const Red = require('../../../../../../src/DesignPatterns/Behavioral/Visitor/Colors/Red');

describe('Counter visitor', () => {
    test('should sum by color', () => {
        const visitor = new CounterVisitor;
        const colors = [new Blue, new Red, new Blue, new Blue, new Red];
        colors.map(color => color.accept(visitor));
        expect(visitor.report()).toBe('Reds 2, Blues 3\n');
    });
})