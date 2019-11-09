const Handler = require('./Handler');

module.exports = class Stdout extends Handler {
    handle() {
        let response = '';
        if (this.config.indexOf('stdout') > -1) {
            response = 'logging to stdout\n';
        }
        if (typeof this.parent !== 'undefined') {
            response = `${response}${this.parent.handle()}`;
        }
        return response;
    }
}