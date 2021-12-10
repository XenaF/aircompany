const { Plane } = require('./Plane');

class ExperimentalPlane   extends Plane
{

    constructor(options)  {
        super(options);
        this.type = options.type;
        this.classificationLevel = options.classificationLevel;

    }


    getModel()
    {
        return this.model;
    }

    setModel(value) {
        this.model = value;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    setMaxSpeed(value) {
        this.maxSpeed = value;
    }

    getMaxFlightDistance() {
        return this.maxFlightDistance;
    }

    setMaxFlightDistance(value) {
        this.maxFlightDistance = value;
    }

    getMaxLoadCapacity() {
        return this.maxLoadCapacity;
    }

    setMaxLoadCapacity(value) {
        this.maxLoadCapacity = value;
    }

    getType() {
        return this.type;
    }

    setType(value) {
        this.type = value;
    }

    getClassificationLevel() {
        return this.classificationLevel;
    }

    setClassificationLevel(value) {
        this.classificationLevel = value;
    }
}

module.exports = { ExperimentalPlane }