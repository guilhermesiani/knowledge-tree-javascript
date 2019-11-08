const AimDecorator = require('../../../../../../src/DesignPatterns/Structural/Decorator/Pistol/AimDecorator');
const Pistol = require('../../../../../../src/DesignPatterns/Structural/Decorator/Pistol/Pistol');
const SilencerDecorator = require('../../../../../../src/DesignPatterns/Structural/Decorator/Pistol/SilencerDecorator');

jest.mock('../../../../../../src/DesignPatterns/Structural/Decorator/Pistol/Pistol');
jest.mock('../../../../../../src/DesignPatterns/Structural/Decorator/Pistol/SilencerDecorator');

test('Pistol aim decorator should shoot', () => {
    Pistol.mockImplementation(() => {
        return { shoot: jest.fn() }
    });
    const pistol = new Pistol;
    pistol.shoot.mockReturnValue('Shooted');
    const aimDecorator = new AimDecorator(pistol);
    expect(aimDecorator.shoot()).toEqual('Shooted with aim');
    expect(pistol.shoot).toHaveBeenCalledTimes(1);
});

test('Pistol aim with silencer decorator should shoot', async () => {
    SilencerDecorator.mockImplementation(() => {
        return { shoot: jest.fn() }
    });
    const silencerDecorator = new SilencerDecorator;
    silencerDecorator.shoot.mockReturnValue('Shooted with silencer');
    const aimDecorator = new AimDecorator(silencerDecorator);
    expect(aimDecorator.shoot()).toEqual('Shooted with silencer with aim');
    expect(silencerDecorator.shoot).toHaveBeenCalledTimes(1);
});