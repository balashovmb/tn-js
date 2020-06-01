const ship = new Ship('Best ship', 'Yacht', {x:1, y:1});
ship.moveTo({ x: 10, y: 1 });
console.log(ship);
ship.move('w');
console.log(ship);

// ship.dropAnchor();

// ship.moveTo({ x: 20, y: 20 });
// console.log(ship);
