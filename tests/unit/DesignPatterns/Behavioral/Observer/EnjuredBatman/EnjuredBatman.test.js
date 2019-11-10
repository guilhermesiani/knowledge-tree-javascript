const EnjuredBatman = require('../../../../../../../src/DesignPatterns/Behavioral/Observer/EnjuredBatman/EnjuredBatman');
const Alfred = require('../../../../../../../src/DesignPatterns/Behavioral/Observer/EnjuredBatman/Observers/Alfred');
const Batmobile = require('../../../../../../../src/DesignPatterns/Behavioral/Observer/EnjuredBatman/Observers/Batmobile');
const Batcomputer = require('../../../../../../../src/DesignPatterns/Behavioral/Observer/EnjuredBatman/Observers/Batcomputer');

jest.mock('../../../../../../../src/DesignPatterns/Behavioral/Observer/EnjuredBatman/Observers/Alfred');
jest.mock('../../../../../../../src/DesignPatterns/Behavioral/Observer/EnjuredBatman/Observers/Batmobile');
jest.mock('../../../../../../../src/DesignPatterns/Behavioral/Observer/EnjuredBatman/Observers/Batcomputer');

describe('EnjuredBatman', () => {
    test('should notify observers subscribed', async () => {
        Alfred.mockImplementation(() => {
            return { notify: jest.fn() };
        });
        Batmobile.mockImplementation(() => {
            return { notify: jest.fn() };
        });
        Batcomputer.mockImplementation(() => {
            return { notify: jest.fn() };
        });
        const alfredMock = new Alfred;
        const batmobileMock = new Alfred;
        const batcomputerMock = new Alfred;

        const enjuredBatman = new EnjuredBatman;
        enjuredBatman.subscribe(alfredMock);
        enjuredBatman.subscribe(batmobileMock);
        enjuredBatman.subscribe(batcomputerMock);
        enjuredBatman.notifyAll();
        expect(alfredMock.notify).toHaveBeenCalledTimes(1);
        expect(batmobileMock.notify).toHaveBeenCalledTimes(1);
        expect(batcomputerMock.notify).toHaveBeenCalledTimes(1);
    });
});