/**
* Функция генерации отчета по рейсу
* 
*  * проверка рейса
*  * подсчет
* 
* @param {string} flight номер рейса
* @param {number} nowTime текущее время
* @returns {Report} отчет
*/
function flightReport(flight, nowTime) {
    let report = {};

    let flightObject = flights[flight];

    if (!flightObject) { throw new Error('Flight is not exists') };

    report.flight = flight;

    if ((nowTime >= flightObject.registrationStarts) &&
        (nowTime < flightObject.registartionEnds)) {
        report.registration = true;
    } else {
        report.registration = false;
    }

    report.complete = nowTime > flightObject.registartionEnds;

    report.countOfSeats = flightObject.seats;

    let tickets = flightObject.tickets;

    report.reservedSeats = tickets.length;

    report.registeredSeats = tickets.filter(
        ticket => (ticket.registrationTime)
    ).length;

    report.countOfReverts = tickets.filter(
        ticket => (ticket.reverted)
    ).length;

    report.percentOfReverts = report.countOfReverts / report.reservedSeats * 100;

    return report;
}

let report = flightReport('BH118', makeTime(10, 0));
console.log(report);