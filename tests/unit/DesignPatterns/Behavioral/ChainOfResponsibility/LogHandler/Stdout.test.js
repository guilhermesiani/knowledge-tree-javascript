const Stdout = require('../../../../../../src/DesignPatterns/Behavioral/ChainOfResponsibility/LogHandler/Stdout');

describe('Log stdout handler', () => {
    test('should log with Stdout config enable', async () => {
        const logConfigMock = ['stdout'];
        const logHandler = new Stdout(logConfigMock);
        expect(logHandler.handle()).toBe('logging to stdout');
    });

    test('should not log with stdout config disable', async () => {
        const logConfigMock = ['file'];
        const logHandler = new Stdout(logConfigMock);
        expect(logHandler.handle()).toBeUndefined();
    });
});