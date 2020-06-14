describe('Ship', () => {
    let ship;

    beforeEach(function () {
        let testWorld = { ships: {} };
        ship = new Ship('Best ship', 'Yacht', { x: 1, y: 1 }, {});
    });
    describe('move', () => {
        it('increase distance', () => {
            ship.move('w');
            expect(ship.distance).to.eq(1);
        });
        it('changes position', () => {
            ship.move('w');
            expect(ship.position).to.deep.eq({ x: 0, y: 1 });
        });
    });
})