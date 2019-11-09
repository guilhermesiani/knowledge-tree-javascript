const Handler = require('./Handler');

module.exports = class SomeClient extends Handler {
    handle() {
        let response = '';
        if (this.config.indexOf('some-client') > -1) {
            response = 'logging to some-client\n';
        }
        if (typeof this.parent !== 'undefined') {
            response = `${response}${this.parent.handle()}`;
        }
        return response;
    }
}