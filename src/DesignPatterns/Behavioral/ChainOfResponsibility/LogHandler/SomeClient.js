const Handler = require('./Handler');

module.exports = class SomeClient extends Handler {
    get name() {
        return 'some-client';
    }

    get message() {
        return 'logging to some-client\n';
    }
}