'use strict';

/**
* @param {{х: number, y: number}} position Координаты пристани
* @param {Array} _ships массив кораблей
* @returns {Dock} Пристань
 */
function Dock(position) {
    let _ships = [];
    this.position = position;

    this.moor = function (ship) {
        if (ship.position.x != this.position.x || ship.position.y != this.position.y) {
            throw new Error('Ship should be near the dock.')
        }
        if (_ships.includes(ship)) {
            throw new Error('Ship is already docked');
        }
        ship.dropAnchor();
        _ships.push(ship);
        console.log(`Ship ${ship.name()} is docked.`);
    }

    this.ships = function () {
        return _ships;
    }

    this.unMoor = function (ship) {
        if (!_ships.includes(ship)) {
            throw new Error('Ship is not in dock.');
        }
        ship.riseAnchor();
        _ships.pop(ship);
        console.log(`Ship ${ship.name()} left the dock.`);
    }
}
