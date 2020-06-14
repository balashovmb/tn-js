describe('Ship', () => {
    let ship;

    beforeEach(function () {
        ship = new Ship('Best ship', 'Yacht', { x: 1, y: 1 }, {});
    });
    describe('move', () => {
        it('increases distance', () => {
            ship.move('w');
            expect(ship.distance).to.eq(1);
        });
        it('changes position(w)', () => {
            ship.move('w');
            expect(ship.position).to.deep.eq({ x: 0, y: 1 });
        });
        it('changes position(e)', () => {
            ship.move('e');
            expect(ship.position).to.deep.eq({ x: 2, y: 1 });
        });
        it('changes position(s)', () => {
            ship.move('s');
            expect(ship.position).to.deep.eq({ x: 1, y: 2 });
        });
        it('changes position(n)', () => {
            ship.move('n');
            expect(ship.position).to.deep.eq({ x: 1, y: 0 });
        });
    });
    describe('moveTo', () => {
        it('increases distance', () => {
            ship.moveTo({ x: 1, y: 11 });
            expect(ship.distance).to.eq(10)
        });
        it('changes position', () => {
            ship.moveTo({ x: 1, y: 11 });
            expect(ship.position).to.deep.eq({ x: 1, y: 11 });
        });
    });
    describe('name', () => {
        it('returns name', () => {
            expect(ship.name()).to.eq('Best ship');
        });
    });
    describe('isAnchorDropped', () => {
        it('returns false when anchor isn\'t dropped', () => {
            expect(ship.isAnchorDropped()).to.eq(false);
        });
        it('returns true when anchor is dropped', () => {
            ship.dropAnchor();
            expect(ship.isAnchorDropped()).to.eq(true);
        });
    });
    describe('checkAnchor', () => {
        it('throws error when anchor isn dropped', () => {
            ship.dropAnchor();
            expect(() => ship.checkAnchor()).to.throw(Error,'You need to rise anchor');
        });
        it('doesn\'t throw error when anchor isn\'t dropped', () => {
            expect(() => ship.checkAnchor()).not.to.throw();
        });
    });
    describe('dropAnchor', () => {
        it('sets _isAnchorDropped to true', () => {
            ship.dropAnchor();
            expect(ship.isAnchorDropped()).to.eq(true);
        });
    });
    describe('riseAnchor', () => {
        it('sets _isAnchorDropped to false', () => {
            ship._isAnchorDropped = true;
            ship.riseAnchor();
            expect(ship.isAnchorDropped()).to.eq(false);
        });
    });
    describe('dropAnchor', () => {
        it('sets _isAnchorDropped to true', () => {
            ship.dropAnchor();
            expect(ship.isAnchorDropped()).to.eq(true);
        });
    });
    describe('typeOfShip', () => {
        it('returns type of ship', () => {
            ship._typeOfShip = 'Sailboat';
            expect(ship.typeOfShip()).to.eq('Sailboat');
        });
    });
})
