module.exports = class Stdout {
    constructor(conf) {
        this.conf = conf;
    }

    handle() {
        if (this.conf.indexOf('stdout') > -1) {
            return 'logging to stdout';
        }
        return;
    }
}