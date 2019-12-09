const Sword = require('../../../../../../../src/DesignPatterns/Creational/Builder/RpgCharacter/Weapons/Sword');

test('Should get name', () => {
    const weapon = new Sword(100);
    expect(weapon.name).toEqual('Sword');
});

test('Should get damage with 64', () => {
    const weapon = new Sword(100);
    expect(weapon.damage).toEqual(64);
});

test('Should get durability same as passed on constructor arg', () => {
    const weapon = new Sword(98);
    expect(weapon.durability).toEqual(98);
});

test('Should thrown an error on define invalid durability', () => {
    expect(() => new Sword(102)).toThrowError(
        'Durability of Sword must be more than 0 and less than 101' // More than 100
    );
});