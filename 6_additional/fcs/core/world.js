'use strict';
/**
 * * @returns {World} 
 */

function World() {
    this.flights = {};
    this.var = 0;

    this.addFlight = (airliner, time, name) => (new Flight(this, airliner, time, name));

    this.buyTicket = function (flightName, buyTime, fullName, type = 0) {
        flight = this.flights[flightName];

        if (!flight)
            throw new Error('Flight not found');

        const ticket = flight.buyTicket(buyTime, fullName, type = 0);

        return ticket;
    }
}
