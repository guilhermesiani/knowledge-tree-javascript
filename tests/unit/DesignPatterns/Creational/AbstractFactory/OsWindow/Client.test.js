const Client = require('../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Client');
const WindowsFactory = require('../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Windows/Factory');
const LinuxFactory = require('../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Linux/Factory');

jest.mock('../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Windows/Factory');
jest.mock('../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Linux/Factory');

test('Client should create Windows window style', () => {
    WindowsFactory.mockImplementation(() => {
        return {
            makeButton: jest.fn(),
            makeMenu: jest.fn()
        }
    });
    const windowsFactory = new WindowsFactory;
    windowsFactory.makeButton.mockReturnValue({
        name: 'Windows Button'
    });
    windowsFactory.makeMenu.mockReturnValue({
        name: 'Windows Menu'
    });
    const client = new Client(windowsFactory);
    expect(client.createWindow()).toEqual('Using Windows Menu and Windows Button');
    expect(windowsFactory.makeButton).toHaveBeenCalledTimes(1);
    expect(windowsFactory.makeMenu).toHaveBeenCalledTimes(1);
});

test('Client should create Linux window style', () => {
    LinuxFactory.mockImplementation(() => {
        return {
            makeButton: jest.fn(),
            makeMenu: jest.fn()
        }
    });
    const linuxFactory = new LinuxFactory;
    linuxFactory.makeButton.mockReturnValue({
        name: 'Linux Button'
    });
    linuxFactory.makeMenu.mockReturnValue({
        name: 'Linux Menu'
    });
    const client = new Client(linuxFactory);
    expect(client.createWindow()).toEqual('Using Linux Menu and Linux Button');
    expect(linuxFactory.makeButton).toHaveBeenCalledTimes(1);
    expect(linuxFactory.makeMenu).toHaveBeenCalledTimes(1);
});