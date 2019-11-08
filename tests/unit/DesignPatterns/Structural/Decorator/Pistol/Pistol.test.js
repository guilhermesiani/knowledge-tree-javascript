const Pistol = require('../../../../../../src/DesignPatterns/Structural/Decorator/Pistol/Pistol');

test('Pistol should shoot', async () => {
    const pistol = new Pistol;
    expect(pistol.shoot()).toEqual('Shooted');
});