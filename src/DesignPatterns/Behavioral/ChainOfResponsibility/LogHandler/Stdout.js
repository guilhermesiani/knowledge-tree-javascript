const Handler = require('./Handler');

module.exports = class Stdout extends Handler {
    get name() {
        return 'stdout';
    }

    get message() {
        return 'logging to stdout\n';
    }
}