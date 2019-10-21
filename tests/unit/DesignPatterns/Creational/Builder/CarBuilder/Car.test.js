const Car = require('../../../../../../src/DesignPatterns/Creational/Builder/CarBuilder/Car');

test('test Car instance', () => {
    const car = new Car;
    car.model = 'Chevrolet';
    expect(car.model).toEqual('Chevrolet');
});