const FriendlyGreeting = require('../../../../../../src/DesignPatterns/Behavioral/Strategy/Greeter/FriendlyGreeting');

test('Friendly greeting', () => {
    expect(FriendlyGreeting()).toEqual('Heey, man! What`s up?');
});