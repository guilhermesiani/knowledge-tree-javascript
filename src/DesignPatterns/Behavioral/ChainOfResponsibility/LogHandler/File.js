const Handler = require('./Handler');

module.exports = class File extends Handler {
    handle() {
        if (this.config.indexOf('file') > -1) {
            return 'logging to a file';
        }
        if (typeof this.parent !== 'undefined') {
            return this.parent.handle();
        }
        return;
    }
}