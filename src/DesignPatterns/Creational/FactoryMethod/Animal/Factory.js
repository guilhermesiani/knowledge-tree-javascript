const Cat = require('./Cat');
const Dog = require('./Dog');

module.exports = class Factory {
    makeCat() {
        return new Cat;
    }
    makeDog() {
        return new Dog;
    }
}