const Manager = require('../../../../../../src/DesignPatterns/Behavioral/TemplateMethod/Workers/Manager');

describe('FireFighthers', () => {
    it.only('should get daily routine', async () => {
        const worker = new Manager;
        expect(worker.getDailyRoutine())
            .toBe('wake up, contract new employees and finally I play on videogame');
    });
});