function Sailboat(numberOfMasts, areaOfSails, name, model, position, ships = world.ships) {
    this.numberOfMasts = numberOfMasts;
    this.areaOfSails = areaOfSails;

    this.setBaseProps(name, model, position, ships = world.ships);
}

Sailboat.prototype = new Ship();