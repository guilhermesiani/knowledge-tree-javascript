const SuperSayan2 = require('../../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/SuperSayan2.js');

describe('Goku normal style', () => {
    test('should have strengh nine millions', async () => {
        const normal = new SuperSayan2;
        expect(normal.getStrength()).toBe(9000000);
    });

    test('should have Genki Dama as special', async () => {
        const normal = new SuperSayan2;
        expect(normal.special()).toBe('Genki Dama');
    });
});