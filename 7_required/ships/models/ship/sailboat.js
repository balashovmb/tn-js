function Sailboat(name, model, position, numberOfMasts, areaOfSails, ships = world.ships) {
    Ship.call(this);
    this.numberOfMasts = numberOfMasts;
    this.areaOfSails = areaOfSails;
    this._typeOfShip = 'Sailboat';

    this.setBaseProps(name, model, position, ships);
}

Sailboat.prototype = Object.create(Ship.prototype);
Sailboat.prototype.constructor = Ship;