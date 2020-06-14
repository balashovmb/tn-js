function SailboatShipyard(position) {
    Shipyard.call(this);
    this.position = position;
    this._supportedShips = 'Sailboat';
}

SailboatShipyard.prototype = {
    ...Shipyard.prototype,
    _produceShip: function (specification) {
        return new Sailboat(
            specification.name,
            specification.model,
            this.position,
            specification.numberOfMasts,
            specification.areaOfSails,
            specification.ships
        )
    }
};
SailboatShipyard.prototype.constructor = Shipyard;