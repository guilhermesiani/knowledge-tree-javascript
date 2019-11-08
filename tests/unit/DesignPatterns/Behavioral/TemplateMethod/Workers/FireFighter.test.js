const FireFighter = require('../../../../../../src/DesignPatterns/Behavioral/TemplateMethod/Workers/FireFighter');

describe('FireFighthers', () => {
    it('should get daily routine', async () => {
        const worker = new FireFighter;
        expect(worker.getDailyRoutine())
            .toBe('wake up, put out some fires and finally I relax');
    });
});