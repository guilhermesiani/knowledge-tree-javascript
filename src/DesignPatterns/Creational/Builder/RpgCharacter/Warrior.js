let name; // Private property
let life = 100; // Private property
let weapon;
let armor;

module.exports = class Warrior {
    constructor(nameValue) {
        name = nameValue;
        life = 100;
        weapon = undefined;
        armor = undefined;
    }

    get name() {
        return name;
    }

    get life() {
        return life;
    }

    set weapon(weaponValue) {
        weapon = weaponValue;
    }

    set armor(armorValue) {
        armor = armorValue;
    }

    attack() {
        if (weapon === undefined) {
            return `Caused 1 of damage`;    
        }
        return `Caused ${weapon.damage} of damage`;
    }

    receiveDamage(damage) {
        if (armor === undefined) {
            life = life - damage;
            return;
        }
        if (damage < armor.defense) {
            armor.receiveDamage(1);
            return;
        }
        damage = damage - armor.defense;
        life = life - damage;
        armor.receiveDamage(damage);
    }
}