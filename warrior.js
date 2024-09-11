Character = require('/character.js');

class Warrior extends Character {
    constructor(name, level, speed, attackPower, weapon) {
        super(name, level, speed, attackPower)
        this.weapon = weapon;
    }

    // Methods
    useWeapon() {
        return `The warrior attacks with a ${this.weapon}`
    }
}