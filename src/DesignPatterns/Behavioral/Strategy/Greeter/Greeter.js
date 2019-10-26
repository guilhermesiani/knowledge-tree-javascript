let strategy;

module.exports = class Greeter {
    constructor(strategyValue) {
        strategy = strategyValue;
    }

    greet() {
        return strategy();
    }
}