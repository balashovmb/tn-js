'use strict';
/**
 *  @returns {Ticket} 
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
