'use strict';
/**
 * @typedef {Object} Ticket
 * @property {string} id
 * @property {string} flight
 * @property {string} fullName
 * @property {number} type Тип места (0 - стандарт, 1 - бизнес)
 * @property {number} seat
 * @property {number} buyTime
 * @property {number} registrationTime Время прохождения электроннйо регистрации
 */

function Ticket(id, flight, buyTime, fullName, type, seat) {
    this.registrationTime = null;
    this.id = id;
    this.flight = flight;
    this.buyTime = buyTime;
    this.fullName = fullName;
    this.type = type;
    this.seat = seat;

    this.eRegistration = function (nowTime) {
        this.registrationTime = nowTime;
        return true;
    }
}
