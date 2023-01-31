import { Character } from "./character.js";
export class Advisor extends Character {
  advised;
  constructor(name: string, family: string, age: number, advised: Character) {
    super(name, family, age);
    if (advised instanceof Character) {
      this.advised = advised;
    }
  }
  communicate() {
    return `${super.communicate()}No sé por qué, pero creo que voy a morir pronto`;
  }
}
