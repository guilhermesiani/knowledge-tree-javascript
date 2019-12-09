const Blue = require('../../../../../../src/DesignPatterns/Behavioral/Visitor/Colors/Blue');

describe('Color Blue', () => {
    test('should print something about', () => {
        const blue = new Blue;
        expect(blue.sky()).toBe('Blue::sky');
    });
});