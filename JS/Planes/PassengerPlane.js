const { Plane }  = require('./Plane');

class PassengerPlane extends Plane {

    constructor(options) {
        super(options);
        this.passengersCapacity = options.passengersCapacity;
    }


    
    getPassengersCapacity() {
        return this.passengersCapacity;
    }
}


module.exports = { PassengerPlane }