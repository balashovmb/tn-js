function MotorShip(name, model, position, power, material, ships = world.ships) {
    this.power = power;
    this.material = material;
    this._typeOfShip = 'Motor ship';
    
    this.setBaseProps(name, model, position, ships = world.ships);
}

MotorShip.prototype = new Ship();