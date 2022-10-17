/* eslint-disable prefer-const */
import { doble } from './tools.js';
let x;
x = 3;
x = null;
if (x)
    console.log(doble(x));
// Inferencia de tipos
let z = 92;
// z = 'Pepe' ERROR
// Sin inferencia
// let y: number = 92; Error en ESLiNt
// MALA PRÁCTICA : TIPO ANY
let w;
w = 45;
w = 'Pepe';
