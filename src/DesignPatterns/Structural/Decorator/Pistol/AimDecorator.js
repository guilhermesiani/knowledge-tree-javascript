let pistolDecorator;

module.exports = class AimDecorator {
    constructor(pistolDecoratorValue) {
        pistolDecorator = pistolDecoratorValue;
    }

    shoot() {
        return `${pistolDecorator.shoot()} with aim`;
    }
}