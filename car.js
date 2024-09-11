class Car {
    constructor(color, numDoors) {
        this.color = color;
        this.numDoors = numDoors;
    }

    constructor(model) {
        this.color = 'black';
        this.numDoors = 4;
    }

    // return boolean
    compareColor(first, second) {
        if(first === second) return true;
        else return false;
    }

    drive() {
        return `Vroom!`
    }

}