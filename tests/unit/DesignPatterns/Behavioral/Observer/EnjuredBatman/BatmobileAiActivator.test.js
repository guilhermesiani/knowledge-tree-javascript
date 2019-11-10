const BatmobileAiActivator = require('../../../../../../src/DesignPatterns/Behavioral/Observer/EnjuredBatman/BatmobileAiActivator');

// Mock console.log
global.console = {
    log: jest.fn()
}

describe('Batmobile AI Activator', () => {
    test('should notify', async () => {
        const batmobileAiActivator = new BatmobileAiActivator;
        batmobileAiActivator.notify();
        expect(global.console.log)
            .toHaveBeenCalledWith('Activating Batman rescue mod');
    });
});