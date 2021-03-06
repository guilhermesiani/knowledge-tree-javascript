const BatmobileAiActivator = require('../../../../../../../src/DesignPatterns/Behavioral/Observer/EnjuredBatman/Observers/Batmobile');

// Mock console.log
global.console = {
    log: jest.fn()
}

describe('Batmobile AI Activator', () => {
    test('should notify', () => {
        const batmobileAiActivator = new BatmobileAiActivator;
        batmobileAiActivator.notify();
        expect(global.console.log)
            .toHaveBeenCalledWith('Activating Batman rescue mod');
    });
});