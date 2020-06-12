function SailboatShipyard(position){
    this.position = position;
    this._supportedShips = 'Sailboat';
    this._produceShip = function(specification){
        return new MotorShip(
            specification.name,
            specification.model,
            this.position,
            specification.numberOfMasts,
            specification.areaOfSails,
            specification.ships = world.ships
        )
    }
}

SailboatShipyard.prototype = new Shipyard();