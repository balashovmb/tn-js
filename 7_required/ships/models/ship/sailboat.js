/**
* @param {string} name Имя корабля
* @param {string} model Модель корабля
* @param {{х: number, y: number}} position Координаты корабля
* @param {Object} ships Именованный массив, содержащий все корабли
* @param {number} numberOfMasts Количество мачт
* @param {number} areaOfSails Общая площадь парусов
* @returns {MotorShip} Моторный корабль
 */
function Sailboat(name, model, position, numberOfMasts, areaOfSails, ships = world.ships) {
    Ship.call(this);
    this.numberOfMasts = numberOfMasts;
    this.areaOfSails = areaOfSails;
    this._typeOfShip = 'Sailboat';

    this.setBaseProps(name, model, position, ships);
}

Sailboat.prototype = Object.create(Ship.prototype);
Sailboat.prototype.constructor = Ship;