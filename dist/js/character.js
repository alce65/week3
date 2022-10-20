export class Character {
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
        this.friend = null;
    }
    comunique() {
        return this.message;
    }
    death() {
        this.lifeStatus = false;
    }
}
Character.serie = 'GoT';
