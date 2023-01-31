export class Character {
  alive;
  series;
  name;
  family;
  age;
  constructor(name: string, family: string, age: number) {
    this.alive = true;
    this.series = "Juego de Tronos";
    this.name = name;
    this.family = family;
    this.age = age;
  }
  communicate() {
    return `${this.name} says: `;
  }
  die() {
    this.alive = false;
  }
}
