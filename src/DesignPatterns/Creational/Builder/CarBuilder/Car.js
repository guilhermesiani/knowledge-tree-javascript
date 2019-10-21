let model; // Private property

module.exports = class Car {
    constructor() {
        model = 'nomodel';
    }
    get model() {
        return model;
    }
    set model(value) {
        model = value;
    }
}