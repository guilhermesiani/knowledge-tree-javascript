const Pistol = require('../../../../../../src/DesignPatterns/Structural/Decorator/Pistol/Pistol');

test('Pistol should shoot', () => {
    const pistol = new Pistol;
    expect(pistol.shoot()).toEqual('Shooted');
});