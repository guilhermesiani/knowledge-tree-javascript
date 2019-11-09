const Handler = require('./Handler');

module.exports = class SomeClient extends Handler {
    handle() {
        if (this.config.indexOf('some-client') > -1) {
            return 'logging to some-client';
        }
        return;
    }
}