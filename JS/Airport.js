const { PassengerPlane } = require('./planes/PassengerPlane');
const { MilitaryPlane } = require('./planes/MilitaryPlane');
const MILITARY_TYPE = require('./models/MilitaryType');
const { ExperimentalPlane } = require('./planes/ExperimentalPlane');
const { printObjectToString } = require('./utils');

class Airport {
    
     getPassengerPlanes() {
        let planesList = this.planes;
        return planesList.filter (el => el instanceof PassengerPlane);
    }


    getMilitaryPlanes() {
        let planesList = this.planes;
        return planesList.filter (el => el instanceof MilitaryPlane);
    }


    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        return passengerPlanes.sort((a, b) => {
         return b.getPassengersCapacity() - a.getPassengersCapacity();
        })[0];
    }

    getTransportMilitaryPlanes() {
       let militaryPlanesArray = this.getMilitaryPlanes();
       return militaryPlanesArray.filter(el => el.getMilitaryType() == MILITARY_TYPE.TRANSPORT);
    }

    getBomberMilitaryPlanes()
    {
        let militaryPlanes = this.getMilitaryPlanes();
        return militaryPlanes.filter (el => el.getMilitaryType() == MILITARY_TYPE.BOMBER);
    }

    constructor(planes) {
        this.planes = planes;
    }

      getExperimentalPlanes() {
        let planesList = this.planes;
        return planesList.filter (el => el instanceof ExperimentalPlane);
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.getMaxFlightDistance() > b.getMaxFlightDistance()) ? 1 : -1);
        return this;
    }


    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed()) ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.getMaxLoadCapacity() > b.getMaxLoadCapacity()) ? 1 : -1);
        return this;
    }

    getPlanes() {
        return this.planes;
    }
}

module.exports = { Airport }
