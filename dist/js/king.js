import { Character } from './character';
export class King extends Character {
    years;
    constructor(name, family, age, years) {
        super(name, family, age);
        this.years = years;
        this.message = 'Vais a morir todos';
    }
}
