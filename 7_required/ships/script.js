const ship = new Ship('Best ship', 'Yacht', { x: 1, y: 1 });
ship.moveTo({ x: 10, y: 1 });
console.log(ship);
ship.move('w');
console.log(ship);
const ship2 = new Ship('Victory', 'Yacht', { x: 0, y: 1 });

const dock = new Dock({ x: 0, y: 1 });
dock.moor(ship2);
console.log(dock.ships());
dock.unMoor(ship2);
console.log(dock.ships());

const motorship = new MotorShip('Koi', 'MB1', { x: 3, y: 3 }, 100, 'steel');
const sailboat = new Sailboat('Tuna', 'SB1', { 4: 3, 4: 3 }, 3, 50);
console.log(motorship);

const shipyard = new Shipyard({ x: 10, y: 10 });
ship2.moveTo({ x: 10, y: 10 });
shipyard.moor(ship2);
shipyard.paintShip(ship2, 'black');
const motorShipyard = new MotorShipyard({ x: 11, y: 11 });
motorship.moveTo({ x: 11, y: 11 });
motorShipyard.moor(motorship);
motorShipyard.repairShip(motorship);
const sailboatShipyard = new SailboatShipyard({ x: 12, y: 12 });
sailboat.moveTo({ x: 12, y: 12 });
sailboatShipyard.moor(sailboat);
sailboatShipyard.repairShip(sailboat);