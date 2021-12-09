class Plane {

    constructor(options) {
        this.model = options.model;
        this.maxSpeed = options.maxSpeed;
        this.maxFlightDistance = options.maxFlightDistance;
        this.maxLoadCapacity = options.maxLoadCapacity;
    }

    getModel() {
        return this.model;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    getMaxFlightDistance() {
        return this.maxFlightDistance;
    }

    getMaxLoadCapacity() {
     return this.maxLoadCapacity;
    }
}

module.exports = { Plane }
