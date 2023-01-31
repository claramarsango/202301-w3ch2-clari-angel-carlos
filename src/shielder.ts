import { Character } from "./character.js";
import { Fighter } from "./fighter.js";
export class Shielder extends Character {
  servesTo;
  pelotism;
  constructor(
    name: string,
    family: string,
    age: number,
    pelotismLevel: number,
    servesTo: Character
  ) {
    super(name, family, age);
    this.pelotism = this.filterPelotism(pelotismLevel);
    if (servesTo instanceof Fighter) {
      this.servesTo = servesTo;
    }
  }
  filterPelotism(pelotismLevel: number) {
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
