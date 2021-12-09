const assert = require('chai').assert;

const { Plane } = require('../planes/plane');
const { MilitaryPlane } = require('../planes/MilitaryPlane');
const { PassengerPlane } = require('../planes/PassengerPlane');
const { ExperimentalPlane } = require('../planes/ExperimentalPlane');
const { Airport } = require('../Airport');
const MilitaryType = require('../models/MilitaryType');
const ExperimentalTypes = require('../models/ExperimentalTypes');
const ClassificationLevel = require('../models/ClassificationLevel');
const airport = require('../index');


describe('PlaneList', () => {
    
    let planeWithMaxPassengerCapacity = new PassengerPlane({model:'Boeing-747', maxSpeed: 980, maxFlightDistance: 16100, maxLoadCapacity: 70500, passengersCapacity: 242});

    it('list of military planes with transport type', () => {
        assert.isNotEmpty(airport.getTransportMilitaryPlanes());
    });

    it('list of passenger planes with max capacity', () => {
        assert.deepEqual(airport.getPassengerPlaneWithMaxPassengersCapacity(), planeWithMaxPassengerCapacity);
    });

    it('order of passenger planes by higher capacity', () => {
        airport.sortByMaxLoadCapacity();
        let planesSortedByMaxLoadCapacity = airport.getPlanes();
        let nextPlaneMaxLoadCapacityIsHigherThanCurrent = true;
        for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i++) {
            let currentPlane = planesSortedByMaxLoadCapacity[i];
            let nextPlane = planesSortedByMaxLoadCapacity[i + 1];
            if (currentPlane.getMaxLoadCapacity() > nextPlane.getMaxLoadCapacity()) {
                nextPlaneMaxLoadCapacityIsHigherThanCurrent = false;
                break;
            }
        }
        assert.isTrue(nextPlaneMaxLoadCapacityIsHigherThanCurrent);
    });

    it('At least one military plane with bomber type exists', () => {
        let bomberMilitaryPlanes  = airport.getBomberMilitaryPlanes();
        assert.isNotEmpty(bomberMilitaryPlanes);
    });

    it('should check that experimental planes have classification level higher than unclassified', () => {
        let experimentalPlanes = airport.getExperimentalPlanes();
        assert.isEmpty(experimentalPlanes.getClassificationLevel()(
            ClassificationLevel.UNCLASSIFIED));
    });
});