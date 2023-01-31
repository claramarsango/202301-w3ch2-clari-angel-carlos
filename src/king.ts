import { Character } from './character.js';
export class King extends Character {
  reignYears;
  constructor(name: string, family: string, age: number, reignYears: number) {
    super(name, family, age);
    this.reignYears = reignYears;
  }

  communicate() {
    return `${super.communicate()}Vais a morir todos`;
  }
}
