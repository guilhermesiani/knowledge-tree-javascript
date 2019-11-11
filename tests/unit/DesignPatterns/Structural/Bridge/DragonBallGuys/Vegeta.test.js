const Vegeta = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/Vegeta');
const Normal = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/Normal.js');
const SuperSayan = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/SuperSayan');
const SuperSayan2 = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/SuperSayan2');

jest.mock('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/Normal.js');
jest.mock('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/SuperSayan.js');
jest.mock('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/SuperSayan2.js');

describe('Vegeta', () => {
    test('should attack with kamehame ha in normal style', async () => {
        Normal.mockImplementation(() => {
            return {
                special: jest.fn()
            }
        });
        const normalForm = new Normal;
        normalForm.special.mockReturnValue('Galick Gun');
        const vegeta = new Vegeta(normalForm);
        expect(vegeta.specialAttack()).toBe('Vegeta attacking with Galick Gun');
        expect(normalForm.special).toHaveBeenCalledTimes(1);
    });

    test('should have strength one thousand in normal style', async() => {
        Normal.mockImplementation(() => {
            return {
                getStrength: jest.fn()
            }
        });
        const normalForm = new Normal;
        normalForm.getStrength.mockReturnValue(900);
        const vegeta = new Vegeta(normalForm);
        expect(vegeta.getStrength()).toBe(900);
        expect(normalForm.getStrength).toHaveBeenCalledTimes(1);
    });

    test('should attack with super kamehame ha in super sayan style', async () => {
        SuperSayan.mockImplementation(() => {
            return {
                special: jest.fn()
            }
        });
        const superSayan = new SuperSayan;
        superSayan.special.mockReturnValue('Big Bang');
        const vegeta = new Vegeta(superSayan);
        expect(vegeta.specialAttack()).toBe('Vegeta attacking with Big Bang');
        expect(superSayan.special).toHaveBeenCalledTimes(1);
    });

    test('should have strength three hundred thousand in super sayan style', async() => {
        SuperSayan.mockImplementation(() => {
            return {
                getStrength: jest.fn()
            }
        });
        const superSayan = new SuperSayan;
        superSayan.getStrength.mockReturnValue(270000);
        const vegeta = new Vegeta(superSayan);
        expect(vegeta.getStrength()).toBe(270000);
        expect(superSayan.getStrength).toHaveBeenCalledTimes(1);
    });

    test('should attack with genki dama in super sayan style', async () => {
        SuperSayan.mockImplementation(() => {
            return {
                special: jest.fn()
            }
        });
        const superSayan = new SuperSayan;
        superSayan.special.mockReturnValue('Final Flash');
        const vegeta = new Vegeta(superSayan);
        expect(vegeta.specialAttack()).toBe('Vegeta attacking with Final Flash');
        expect(superSayan.special).toHaveBeenCalledTimes(1);
    });

    test('should have strength nine millions in super sayan 2 style', async() => {
        SuperSayan2.mockImplementation(() => {
            return {
                getStrength: jest.fn()
            }
        });
        const superSayan2 = new SuperSayan2;
        superSayan2.getStrength.mockReturnValue(8000000);
        const vegeta = new Vegeta(superSayan2);
        expect(vegeta.getStrength()).toBe(8000000);
        expect(superSayan2.getStrength).toHaveBeenCalledTimes(1);
    });
});