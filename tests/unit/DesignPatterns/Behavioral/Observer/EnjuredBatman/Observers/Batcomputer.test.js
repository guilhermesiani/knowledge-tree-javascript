const Batcomputer = require('../../../../../../../src/DesignPatterns/Behavioral/Observer/EnjuredBatman/Observers/Batcomputer');

// Mock console.log
global.console = {
    log: jest.fn()
}

describe('Batcomputer', () => {
    test('should notify', async () => {
        const batcomputer = new Batcomputer;
        batcomputer.notify();
        expect(global.console.log)
            .toHaveBeenCalledWith('Updating Batman health status');
    });
});