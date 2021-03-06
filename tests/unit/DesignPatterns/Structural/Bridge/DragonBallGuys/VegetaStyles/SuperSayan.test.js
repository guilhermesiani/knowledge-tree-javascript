const SuperSayan = require('../../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/VegetaStyles/SuperSayan.js');

describe('Vegeta normal style', () => {
    test('should have strengh two hundred and seventy thousand', () => {
        const normal = new SuperSayan;
        expect(normal.getStrength()).toBe(270000);
    });

    test('should have Big Bang as special', () => {
        const normal = new SuperSayan;
        expect(normal.special()).toBe('Big Bang');
    });
});