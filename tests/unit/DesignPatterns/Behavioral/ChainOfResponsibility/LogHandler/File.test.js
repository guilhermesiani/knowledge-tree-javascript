const File = require('../../../../../../src/DesignPatterns/Behavioral/ChainOfResponsibility/LogHandler/File');
const Stdout = require('../../../../../../src/DesignPatterns/Behavioral/ChainOfResponsibility/LogHandler/Stdout');

jest.mock('../../../../../../src/DesignPatterns/Behavioral/ChainOfResponsibility/LogHandler/Stdout');

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

    test('should handle by other handler based on config', async () => {
        // Mock stdout log handler
        Stdout.mockImplementation(() => {
            return {
                handle: jest.fn()
            }
        });
        const stdoutLogHandler = new Stdout;
        stdoutLogHandler.handle.mockReturnValue('logging to stdout');
        
        const logConfigMock = ['stdout'];
        const logHandler = new File(logConfigMock, stdoutLogHandler);
        expect(logHandler.handle()).toBe('logging to stdout');
        expect(stdoutLogHandler.handle).toHaveBeenCalledTimes(1);
    });
});