const Factory = require('../../../../../../src/DesignPatterns/Creational/FactoryMethod/Animal/Factory');
const Cat = require('../../../../../../src/DesignPatterns/Creational/FactoryMethod/Animal/Cat');
const Dog = require('../../../../../../src/DesignPatterns/Creational/FactoryMethod/Animal/Dog');

test('make Cat instance', async () => {
    const factory = new Factory;
    expect(factory.makeCat()).toBeInstanceOf(Cat);
});

test('make Dog instance', async () => {
    const factory = new Factory;
    expect(factory.makeDog()).toBeInstanceOf(Dog);
});