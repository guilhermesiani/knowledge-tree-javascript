let osFactory;

module.exports = class Client {
    constructor(osFactoryValue) {
        osFactory = osFactoryValue;
    }

    createWindow() {
        const button = osFactory.makeButton();
        const menu = osFactory.makeMenu();
        return `Using ${menu.name} and ${button.name}`;
    }
}