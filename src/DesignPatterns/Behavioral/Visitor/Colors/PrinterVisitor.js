const Red = require('./Red');

module.exports = class PrinterVisitor {
    visit(color) {
        if (color instanceof Red) {
            console.log(color.eye());
            return;
        }
        console.log(color.sky());
    }
}