'use strict';

/**
* @param {string} name Имя корабля
* @param {string} model Модель корабля
* @param {{х: number, y: number}} position Координаты коробля
* @returns {Ship} Корабль
 */
function Ship(name, model, position, ships = world.ships) {
    let _name;

    this.setBaseProps = (name, model, position, ships = world.ships) => {
        _name = validName(name);
        this.model = model;
        this.position = position;

        function validName(name) {
            if (Object.keys(ships).includes(name))
                throw new Error(`Ship with name '${name}' already exists`);
            return name;
        }

        ships[name] = this;
    }

    this.setBaseProps(name, model, position, ships = world.ships);

    let _isAnchorDropped = false;


    this.distance = 0;
    this.speed = 0;

    this.name = function () {
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
        if (this.isAnchorDropped())
            throw new Error('You need to rise anchor');
    }

    this.isAnchorDropped = function () {
        console.log('isAnchorDropped', this);
        return _isAnchorDropped;
    };

    /**
     * @param {boolean} dropped
     */
    this.dropAnchor = () => {
        console.log(_isAnchorDropped);
        _isAnchorDropped = true;
    };

    this.riseAnchor = () => {
        _isAnchorDropped = false;
        return true;
    };


}
