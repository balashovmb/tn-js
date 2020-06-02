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
        return _name;
    }

    this.move = function (direction) {
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
    }

    this.moveTo = function (position) {
        this.checkAnchor();

        this.distance += Math.sqrt(
            (this.position.x - position.x) ** 2 + (this.position.y - position.y) ** 2
        );

        this.position = {
            x: position.x,
            y: position.y,
        }
        return true;
    };

    this.checkAnchor = function () {
        if (this.isAnchorDroped())
            throw new Error('You need to rise anchor');
    }

    this.isAnchorDroped = function () {
        console.log('isAnchorDroped', this);
        return _isAnchorDroped;
    };

    /**
     * @param {boolean} droped
     */
    this.dropAnchor = () => {
        console.log(_isAnchorDroped);
        _isAnchorDroped = true;
    };

    this.riseAnchor = () => {
        _isAnchorDroped = false;
        return true;
    };

    function validateName(name) {
        if (Object.keys(ships).includes(name))
            throw new Error(`Ship with name '${name}' already exists`);
        return name;
    }

    ships[name] = this;
}