export class Character {
    name;
    family;
    age;
    lifeStatus;
    message;
    static serie = 'GoT';
    friend;
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
