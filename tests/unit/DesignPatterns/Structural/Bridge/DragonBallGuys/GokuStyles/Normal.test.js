const Normal = require('../../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/Normal.js');

describe('Goku normal style', () => {
    test('should have strengh one hundred', () => {
        const normal = new Normal;
        expect(normal.getStrength()).toBe(1000);
    });

    test('should have Kamehame Ha as special', () => {
        const normal = new Normal;
        expect(normal.special()).toBe('Kamehame Ha');
    });
});