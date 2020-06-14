function Shipyard(position) {
    Dock.call(this);
    this.position = position;
}

Shipyard.prototype = {
    ...(Dock.prototype),
    isShipOnShipyard: function (ship) {
        if (!this._ships.includes(ship))
            throw new Error('Ship must be at the shipyard');
    },

    paintShip: function (ship, color) {
        this.isShipOnShipyard(ship);
        ship.color = color;
    },

    checkTypeOfShip: function (typeOfShip) {
        if (this._supportedShips !== typeOfShip)
            throw new Error('This operation is not supported for ships of this type');
    },

    repairShip: function (ship) {
        this.isShipOnShipyard(ship);
        this.checkTypeOfShip(ship.typeOfShip());
        console.log('Ship is repaired');
    },

    produceShip: function (specification) {
        this.checkTypeOfShip(specification.typeOfShip);
        const ship = this._produceShip(specification);
        this.moor(ship);
        return ship;
    },

    changeShip: function (ship, specification) {
        this.checkTypeOfShip(ship.typeOfShip);
        this.isShipOnShipyard(ship);
        const newShip = this._produceShip(specification);
        return newShip;
    }
}
