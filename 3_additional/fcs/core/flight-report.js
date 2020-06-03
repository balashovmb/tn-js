'use strict';

/**
 * Функция генерации отчета по рейсу
 *
 * Отчет строится на основании данных, содержащихся в параметре flight
 *
 *  * проверка рейса
 *  * подсчет
 *
 * @param {World.flights} flights Все рейсы
 * @param {string} flightNumber номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */
function flightReport(flights, flightNumber, nowTime) {
    if (typeof(flightNumber) != 'string') {
        throw new TypeError('Flight number is not a string.');
    }

    if (typeof(nowTime) != 'number') {
        throw new TypeError('Time is not a number.');
    }

    const flight = flights[flightNumber];

    if (!flight)
        throw new Error('Flight not found');

    const registration = flight.registrationStarts <= nowTime && nowTime <= flight.registrationEnds;
    const complete = nowTime > flight.registrationEnds;
    const countOfSeats = flight.seats;
    const reservedSeats = flight.tickets.length;
    const registeredSeats = flight.tickets.filter(t => t.registrationTime !== null).length;
    const countOfReverts = flight.tickets.filter(ticket => (ticket.reverted)).length;
    const countOfReservations = reservedSeats - countOfReverts;
    const percentOfReverts = countOfReverts / reservedSeats * 100;

    return {
        flight: flightNumber,
        registration,
        complete,
        countOfSeats,
        reservedSeats,
        registeredSeats,
        countOfReverts,
        countOfReservations,
        percentOfReverts
    };
}
