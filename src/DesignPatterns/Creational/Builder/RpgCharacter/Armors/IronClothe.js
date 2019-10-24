const name = 'Iron Clothe';
const defense = 95;
let durability = 0;

module.exports = class IronClothe {
    constructor(value) {
        if (value > 100 || value < 0) {
            throw new Error(
                'Durability of IronClothe must be more than 0 and less than 101'
            );
        }
        durability = value;
    }

    get name() {
        return name;
    }

    get defense() {
        return defense;
    }

    get durability() {
        return durability;
    }

    receiveDamage(damage) {
        durability -= damage;
    }
}