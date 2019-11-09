module.exports = class File {
    constructor(conf) {
        this.conf = conf;
    }

    handle() {
        if (this.conf.indexOf('file') > -1) {
            return 'logging to a file';
        }
        return;
    }
}