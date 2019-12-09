const Stdout = require('../../../../../../src/DesignPatterns/Behavioral/ChainOfResponsibility/LogHandler/Stdout');

describe('Log stdout handler', () => {
    test('should log with Stdout config enable', () => {
        const logConfigMock = ['stdout'];
        const logHandler = new Stdout(logConfigMock);
        expect(logHandler.handle()).toBe('logging to stdout\n');
    });

    test('should not log with stdout config disable', () => {
        const logConfigMock = ['file'];
        const logHandler = new Stdout(logConfigMock);
        expect(logHandler.handle()).toBe('');
    });
});