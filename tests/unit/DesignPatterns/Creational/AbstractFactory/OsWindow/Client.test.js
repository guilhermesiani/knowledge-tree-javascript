const Client = require('../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Client');
const WindowsFactory = require('../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Windows/Factory');
const LinuxFactory = require('../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Linux/Factory');

jest.mock('../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Windows/Factory');
jest.mock('../../../../../../src/DesignPatterns/Creational/AbstractFactory/OsWindow/Linux/Factory');

test('Client should create Windows window style', () => {
    WindowsFactory.mockImplementation(() => {
        return {
            makeButton() {
                return {
                    name: 'Windows Button'
                }
            },
            makeMenu() {
                return {
                    name: 'Windows Menu'
                }
            },
        }
    });
    const client = new Client(new WindowsFactory);
    expect(client.createWindow()).toEqual('Using Windows Menu and Windows Button');
});

// test('Client should create Linux window style', () => {
//     const client = new Client(new LinuxFactory);
//     expect(client.createWindow()).toEqual('Using Linux Menu and Linux Button');
// });