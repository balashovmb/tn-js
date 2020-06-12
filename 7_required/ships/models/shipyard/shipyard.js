function Shipyard(position) {
    this.position = position;
    this.isShipOnShipyard = function (ship) {
        if (!this._ships.includes(ship))
            throw new Error('Ship must be at the shipyard');
    }

    this.paintShip = function (ship, color) {
        this.isShipOnShipyard(ship);
        ship.color = color;
    }

    this.checkTypeOfShip = function (typeOfShip) {
        if (this._supportedShips !== typeOfShip)
            throw new Error('This operation is not supported for ships of this type');
    }

    this.repairShip = function (ship) {
        this.isShipOnShipyard(ship);
        this.checkTypeOfShip(ship.typeOfShip());
        console.log('Ship is repaired');
    }


}

Shipyard.prototype = new Dock();