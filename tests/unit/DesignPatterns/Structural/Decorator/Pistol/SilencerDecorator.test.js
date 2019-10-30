const SilencerDecorator = require('../../../../../../src/DesignPatterns/Structural/Decorator/Pistol/SilencerDecorator');
const Pistol = require('../../../../../../src/DesignPatterns/Structural/Decorator/Pistol/Pistol');
const AimDecorator = require('../../../../../../src/DesignPatterns/Structural/Decorator/Pistol/AimDecorator');

jest.mock('../../../../../../src/DesignPatterns/Structural/Decorator/Pistol/Pistol');
jest.mock('../../../../../../src/DesignPatterns/Structural/Decorator/Pistol/AimDecorator');

test('Pistol silencer decorator should shoot', () => {
    Pistol.mockImplementation(() => {
        return { shoot: jest.fn() }
    });
    const pistol = new Pistol;
    pistol.shoot.mockReturnValue('Shooted');
    const silencerDecorator = new SilencerDecorator(pistol);
    expect(silencerDecorator.shoot()).toEqual('Shooted with silencer');
    expect(pistol.shoot).toHaveBeenCalledTimes(1);
});

test('Pistol silencer with aim decorator should shoot', () => {
    AimDecorator.mockImplementation(() => {
        return { shoot: jest.fn() }
    });
    const aimDecorator = new AimDecorator;
    aimDecorator.shoot.mockReturnValue('Shooted with aim');
    const silencerDecorator = new SilencerDecorator(aimDecorator);
    expect(silencerDecorator.shoot()).toEqual('Shooted with aim with silencer');
    expect(aimDecorator.shoot).toHaveBeenCalledTimes(1);
});