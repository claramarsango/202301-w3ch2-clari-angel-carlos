"use strict";
import { King } from "./king";
import { Fighter } from "./fighter";
import { Advisor } from "./advisor";
import { Shielder } from "./shielder";

const joffrey = new King("Joffrey", "Baratheon", 16, 2);
const jaime = new Fighter("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Fighter("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Advisor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Shielder("Bronn", "AguasNegras", 54, 0, jaime);
