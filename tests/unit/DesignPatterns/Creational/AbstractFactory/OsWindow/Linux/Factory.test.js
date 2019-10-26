const LinuxFactory = require('../../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Linux/Factory');
const LinuxButton = require('../../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Linux/Button');
const LinuxMenu = require('../../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Linux/Menu');

test('Make button should return Linux style', () => {
    const factory = new LinuxFactory;
    expect(factory.makeButton()).toBeInstanceOf(LinuxButton);
});

test('Make menu should return Linux style', () => {
    const factory = new LinuxFactory;
    expect(factory.makeMenu()).toBeInstanceOf(LinuxMenu);
});