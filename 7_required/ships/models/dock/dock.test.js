describe('Dock', () => {
    let dock;
    let ship;
    beforeEach(function () {
        dock = new Dock({ x: 1, y: 1 });
        ship = new Ship('Best ship', 'Yacht', { x: 1, y: 1 }, {});
    });
    describe('moor', () => {
        it('makes ship drops anchor', () => {
            dock.moor(ship);
            expect(ship._isAnchorDropped).to.eq(true)
        });
        it('adds ship to dock._ships', () => {
            dock.moor(ship);
            expect(dock._ships).to.deep.eq([ship]);
        });
        it('throws error when ship is not near the dock', () => {
            ship.position = { x: 1, y: 2 };
            expect(() => dock.moor(ship)).to.throw(Error, 'Ship should be near the dock.');
        });
        it('throws error when ship is already docked', () => {
            dock._ships = [ship];
            expect(() => dock.moor(ship)).to.throw(Error, 'Ship is already docked.');
        });
    });
    describe('ships', () => {
        it('returns dock._ships', () => {
            dock.moor(ship);
            expect(dock.ships()).to.deep.eq([ship]);
        });
    });
    describe('unMoor', () => {
        it('makes ship rises anchor', () => {
            dock._ships = [ship];
            dock.unMoor(ship);
            expect(ship._isAnchorDropped).to.eq(false);
        });
        it('removes ship from dock._ships', () => {
            dock._ships = [ship];
            dock.unMoor(ship);
            expect(dock._ships).to.deep.eq([]);
        });
        it('throws error when ship is not in dock', () => {
            expect(() => dock.unMoor(ship)).to.throw(Error, 'Ship is not in dock.');
        });
    });
})