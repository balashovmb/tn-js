'use strict';

// let currentFlight = '';

// var displayFlights = displayFlightsInit(
//     document.getElementById('flight-list'),
//     document.getElementById('flight-list-item-template'),
// );

// var flightDetails = flightDetailsInit(
//     document.getElementById('flight-details'),
//     document.getElementById('tickets-list'),
//     document.getElementById('flight-details-ticket-template'),
// );

// function updateView() {
//     displayFlights(world.flights);
//     flightDetails(world.flights, 'BH118');
// }

const world = new World();

const flight = world.addFlight(
    {
        name: 'Airbus 747',
        seats: 36,
        businessSeats: 4,
    },
    makeTime(16, 0),
    'BH118'
);

const ticket = world.flights.BH118.buyTicket(makeTime(5, 0), 'Petrov I. I.');

world.eRegistration(ticket.id, 'Petrov I. I.', makeTime(13,0));
// const r2 = ticket.eRegistration(makeTime(12, 0));
// console.log(r2);



// let res = buyTicket(world.flights, 'BH118', makeTime(5, 10), 'Petrov I. I.');

// let res2 = buyTicket(world.flights, 'BH118', makeTime(5, 10), 'Ivanov I. I.');

// console.log(flightReport(world.flights,'BH118', Date))

// console.log(res)
// updateView();
