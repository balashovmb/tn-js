/**
* @param {string} name Имя корабля
* @param {string} model Модель корабля
* @param {{х: number, y: number}} position Координаты корабля
* @param {Object} ships Именованный массив, содержащий все корабли
* @param {string} material Материал корпуса
* @param {number} power Мощность двигателя
* @returns {MotorShip} Моторный корабль
 */
function MotorShip(name, model, position, power, material, ships = world.ships) {
    Ship.call(this);
    this.power = power;
    this.material = material;
    this._typeOfShip = 'Motor ship';
    
    this.setBaseProps(name, model, position, ships);
}

MotorShip.prototype = Object.create(Ship.prototype);
MotorShip.prototype.constructor = Ship;