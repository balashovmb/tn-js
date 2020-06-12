function MotorShipyard(position) {
    this.position = position;
    this._supportedShips = 'Motor ship';
    this._produceShip = function(specification){
        return new MotorShip(
            specification.name,
            specification.model,
            this.position,
            specification.power,
            specification.material,
            specification.ships = world.ships
        )
    }
}

MotorShipyard.prototype = new Shipyard();