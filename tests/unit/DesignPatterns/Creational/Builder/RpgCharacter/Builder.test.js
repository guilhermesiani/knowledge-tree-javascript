const Builder = require('../../../../../../src/DesignPatterns/Creational/Builder/RpgCharacter/Builder');
const Warrior = require('../../../../../../src/DesignPatterns/Creational/Builder/RpgCharacter/Warrior');

test('Test build warrior with weapon and armor', () => {
    const warriorName = 'Nabuco Solimon';

    const builder = new Builder;
    builder.buildWarrior(warriorName);
    builder.buildArmor(43);
    builder.buildWeapon(14);
    const warrior = builder.getWarrior();
    expect(warrior).toBeInstanceOf(Warrior);
    expect(warrior.name).toEqual(warriorName);
    expect(warrior.life).toEqual(100);
    warrior.receiveDamage(110);
    expect(warrior.life).toEqual(85);
    expect(warrior.attack()).toEqual('Caused 64 of damage');
});