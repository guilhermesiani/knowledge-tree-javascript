const Alfred = require('../../../../../../../src/DesignPatterns/Behavioral/Observer/EnjuredBatman/Observers/Alfred');

// Mock console.log
global.console = {
    log: jest.fn()
}

describe('Alfred', () => {
    test('should notify', () => {
        const alfred = new Alfred;
        alfred.notify();
        expect(global.console.log)
            .toHaveBeenCalledWith('Automatic call for help');
    });
});