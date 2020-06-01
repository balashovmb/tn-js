'use strict';

/**
* @param {string} name Имя корабля
* @param {string} model Модель корабля
* @param {{х: number, y: number}} position Координаты коробля
* @returns {Ship} Корабль
 */
function Ship(name, model, position, ships = world.ships) {
    let _isAnchorDroped = false;
    let _name = validateName(name);

    this.model = model;
    this.position = position;
    this.distance = 0;
    this.speed = 0;


    this.name = function () {
        console.log(_name);
    }

    function validateName(name) {
        if (Object.keys(ships).includes(name))
            throw new Error(`Ship with name '${name}' already exists`);
        return name;
    }

    this.move(direction) = function {
        switch (direction) {
            case 'n':


        }
    }

    this.moveTo = function (position) {
        if (_isAnchorDroped)
            throw new Error('You need to rise anchor');

        this.distance += Math.sqrt(
            (this.position.x - position.x) ** 2 + (this.position.y - position.y) ** 2
        );

        this.position = {
            x: position.x,
            y: position.y,
        }
    };

    this.isAnchorDroped = function () {
        console.log('isAnchorDroped', this);
        return _isAnchorDroped;
    };

    /**
     * @param {boolean} droped
     */
    this.dropAnchor = () => {
        if (this.speed !== 0)
            throw new Error('Speed must be 0');

        _isAnchorDroped = true;
    };

    ships[name] = this;
}