const { PassengerPlane } = require('./planes/PassengerPlane');
const { MilitaryPlane } = require('./planes/MilitaryPlane');
const MilitaryType = require('./models/MilitaryType');
const { ExperimentalPlane } = require('./planes/ExperimentalPlane');
const { print } = require('./utils');

class Airport {
    
     getPassengerPlanes() {
        var passengerPlaneList = [];
        for (let plane of this.planes) {
            if (plane instanceof PassengerPlane) {passengerPlaneList.push(plane);}
        }
        return passengerPlaneList;
    }

    getMilitaryPlanes() {
        let militaryPlanesList = [];
        this.planes.forEach(plane => {
            if (plane instanceof MilitaryPlane) {
                militaryPlanesList.push(plane);
            }
        });
        return militaryPlanesList;
    }


    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        return passengerPlanes.reduce(function(a, b) {
         return (a.getPassengersCapacity() > b.getPassengersCapacity() ? a : b);
        });
    }

    getTransportMilitaryPlanes() {
       let militaryPlanesArray = this.getMilitaryPlanes();
       let transportMilitaryPlanes = militaryPlanesArray.filter(el => el.getMilitaryType() == MilitaryType.TRANSPORT);
       return transportMilitaryPlanes;
    }

    getBomberMilitaryPlanes()
    {
        let militaryPlanes = this.getMilitaryPlanes();
        let bomberMilitaryPlanes = militaryPlanes.filter (el => el.getMilitaryType() == MilitaryType.BOMBER);
        return bomberMilitaryPlanes;
    }

    constructor(planes) {
        this.planes = planes;
    }

    getExperimentalPlanes() {
        let experimentalPlanes = [];
        this.planes.forEach((plane) => {
            if (plane instanceof ExperimentalPlane) {
                experimentalPlanes.push(plane);
            }
        });
        return experimentalPlanes;
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
