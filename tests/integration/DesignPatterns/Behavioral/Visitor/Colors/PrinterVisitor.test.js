const PrinterVisitor = require('../../../../../../src/DesignPatterns/Behavioral/Visitor/Colors/PrinterVisitor');
const Blue = require('../../../../../../src/DesignPatterns/Behavioral/Visitor/Colors/Blue');
const Red = require('../../../../../../src/DesignPatterns/Behavioral/Visitor/Colors/Red');

// Mock console.log
global.console = {
    log: jest.fn()
}

describe('Printer visitor', () => {
    test('should sum by color', () => {
        const visitor = new PrinterVisitor;
        const colors = [new Blue, new Red, new Blue, new Blue, new Red];
        colors.map(color => color.accept(visitor));
        expect(global.console.log).toHaveBeenNthCalledWith(1, 'Blue::sky');
        expect(global.console.log).toHaveBeenNthCalledWith(2, 'Red::eye');
        expect(global.console.log).toHaveBeenNthCalledWith(3, 'Blue::sky');
        expect(global.console.log).toHaveBeenNthCalledWith(4, 'Blue::sky');
        expect(global.console.log).toHaveBeenNthCalledWith(5, 'Red::eye');
    });
})