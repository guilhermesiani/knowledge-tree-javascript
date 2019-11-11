module.exports = class Goku {
    constructor(style) {
        this.style = style;
    }

    specialAttack() {
        return `Goku attacking with ${this.style.special()}`;
    }

    getStrength() {
        return this.style.getStrength();
    }
}