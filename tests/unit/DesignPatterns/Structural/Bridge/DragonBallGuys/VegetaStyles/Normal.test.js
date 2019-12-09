const Normal = require('../../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/VegetaStyles/Normal.js');

describe('Vegeta normal style', () => {
    test('should have strengh 9 hundred', () => {
        const normal = new Normal;
        expect(normal.getStrength()).toBe(900);
    });

    test('should have Galick Gun as special', () => {
        const normal = new Normal;
        expect(normal.special()).toBe('Galick Gun');
    });
});