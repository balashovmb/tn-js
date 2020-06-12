function MotorShipyard(position){
    this.position = position;
    this._supportedShips = 'Motor ship';
}

MotorShipyard.prototype = new Shipyard();