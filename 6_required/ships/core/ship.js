'use strict';

function Ship(name) {
    let _isAnchorDroped = false;
    this.name = name;
    this.position = { x: 0, y: 0 };
    this.speed = 0;
    this.moveTo = function (position) {
        if (_isAnchorDroped)
            throw new Error('You need to rise anchor');

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
}