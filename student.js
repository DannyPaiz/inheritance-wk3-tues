class Student {
    constructor(name, level) {
        super(name);
        this.level = level;
    }

    study() {
        return `${this.name} is studying for ${this.level} exams.`
    }
}