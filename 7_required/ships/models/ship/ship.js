'use strict';

/**
* @param {string} name Имя корабля
* @param {string} model Модель корабля
* @param {{х: number, y: number}} position Координаты корабля
* @param {Object} ships Именованный массив, содержащий все корабли
* @returns {Ship} Корабль
 */
function Ship(name, model, position, ships = world.ships) {

    this.setBaseProps(name, model, position, ships);

    this._isAnchorDropped = false;

    this.distance = 0;

    this.speed = 0;

}

Ship.prototype = {
    setBaseProps: function (name, model, position, ships) {
        this._name = validName(name);
        this.model = model;
        this.position = position;

        function validName(name) {
            if (Object.keys(ships).includes(name))
                throw new Error(`Ship with name "${name}" already exists`);
            return name;
        }
        ships[name] = this;
    },
    move: function (direction) {
        this.checkAnchor();

        switch (direction) {
            case 'n':
                this.position.y -= 1;
                break;
            case 's':
                this.position.y += 1;
                break;
            case 'w':
                this.position.x -= 1;
                break;
            case 'e':
                this.position.x += 1;
                break;
        }
        this.distance += 1;
        return true;
    },
    moveTo: function (position) {
        this.checkAnchor();

        this.distance += Math.sqrt(
            (this.position.x - position.x) ** 2 + (this.position.y - position.y) ** 2
        );

        this.position = {
            x: position.x,
            y: position.y,
        }
        return true;
    },
    name: function () {
        return this._name;
    },
    isAnchorDropped: function () {
        return this._isAnchorDropped;
    },
    checkAnchor: function () {
        if (this._isAnchorDropped)
            throw new Error('You need to rise anchor');
    },

    /**
     * @param {boolean} dropped
     */
    dropAnchor: function () {
        this._isAnchorDropped = true;
    },

    riseAnchor: function () {
        this._isAnchorDropped = false;
        return true;
    },

    typeOfShip: function () {
        return this._typeOfShip;
    }
}