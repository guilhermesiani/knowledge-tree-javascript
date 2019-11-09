const Handler = require('./Handler');

module.exports = class Stdout extends Handler {
    handle() {
        if (this.config.indexOf('stdout') > -1) {
            return 'logging to stdout';
        }
        if (typeof this.parent !== 'undefined') {
            return this.parent.handle();
        }
        return;
    }
}