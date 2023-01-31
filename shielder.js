import { Character } from './src/character.js';
import { Fighter } from './src/figther.js';
export class Shielder extends Character {
    constructor(name, family, age, pelotismLevel, servesTo) {
        super(name, family, age);
        this.pelotism = this.filterPelotism(pelotismLevel);
        if (servesTo instanceof Fighter) {
            this.servesTo = servesTo;
        }
    }
    filterPelotism(pelotismLevel) {
        if (pelotismLevel < 0) {
            return 0;
        }
        if (pelotismLevel > 10) {
            return 10;
        }
        return pelotismLevel;
    }
    communicate() {
        return `${super.communicate()}Soy un loser`;
    }
}
