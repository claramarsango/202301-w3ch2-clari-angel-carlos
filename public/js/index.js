import { Character } from './character.js';
import { King } from './king.js';
import { Fighter } from './fighter.js';
import { Advisor } from './advisor.js';
import { Shielder } from './shielder.js';

const joffrey = new King('Joffrey', 'Baratheon', 16, 2);
const jaime = new Fighter('Jaime', 'Lannister', 45, 'Espada', 7);
const daenerys = new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10);
const tyrion = new Advisor('Tyrion', 'Lannister', 40, daenerys);
const bronn = new Shielder('Bronn', 'AguasNegras', 54, 0, jaime);

const gameOfThronesCharacters = [joffrey, jaime, daenerys, tyrion, bronn];
