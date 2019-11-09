const File = require('../../../../../../src/DesignPatterns/Behavioral/ChainOfResponsibility/LogHandler/File');

describe('Log file handler', () => {
    test('should log with file config enable', async () => {
        const logConfigMock = ['file'];
        const logHandler = new File(logConfigMock);
        expect(logHandler.handle()).toBe('logging to a file');
    });

    test('should not log with file config disable', async () => {
        const logConfigMock = ['stdout'];
        const logHandler = new File(logConfigMock);
        expect(logHandler.handle()).toBeUndefined();
    });
});