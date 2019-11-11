module.exports = class Color {
    accept(visitor) {
        visitor.visit(this);
    }
}