const IronClothe = require('../../../../../../../src/DesignPatterns/Creational/Builder/RpgCharacter/Armors/IronClothe');

test('Should get name', () => {
    const armor = new IronClothe(100);
    expect(armor.name).toEqual('Iron Clothe');
});

test('Should get defense with 95', () => {
    const armor = new IronClothe(100);
    expect(armor.defense).toEqual(95);
});

test('Should get durability same as passed on constructor arg', () => {
    const armor = new IronClothe(98);
    expect(armor.durability).toEqual(98);
});

test('Should thrown an error on define invalid durability', () => {
    expect(() => new IronClothe(102)).toThrowError(
        'Durability of IronClothe must be more than 0 and less than 101' // More than 100
    );
});

test('Should receive damage subtracting durability', () => {
    const armor = new IronClothe(98);
    armor.receiveDamage(15);
    expect(armor.durability).toEqual(83);
});