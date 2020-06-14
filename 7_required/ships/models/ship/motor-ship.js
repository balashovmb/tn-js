function MotorShip(name, model, position, power, material, ships = world.ships) {
    Ship.call(this);
    this.power = power;
    this.material = material;
    this._typeOfShip = 'Motor ship';
    
    this.setBaseProps(name, model, position, ships);
}

MotorShip.prototype = Object.create(Ship.prototype);
MotorShip.prototype.constructor = Ship;