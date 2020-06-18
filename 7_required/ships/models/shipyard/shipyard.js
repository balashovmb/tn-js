/**
* @param {{х: number, y: number}} position Координаты
*/
function Shipyard(position) {
    Dock.call(this);
    this.position = position;
}

Shipyard.prototype = {
    ...(Dock.prototype),
    isShipOnShipyard: function (ship) {
        if (!this._ships.includes(ship))
            throw new Error('Ship must be at the shipyard');
        return true;
    },

    paintShip: function (ship, color) {
        this.isShipOnShipyard(ship);
        ship._color = color;
    },

    checkTypeOfShip: function (typeOfShip) {
        if (this._supportedShips !== typeOfShip)
            throw new Error('This operation is not supported for ships of this type');
        return true;
    },

    repairShip: function (ship) {
        this.isShipOnShipyard(ship);
        this.checkTypeOfShip(ship.typeOfShip());
        return 'Ship is repaired';
    },

    /**
    * @param {string} typeOfShip Тип корабля
    * @param {string} name Имя корабля
    * @param {string} model Модель корабля
    * @param {{х: number, y: number}} position Координаты корабля
    * @param {Object} ships Именованный массив, содержащий все корабли
    * @param {number} numberOfMasts Количество мачт
    * @param {number} areaOfSails Общая площадь парусов
    * @param {{typeOfShip,name, model, position, power, material, numberOfMasts, areaOfSails, ships}} specification
    */
    produceShip: function (specification) {
        this.checkTypeOfShip(specification.typeOfShip);
        const ship = this._produceShip(specification);
        this.moor(ship);
        return ship;
    },

    changeShip: function (ship, specification) {
        this.checkTypeOfShip(ship.typeOfShip);
        this.checkTypeOfShip(specification.typeOfShip);
        this.isShipOnShipyard(ship);
        const newShip = this._produceShip(specification);
        return newShip;
    }
}
specification.name,
    specification.model,
    this.position,
    specification.power,
    specification.material,
    specification.ships