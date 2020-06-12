function MotorShipyard(position) {
    this.position = position;
    this._supportedShips = 'Motor ship';
    this.produceShip = function (typeOfShip, name, model, power, material, ships = world.ships) {
        this.checkTypeOfShip(typeOfShip);
        const ship = new MotorShip(name, model, this.position, power, material, ships = world.ships);
        this.moor(ship);
    }
}

MotorShipyard.prototype = new Shipyard();