const Red = require('../../../../../../src/DesignPatterns/Behavioral/Visitor/Colors/Red');

describe('Color Red', () => {
    test('should print something about', () => {
        const red = new Red;
        expect(red.eye()).toBe('Red::eye');
    });
});