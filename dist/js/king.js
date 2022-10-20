import { Character } from './character';
export class King extends Character {
    constructor(name, family, age, years) {
        super(name, family, age);
        this.years = years;
        this.message = 'Vais a morir todos';
    }
}
