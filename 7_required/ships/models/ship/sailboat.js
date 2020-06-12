function Sailboat(name, model, position, numberOfMasts, areaOfSails, ships = world.ships) {
    this.numberOfMasts = numberOfMasts;
    this.areaOfSails = areaOfSails;
    this._typeOfShip = 'Sailboat';

    this.setBaseProps(name, model, position, ships = world.ships);
}

Sailboat.prototype = new Ship();