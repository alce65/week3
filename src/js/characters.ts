import { King } from './king';

const characters = [
    new King('Joffrey', 'BaraTheon', 54, 4),
    new King('Pepe', 'Pepes', 54, 4),
];

characters[0].friend = characters[1];

console.log(characters);
