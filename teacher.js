class Teacher {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    teach() {
        `${this.name} is teaching ${this.department}.`;
    }
}