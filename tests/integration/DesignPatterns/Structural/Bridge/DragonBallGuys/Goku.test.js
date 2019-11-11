const Goku = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/Goku');
const Normal = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/Normal.js');
const SuperSayan = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/SuperSayan');
const SuperSayan2 = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/SuperSayan2');

describe('Goku', () => {
    test('should attack with kamehame ha in normal style', async () => {
        const goku = new Goku(new Normal);
        expect(goku.specialAttack()).toBe('Goku attacking with Kamehame Ha');
    });

    test('should have strength one thousand in normal style', async() => {
        const goku = new Goku(new Normal);
        expect(goku.getStrength()).toBe(1000);
    });

    test('should attack with kamehame ha in super sayan style', async () => {
        const goku = new Goku(new SuperSayan);
        expect(goku.specialAttack()).toBe('Goku attacking with Super Kamehame Ha');
    });

    test('should have strength three hundred thousand in super sayan style', async() => {
        const goku = new Goku(new SuperSayan);
        expect(goku.getStrength()).toBe(300000);
    });

    test('should attack with genki dama in super sayan style', async () => {
        const goku = new Goku(new SuperSayan2);
        expect(goku.specialAttack()).toBe('Goku attacking with Genki Dama');
    });

    test('should have strength nine millions in super sayan 2 style', async() => {
        const goku = new Goku(new SuperSayan2);
        expect(goku.getStrength()).toBe(9000000);
    });
});