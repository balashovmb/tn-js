function MotorShipyard(position) {
    Shipyard.call(this);
    this.position = position;
    this._supportedShips = 'Motor ship';
}

MotorShipyard.prototype = {
    ...Shipyard.prototype,
    _produceShip: function (specification) {
        return new MotorShip(
            specification.name,
            specification.model,
            this.position,
            specification.power,
            specification.material,
            specification.ships
        )
    }
};
MotorShipyard.prototype.constructor = Shipyard;