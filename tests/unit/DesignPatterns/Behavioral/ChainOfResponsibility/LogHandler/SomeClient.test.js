const SomeClient = require('../../../../../../src/DesignPatterns/Behavioral/ChainOfResponsibility/LogHandler/SomeClient');

describe('Log some client handler', () => {
    test('should log with some-client config enable', async () => {
        const logConfigMock = ['some-client'];
        const logHandler = new SomeClient(logConfigMock);
        expect(logHandler.handle()).toBe('logging to some-client');
    });

    test('should not log with some client config disable', async () => {
        const logConfigMock = ['stdout'];
        const logHandler = new SomeClient(logConfigMock);
        expect(logHandler.handle()).toBeUndefined();
    });
});