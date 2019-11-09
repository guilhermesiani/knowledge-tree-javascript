module.exports = class Handler {
    constructor(config, parent) {
        this.config = config;
        this.parent = parent;
    }

    handle() {
        let response = '';
        if (this.config.indexOf(this.name) > -1) {
            response = this.message;
        }
        if (typeof this.parent !== 'undefined') {
            response = `${response}${this.parent.handle()}`;
        }
        return response;
    }
}