const SocialGreeting = require('../../../../../../src/DesignPatterns/Behavioral/Strategy/Greeter/SocialGreeting');

test('Social greeting', async () => {
    expect(SocialGreeting()).toEqual('Hello, Guilherme.');
});