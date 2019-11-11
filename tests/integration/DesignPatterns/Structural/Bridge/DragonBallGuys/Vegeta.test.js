const Vegeta = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/Vegeta');
const Normal = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/VegetaStyles/Normal.js');
const SuperSayan = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/VegetaStyles/SuperSayan');
const SuperSayan2 = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/VegetaStyles/SuperSayan2');

describe('Vegeta', () => {
    test('should attack with kamehame ha in normal style', async () => {
        const vegeta = new Vegeta(new Normal);
        expect(vegeta.specialAttack()).toBe('Vegeta attacking with Galick Gun');
    });

    test('should have strength one thousand in normal style', async() => {
        const vegeta = new Vegeta(new Normal);
        expect(vegeta.getStrength()).toBe(900);
    });

    test('should attack with kamehame ha in super sayan style', async () => {
        const vegeta = new Vegeta(new SuperSayan);
        expect(vegeta.specialAttack()).toBe('Vegeta attacking with Big Bang');
    });

    test('should have strength three hundred thousand in super sayan style', async() => {
        const vegeta = new Vegeta(new SuperSayan);
        expect(vegeta.getStrength()).toBe(270000);
    });

    test('should attack with genki dama in super sayan style', async () => {
        const vegeta = new Vegeta(new SuperSayan2);
        expect(vegeta.specialAttack()).toBe('Vegeta attacking with Final Flash');
    });

    test('should have strength nine millions in super sayan 2 style', async() => {
        const vegeta = new Vegeta(new SuperSayan2);
        expect(vegeta.getStrength()).toBe(8000000);
    });
});