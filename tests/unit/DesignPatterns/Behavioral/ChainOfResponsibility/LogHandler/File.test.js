const File = require('../../../../../../src/DesignPatterns/Behavioral/ChainOfResponsibility/LogHandler/File');
const Stdout = require('../../../../../../src/DesignPatterns/Behavioral/ChainOfResponsibility/LogHandler/Stdout');

jest.mock('../../../../../../src/DesignPatterns/Behavioral/ChainOfResponsibility/LogHandler/Stdout');

describe('Log file handler', () => {
    test('should log with file config enable', () => {
        const logConfigMock = ['file'];
        const logHandler = new File(logConfigMock);
        expect(logHandler.handle()).toBe('logging to a file\n');
    });

    test('should not log with file config disable', () => {
        const logConfigMock = ['stdout'];
        const logHandler = new File(logConfigMock);
        expect(logHandler.handle()).toBe('');
    });

    test('should handle by other handler based on config', () => {
        // Mock stdout log handler
        Stdout.mockImplementation(() => {
            return {
                handle: jest.fn()
            }
        });
        const stdoutLogHandler = new Stdout;
        stdoutLogHandler.handle.mockReturnValue('logging to stdout\n');
        
        const logConfigMock = ['stdout'];
        const logHandler = new File(logConfigMock, stdoutLogHandler);
        expect(logHandler.handle()).toBe('logging to stdout\n');
        expect(stdoutLogHandler.handle).toHaveBeenCalledTimes(1);
    });

    test('should handle file handler and other handler based on config', () => {
        // Mock stdout log handler
        Stdout.mockImplementation(() => {
            return {
                handle: jest.fn()
            }
        });
        const stdoutLogHandler = new Stdout;
        stdoutLogHandler.handle.mockReturnValue('logging to stdout\n');
        
        const logConfigMock = ['stdout', 'file'];
        const logHandler = new File(logConfigMock, stdoutLogHandler);
        expect(logHandler.handle()).toBe('logging to a file\nlogging to stdout\n');
        expect(stdoutLogHandler.handle).toHaveBeenCalledTimes(1);
    });
});