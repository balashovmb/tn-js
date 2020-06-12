function SailboatShipyard(position){
    this.position = position;
    this._supportedShips = 'Sailboat';
}

SailboatShipyard.prototype = new Shipyard();