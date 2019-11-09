module.exports = class SomeClient {
    constructor(conf) {
        this.conf = conf;
    }

    handle() {
        if (this.conf.indexOf('some-client') > -1) {
            return 'logging to some-client';
        }
        return;
    }
}