const Handler = require('./Handler');

module.exports = class File extends Handler {
    get name() {
        return 'file';
    }

    get message() {
        return 'logging to a file\n';
    }
}