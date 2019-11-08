module.exports = class Worker {
    getDailyRoutine() {
        return `${this.getUp()}, ${this.work()} and ${this.relax()}`;
    }

    getUp() {
        return 'wake up';
    }

    work() {
        return 'work all day long';
    }

    relax() {
        return 'finally I relax';
    }
}