const { Plane } = require('./Plane');

class MilitaryPlane extends Plane {

    constructor(options) {
        super(options);
        this.militaryType = options.militaryType;

    }

    getMilitaryType() {
        return this.militaryType;
    }
}

module.exports = { MilitaryPlane }