'use strict';
/**
 * * @returns {World} 
 */

function World() {
    this.flights = {};
    this.var = 0;

    this.addFlight = (airliner, time, name) => {

        while (name in world.flights) {
            name = [
                String.fromCharCode(CHARCODE_A + random(0, 26)),
                String.fromCharCode(CHARCODE_A + random(0, 26)),
                random(100, 999)
            ].join('');
        }

        const flight = new Flight(airliner, time, name);

        this.flights[name] = flight;

        return flight;
    }

    this.buyTicket = function (flightName, buyTime, fullName, type = 0) {
        const flight = this.flights[flightName];

        if (!flight)
            throw new Error('Flight not found');

        const ticket = flight.buyTicket(buyTime, fullName, type = 0);

        return ticket;
    }

    this.eRegistration = function (ticketNumber, fullName, nowTime) {
        const flight = this.flights[ticketNumber.split('-')[0]];

        if (!flight)
            throw new Error('Flight not found');

        return flight.eRegistration(ticketNumber, fullName, nowTime);
    }

    this.flightReport = function (flights, flightNumber, nowTime) {
        const flight = flights[flightNumber];

        if (!flight)
            throw new Error('Flight not found');

        return flight.report(nowTime);

    }
}
