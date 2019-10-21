const Factory = require('../../../../../../src/DesignPatterns/Creational/FactoryMethod/AnimalFactory/Factory');
const Cat = require('../../../../../../src/DesignPatterns/Creational/FactoryMethod/AnimalFactory/Cat');
const Dog = require('../../../../../../src/DesignPatterns/Creational/FactoryMethod/AnimalFactory/Dog');

test('make Cat instance', () => {
    const factory = new Factory;
    expect(factory.makeCat()).toBeInstanceOf(Cat);
});

test('make Dog instance', () => {
    const factory = new Factory;
    expect(factory.makeDog()).toBeInstanceOf(Dog);
});