module.exports = class EnjuredBatman {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    notifyAll() {
        this.observers.map(observer => observer.notify());
    }
}