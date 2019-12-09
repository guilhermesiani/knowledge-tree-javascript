const Warrior = require('../../../../../../src/DesignPatterns/Creational/Builder/RpgCharacter/Warrior');
const Sword = require('../../../../../../src/DesignPatterns/Creational/Builder/RpgCharacter/Weapons/Sword');
const IronClothe = require('../../../../../../src/DesignPatterns/Creational/Builder/RpgCharacter/Armors/IronClothe');

jest.mock('../../../../../../src/DesignPatterns/Creational/Builder/RpgCharacter/Weapons/Sword');
jest.mock('../../../../../../src/DesignPatterns/Creational/Builder/RpgCharacter/Armors/IronClothe');

describe('Testing RPG Character', () => {
    test('Given a name should ge same as constructor arg', () => {
        const warrior = new Warrior('Ruth Molin');
        expect(warrior.name).toEqual('Ruth Molin');
    });

    test('Should have 100 of life', () => {
        const warrior = new Warrior('Ruth Molin');
        expect(warrior.life).toEqual(100);
    });

    test('Attack should return damage caused', () => {
        Sword.mockImplementation(() => {
            return {
                get damage() {
                    return 64;
                }
            }
        });
        const warrior = new Warrior('Ruth Molin');
        expect(warrior.attack()).toEqual('Caused 1 of damage');
        warrior.weapon = new Sword;
        expect(warrior.attack()).toEqual('Caused 64 of damage');
    });

    test('Receive damage should be protected by armor', () => {
        IronClothe.mockImplementation(() => {
            return {
                get defense() {
                    return 80;
                },
                receiveDamage: jest.fn()
            }
        });
        const warrior = new Warrior('Ruth Molin');
        warrior.receiveDamage(3);
        expect(warrior.life).toEqual(97);
        const armor = new IronClothe;
        warrior.armor = armor;
        warrior.receiveDamage(90);
        expect(warrior.life).toEqual(87);
        expect(armor.receiveDamage).toHaveBeenCalledWith(10);
        expect(armor.receiveDamage).toHaveBeenCalledTimes(1);
    });

    test('Receive damage more then defense shoud lost armor', () => {
        IronClothe.mockImplementation(() => {
            return {
                get defense() {
                    return 60;
                },
                receiveDamage: jest.fn()
            }
        });
        const warrior = new Warrior('Ruth Molin');
        const armor = new IronClothe;
        warrior.armor = armor;
        warrior.receiveDamage(55);
        expect(warrior.life).toEqual(100);
        expect(armor.receiveDamage).toHaveBeenCalledWith(1);
        expect(armor.receiveDamage).toHaveBeenCalledTimes(1);
    });
});