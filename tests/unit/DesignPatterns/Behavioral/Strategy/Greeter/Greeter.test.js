const Greeter = require('../../../../../../src/DesignPatterns/Behavioral/Strategy/Greeter/Greeter');
const FriendlyGreeting = require('../../../../../../src/DesignPatterns/Behavioral/Strategy/Greeter/FriendlyGreeting');
const SocialGreeting = require('../../../../../../src/DesignPatterns/Behavioral/Strategy/Greeter/SocialGreeting');

jest.mock('../../../../../../src/DesignPatterns/Behavioral/Strategy/Greeter/FriendlyGreeting');
jest.mock('../../../../../../src/DesignPatterns/Behavioral/Strategy/Greeter/SocialGreeting');

test('Greeting as different types', async () => {
    let greeting = 'Heey, man! What`s up?';
    FriendlyGreeting.mockImplementation(() => {
        return greeting;
    });
    let greeter = new Greeter(FriendlyGreeting);
    expect(greeter.greet()).toEqual(greeting);

    greeting = 'Hello, Guilherme.';
    SocialGreeting.mockImplementation(() => {
        return greeting;
    });
    greeter = new Greeter(SocialGreeting);
    expect(greeter.greet()).toEqual(greeting);
});