import { Character } from "./character.js";
export class Advisor extends Character {
    constructor(name, family, age, advised) {
        super(name, family, age);
        if (advised instanceof Character) {
            this.advised = advised;
        }
    }
    communicate() {
        return `${super.communicate()}No sé por qué, pero creo que voy a morir pronto`;
    }
}
