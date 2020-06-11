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
const sailboat = new Sailboat(3, 50, 'Tuna', 'SB1', { 4: 3, 4: 3 });