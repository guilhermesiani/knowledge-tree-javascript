const Handler = require('./Handler');

module.exports = class File extends Handler {
    handle() {
        let response = '';
        if (this.config.indexOf('file') > -1) {
            response = 'logging to a file\n';
        }
        if (typeof this.parent !== 'undefined') {
            response = `${response}${this.parent.handle()}`;
        }
        return response;
    }
}