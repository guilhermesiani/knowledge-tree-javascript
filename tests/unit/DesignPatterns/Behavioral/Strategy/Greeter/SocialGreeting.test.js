const SocialGreeting = require('../../../../../../src/DesignPatterns/Behavioral/Strategy/Greeter/SocialGreeting');

test('Social greeting', () => {
    expect(SocialGreeting()).toEqual('Hello, Guilherme.');
});