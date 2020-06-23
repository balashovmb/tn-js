/**
 * Функция возврата билета
 * 
 *  * проверка рейса
 *  * проверка билета
 *  * вернуть билет можно если до рейса не менее 3 часов
 *  * вернуть билет можно если не бизнес класс
 * 
 * @param {string} ticketId номер билета
 * @param {number} nowTime текущее время
 * @returns {boolean} удалось ли отменить билет
 */
function revertTicket(ticketId, nowTime, flights = world.flights) {
    if (typeof (ticketId) != 'string') {
        throw new TypeError('Ticket id is not a string.');
    }

    if (typeof (nowTime) != 'number') {
        throw new TypeError('Time is not a number.');
    }

    let ticket;

    for (let flight in flights) {
        flights[flight].tickets.filter(currentTicket => {
            if (currentTicket.id == ticketId) { ticket = currentTicket };
        })
    }

    const flight = flights[ticket.flight];
    if (!ticket) { throw new Error('Incorrect ticket number') };

    if (nowTime > flight.registrationEnds - 10800000) {
        throw new Error(
            'The ticket can be returned no later than 3 hours before departure'
        );
    }

    if (ticket.type == 1) {
        throw new Error('You cannot revert business class ticket');
    }

    ticket.reverted = true;

    return true;
}
