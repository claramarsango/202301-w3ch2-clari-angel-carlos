import { Character } from './src/character.js';
export class King extends Character {
    constructor(name, family, age, reignYears) {
        super(name, family, age);
        this.reignYears = reignYears;
    }
    communicate() {
        return `${super.communicate()}Vais a morir todos`;
    }
}
