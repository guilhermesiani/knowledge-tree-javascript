const Worker = require('./Worker');

module.exports = class FireFighter extends Worker {
    work() {
        return 'contract new employees';
    }

    relax() {
        return 'finally I play on videogame';
    }
}