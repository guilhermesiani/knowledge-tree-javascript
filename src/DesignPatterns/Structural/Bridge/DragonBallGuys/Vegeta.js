module.exports = class Goku {
    constructor(style) {
        this.style = style;
    }

    specialAttack() {
        return `Vegeta attacking with ${this.style.special()}`;
    }

    getStrength() {
        return this.style.getStrength();
    }
}