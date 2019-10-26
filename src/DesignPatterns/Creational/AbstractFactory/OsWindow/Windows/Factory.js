const Button = require('./Button');
const Menu = require('./Menu');

module.exports = class Factory {
    makeButton() {
        return new Button;
    }

    makeMenu() {
        return new Menu;
    }
}