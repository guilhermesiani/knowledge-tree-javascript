const SuperSayan2 = require('../../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/VegetaStyles/SuperSayan2.js');

describe('Vegeta normal style', () => {
    test('should have strengh eight millions', () => {
        const normal = new SuperSayan2;
        expect(normal.getStrength()).toBe(8000000);
    });

    test('should have Final Flash as special', () => {
        const normal = new SuperSayan2;
        expect(normal.special()).toBe('Final Flash');
    });
});