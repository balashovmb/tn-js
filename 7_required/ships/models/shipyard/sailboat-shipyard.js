function SailboatShipyard(position) {
    Shipyard.call(this);
    this.position = position;
    this._supportedShips = 'Sailboat';
}

SailboatShipyard.prototype = {
    ...Shipyard.prototype,
    _produceShip: function (specification) {
        return new MotorShip(
            specification.name,
            specification.model,
            this.position,
            specification.numberOfMasts,
            specification.areaOfSails,
            specification.ships = world.ships
        )
    }
};
SailboatShipyard.prototype.constructor = Shipyard;