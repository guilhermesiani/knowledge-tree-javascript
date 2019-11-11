const SuperSayan = require('../../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/SuperSayan.js');

describe('Goku normal style', () => {
    test('should have strengh three hundred thousand', async () => {
        const normal = new SuperSayan;
        expect(normal.getStrength()).toBe(300000);
    });

    test('should have Super Kamehame Ha as special', async () => {
        const normal = new SuperSayan;
        expect(normal.special()).toBe('Super Kamehame Ha');
    });
});