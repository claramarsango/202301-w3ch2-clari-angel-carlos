import { Character } from "./character.js";
export class Fighter extends Character {
    constructor(name, family, age, weapon, skillLevel) {
        super(name, family, age);
        this.weapon = weapon;
        this.skill = this.filterSkill(skillLevel);
    }
    filterSkill(skillLevel) {
        if (skillLevel < 0) {
            return 0;
        }
        if (skillLevel > 10) {
            return 10;
        }
        return skillLevel;
    }
    communicate() {
        return `${super.communicate()}Primero pego y luego pregunto`;
    }
}
