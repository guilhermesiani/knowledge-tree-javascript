const Red = require('./Red');

module.exports = class CounterVisitor {
    constructor() {
        this.reds = 0;
        this.blues = 0;
    }

    visit(color) {
        if (color instanceof Red) {
            this.reds++;
            return;
        }
        this.blues++;
    }

    report() {
        return `Reds ${this.reds}, Blues ${this.blues}\n`;
    }
}