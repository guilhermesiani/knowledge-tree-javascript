const Warrior = require('./Warrior');
const IronClothe = require('./Armors/IronClothe');
const Sword = require('./Weapons/Sword');

let warrior = null;

module.exports = class Builder {
    buildWarrior(name) {
        warrior = new Warrior(name);
    }

    buildArmor(durability) {
        warrior.armor = new IronClothe(durability);
    }

    buildWeapon(durability) {
        warrior.weapon = new Sword(durability);
    }

    getWarrior() {
        return warrior;
    }
}