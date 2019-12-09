const SomeClient = require('../../../../../../src/DesignPatterns/Behavioral/ChainOfResponsibility/LogHandler/SomeClient');

describe('Log some client handler', () => {
    test('should log with some-client config enable', () => {
        const logConfigMock = ['some-client'];
        const logHandler = new SomeClient(logConfigMock);
        expect(logHandler.handle()).toBe('logging to some-client\n');
    });

    test('should not log with some client config disable', () => {
        const logConfigMock = ['stdout'];
        const logHandler = new SomeClient(logConfigMock);
        expect(logHandler.handle()).toBe('');
    });
});