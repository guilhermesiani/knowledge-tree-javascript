const Worker = require('./Worker');

module.exports = class FireFighter extends Worker {
    work() {
        return 'put out some fires';
    }
}