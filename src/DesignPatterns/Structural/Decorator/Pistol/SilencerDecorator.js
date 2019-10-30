let pistolDecorator;

module.exports = class SilencerDecorator {
    constructor(pistolDecoratorValue) {
        pistolDecorator = pistolDecoratorValue;
    }

    shoot() {
        return `${pistolDecorator.shoot()} with silencer`;
    }
}