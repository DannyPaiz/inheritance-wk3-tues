class Bag {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    static company = "Boolean Airways";

    static greet() {
        console.log(`Welcome to ${Bag.company}!`)
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and my employee ID is ${this.id}.`)
    }
}