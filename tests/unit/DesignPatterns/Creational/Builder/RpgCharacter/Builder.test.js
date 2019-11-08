const Builder = require('../../../../../../src/DesignPatterns/Creational/Builder/RpgCharacter/Builder');
const Warrior = require('../../../../../../src/DesignPatterns/Creational/Builder/RpgCharacter/Warrior');

test('Test build warrior get instance', async () => {
    const warriorName = 'Nabuco Solimon';

    const builder = new Builder;
    builder.buildWarrior(warriorName);
    const warrior = builder.getWarrior();
    expect(warrior).toBeInstanceOf(Warrior);
    expect(warrior.name).toEqual(warriorName);
});

test('Test build warrior with weapon', async () => {
    const warriorName = 'Nabuco Solimon';

    const builder = new Builder;
    builder.buildWarrior(warriorName);
    builder.buildWeapon(14);
    const warrior = builder.getWarrior();
    expect(warrior.attack()).toEqual('Caused 64 of damage');
});

test('Test build warrior with armor', async () => {
    const warriorName = 'Nabuco Solimon';

    const builder = new Builder;
    builder.buildWarrior(warriorName);
    builder.buildArmor(43);
    const warrior = builder.getWarrior();
    warrior.receiveDamage(110);
    expect(warrior.life).toEqual(85);
});