describe('Shipyard', () => {
    let shipyard;
    let ship;
    beforeEach(function () {
        shipyard = new Shipyard({ x: 1, y: 1 });
        ship = new Ship('Best ship', 'Yacht', { x: 1, y: 1 }, {});
        shipyard._ships = [ship];
    });
    describe('isShipOnShipyard', () => {
        it('returns true when ship at the shipyard', () => {
            expect(shipyard.isShipOnShipyard(ship)).to.eq(true);
        });
        it('throws error when ship is not at the shipyard', () => {
            shipyard._ships = [];
            expect(() => shipyard.isShipOnShipyard(ship)).to.throw(Error,
                'Ship must be at the shipyard');
        });
    });
    describe('paintShip', () => {
        it('changes color prop of the ship', () => {
            ship._color = 'black';
            shipyard.paintShip(ship, 'gray');
            expect(ship._color).to.eq('gray');
        });
    });
    describe('checkTypeOfShip', () => {
        it('returns true when ship type supports by shipyard', () => {
            shipyard._supportedShips = 'Sailboat';
            ship._typeOfShip = 'Sailboat';
            expect(shipyard.checkTypeOfShip(ship._typeOfShip)).to.eq(true);
        });
        it('throws error when the ship type is not supported by the shipyard', () => {
            shipyard._supportedShips = 'Sailboat';
            ship._typeOfShip = 'Motor ship';
            expect(() => shipyard.checkTypeOfShip(ship._typeOfShip)).to.throw(Error,
                'This operation is not supported for ships of this type');
        });
    });
    describe('repairShip', () => {
        it('returns "Ship is repaired"', () => {
            expect(shipyard.repairShip(ship)).to.eq('Ship is repaired');
        });
    });
    describe('produceShip', () => {
        it('returns Ship', () => {
            shipyard._supportedShips = 'Base ship';
            const ship2 = new Ship('Shark', 'Yacht', { x: 1, y: 1 }, {});
            const specification = {
                typeOfShip: 'Base ship',
            }
            shipyard._produceShip = function() { return ship2 };
            const result = shipyard.produceShip(specification);
            expect(result).to.be.deep.eq(ship2);
        })
    });
    describe('changeShip', () => {
        it('returns Ship', () => {
            shipyard._supportedShips = 'Base ship';
            const ship2 = new Ship('Shark', 'Yacht', { x: 1, y: 1 }, {});
            ship.typeOfShip = 'Base ship';
            const specification = {
                typeOfShip: 'Base ship',
            }
            shipyard._produceShip = function() { return ship2 };
            const result = shipyard.changeShip(ship, specification);
            expect(result).to.be.deep.eq(ship2);
        })
    });
})
describe('SailboatShipyard', () => {
    let sailboatShipyard;
    beforeEach(function () {
        sailboatShipyard = new SailboatShipyard({ x: 1, y: 1 });
    })
    describe('_produceShip', () => {
        it('returns Sailboat', () => {
            const specification = {
                typeOfShip: 'Sailboat',
                name: 'Tuna',
                model: 'SB1',
                numberOfMasts: 3,
                areaOfSails: 100,
                ships: {}
            }
            const result = sailboatShipyard._produceShip(specification);
            expect(result).not.to.be.instanceOf(MotorShip);
            expect(result).to.be.instanceOf(Sailboat);
        });
    });
})
describe('MotorShipyard', () => {
    let motorShipyard;
    beforeEach(function () {
        motorShipyard = new MotorShipyard({ x: 1, y: 1 });
    })
    describe('_produceShip', () => {
        it('returns MotorShip', () => {
            const specification = {
                typeOfShip: 'Motor ship',
                name: 'Tuna',
                model: 'MS1',
                power: 500,
                material: 'Steel',
                ships: {}
            }
            const result = motorShipyard._produceShip(specification);
            expect(result).not.to.be.instanceOf(Sailboat);
            expect(result).to.be.instanceOf(MotorShip);
        });
    });
})
