const WindowsFactory = require('../../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Windows/Factory');
const WindowsButton = require('../../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Windows/Button');
const WindowsMenu = require('../../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Windows/Menu');

test('Make button should return Windows style', async () => {
    const factory = new WindowsFactory;
    expect(factory.makeButton()).toBeInstanceOf(WindowsButton);
});

test('Make menu should return Windows style', async () => {
    const factory = new WindowsFactory;
    expect(factory.makeMenu()).toBeInstanceOf(WindowsMenu);
});