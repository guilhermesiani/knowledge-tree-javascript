const name = 'Sword';
const damage = 64;
let durability = 0;

module.exports = class Sword {
    constructor(value) {
        if (value > 100 || value < 0) {
            throw new Error(
                'Durability of Sword must be more than 0 and less than 101'
            );
        }
        durability = value;
    }

    get name() {
        return name;
    }

    get damage() {
        return damage;
    }

    get durability() {
        return durability;
    }
}