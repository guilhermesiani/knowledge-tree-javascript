const LegacyPerson = require('../../../../../../src/DesignPatterns/Structural/Adapter/Person/LegacyPerson');

describe('Legacy Person', () => {
    test('should get first name', () => {
        const person = new LegacyPerson('Carl', 'Sagan');
        expect(person.getFirstName()).toEqual('Carl');
    });

    test('should get last name', () => {
        const person = new LegacyPerson('Carl', 'Sagan');
        expect(person.getLastName()).toEqual('Sagan');
    });
});