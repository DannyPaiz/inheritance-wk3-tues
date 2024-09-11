class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    static getAge(vehicle) {
        return `${vehicle.age}`;
    }

    hasFourDoors(vehicle) {
        if(vehicle.numDoors < 4) {
            return false;
        } else return true;
    }
}

