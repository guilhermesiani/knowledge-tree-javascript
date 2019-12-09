module.exports = class PersonAdapter {
    constructor(person) {
        this.person = person;
    }

    getFullName() {
        return `${this.person.getFirstName()} ${this.person.getLastName()}`;
    }
}