const Goku = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/Goku');
const Normal = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/Normal.js');
const SuperSayan = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/SuperSayan');
const SuperSayan2 = require('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/SuperSayan2');

jest.mock('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/Normal.js');
jest.mock('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/SuperSayan.js');
jest.mock('../../../../../../src/DesignPatterns/Structural/Bridge/DragonBallGuys/GokuStyles/SuperSayan2.js');

describe('Goku', () => {
    test('should attack with kamehame ha in normal style', () => {
        Normal.mockImplementation(() => {
            return {
                special: jest.fn()
            }
        });
        const normalForm = new Normal;
        normalForm.special.mockReturnValue('Kamehame Ha');
        const goku = new Goku(normalForm);
        expect(goku.specialAttack()).toBe('Goku attacking with Kamehame Ha');
        expect(normalForm.special).toHaveBeenCalledTimes(1);
    });

    test('should have strength one thousand in normal style', async() => {
        Normal.mockImplementation(() => {
            return {
                getStrength: jest.fn()
            }
        });
        const normalForm = new Normal;
        normalForm.getStrength.mockReturnValue(1000);
        const goku = new Goku(normalForm);
        expect(goku.getStrength()).toBe(1000);
        expect(normalForm.getStrength).toHaveBeenCalledTimes(1);
    });

    test('should attack with super kamehame ha in super sayan style', () => {
        SuperSayan.mockImplementation(() => {
            return {
                special: jest.fn()
            }
        });
        const superSayan = new SuperSayan;
        superSayan.special.mockReturnValue('Super Kamehame Ha');
        const goku = new Goku(superSayan);
        expect(goku.specialAttack()).toBe('Goku attacking with Super Kamehame Ha');
        expect(superSayan.special).toHaveBeenCalledTimes(1);
    });

    test('should have strength three hundred thousand in super sayan style', async() => {
        SuperSayan.mockImplementation(() => {
            return {
                getStrength: jest.fn()
            }
        });
        const superSayan = new SuperSayan;
        superSayan.getStrength.mockReturnValue(300000);
        const goku = new Goku(superSayan);
        expect(goku.getStrength()).toBe(300000);
        expect(superSayan.getStrength).toHaveBeenCalledTimes(1);
    });

    test('should attack with genki dama in super sayan style', () => {
        SuperSayan.mockImplementation(() => {
            return {
                special: jest.fn()
            }
        });
        const superSayan = new SuperSayan;
        superSayan.special.mockReturnValue('Genki Dama');
        const goku = new Goku(superSayan);
        expect(goku.specialAttack()).toBe('Goku attacking with Genki Dama');
        expect(superSayan.special).toHaveBeenCalledTimes(1);
    });

    test('should have strength nine millions in super sayan 2 style', async() => {
        SuperSayan2.mockImplementation(() => {
            return {
                getStrength: jest.fn()
            }
        });
        const superSayan2 = new SuperSayan2;
        superSayan2.getStrength.mockReturnValue(9000000);
        const goku = new Goku(superSayan2);
        expect(goku.getStrength()).toBe(9000000);
        expect(superSayan2.getStrength).toHaveBeenCalledTimes(1);
    });
});