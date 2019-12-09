const PersonAdapter = require('../../../../../../src/DesignPatterns/Structural/Adapter/Person/PersonAdapter');
const LegacyPerson = require('../../../../../../src/DesignPatterns/Structural/Adapter/Person/LegacyPerson');

jest.mock('../../../../../../src/DesignPatterns/Structural/Adapter/Person/LegacyPerson');

describe('Person Adapter', () => {
    test('should get full name', () => {
        LegacyPerson.mockImplementation(() => {
            return {
                getFirstName: jest.fn(),
                getLastName: jest.fn()
            }
        });
        const legacyPerson = new LegacyPerson('Carl', 'Sagan');
        legacyPerson.getFirstName.mockReturnValue('Carl');
        legacyPerson.getLastName.mockReturnValue('Sagan');
        const person = new PersonAdapter(legacyPerson);
        expect(person.getFullName()).toEqual('Carl Sagan');
        expect(legacyPerson.getFirstName).toHaveBeenCalledTimes(1);
        expect(legacyPerson.getLastName).toHaveBeenCalledTimes(1);
    });
});