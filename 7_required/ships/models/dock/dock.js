'use strict';

/**
* @param {{х: number, y: number}} position Координаты пристани
* @param {Array} _ships массив кораблей
* @returns {Dock} Пристань
 */
function Dock(position) {
    this._ships = [];
    this.position = position;
}

Dock.prototype = {
    moor: function (ship) {
        if (ship.position.x != this.position.x || ship.position.y != this.position.y) {
            throw new Error('Ship should be near the dock.')
        }
        if (this._ships.includes(ship)) {
            throw new Error('Ship is already docked.');
        }
        ship.dropAnchor();
        this._ships = [...this._ships, ship];
        console.log(`Ship ${ship.name()} is docked.`);
    },

    ships: function () {
        return this._ships;
    },

    unMoor: function (ship) {
        if (!this._ships.includes(ship)) {
            throw new Error('Ship is not in dock.');
        }
        ship.riseAnchor();
        this._ships = this._ships.filter(curShip => curShip !== ship);
        console.log(`Ship ${ship.name()} left the dock.`);
    }
}
