const CHARCODE_A = 'A'.charCodeAt(0);
/**
 * Добавление рейса
 *
 * * назначение номера рейса
 * * подготовка рейса
 *   * вычисление времени регистрации
 *   * подготовка структуры Flight
 *
 * @param {World.flights} flights Все рейсы
 * @param {Airliner} airliner Информация о самолете
 * @param {number} time Время вылета
 * @param {string?} name Имя рейса
 * @returns {Flight} Рейс
 * @typedef {Object} Flight
 * @property {string} name Номер рейса
 * @property {number} seats Общее количество мест (включая бизнес класс)
 * @property {number} businessSeats Количество мест бизнес класса (первые номера мест в нумерации)
 * @property {number} registrationStarts Время начала регистрации на борт
 * @property {number} registrationEnds Время окончания регистрации на борт
 * @property {Ticket[]} tickets Массив всех билетов
 */

function Flight(airliner, time, name) {
    this.seats = airliner.seats;
    this.businessSeats = airliner.businessSeats;
    this.registrationStarts = time - 5 * 3600 * 1000;
    this.registrationEnds = time - 1 * 3600 * 1000;
    this.name = name;

    this._tickets = [];

    this.eRegistration = function (ticketNumber, fullName, nowTime) {
        if (nowTime < this.registrationStarts)
            throw new Error('Check-in has not started yet');

        if (nowTime >= this.registartionEnds)
            throw new Error('Check-in is over');

        const ticket = this._tickets.find(ticket => ticket.id === ticketNumber);

        if (!ticket)
            throw new Error('Invalid ticket number');

        if (ticket.fullName !== fullName)
            throw new Error('Invalid passenger\'s name');

        return ticket.eRegistration(nowTime);
    }

    this.buyTicket = function (buyTime, fullName, type = 0) {

        if (this._tickets.length >= this._seats)
            throw new Error('No seats available');

        if (buyTime > this.registartionEnds)
            throw new Error('Time away');

        const seat = findAvailableSeat(this, type);
        if (!seat)
            throw new Error(`No seats of type ${type} available. You can choose another type`);

        let id, exists;
        do {
            id = this.name + '-' + (this._tickets.length + 1); // Math.random().toString().substr(2, 3);
            exists = this._tickets.find(item => item.id === id);
        } while (exists);

        const ticket = new Ticket(
            id,
            this.name,
            buyTime,
            fullName,
            type,
            seat,
        );
        this._tickets.push(ticket);

        return { ...ticket }; // копируем, что бы "пассажир" случайно ничего не изменил в самой информации о рейсе
    }

    function findAvailableSeat(flight, type) {
        let exists;
        let seat;
        let seatsOfType = 0;

        switch (type) {
            case 0: // standart
                const availableSeats = [];

                for (let i = flight.businessSeats + 1; i <= flight.seats; i++)
                    if (!flight._tickets.find(item => item.seat === i))
                        availableSeats.push(i);

                if (availableSeats.length === 0)
                    return null;

                const index = Math.floor(Math.random() * availableSeats.length);
                return availableSeats[index];
            case 1: // business
                for (let i = 1; i <= flight.businessSeats; i++)
                    if (!flight._tickets.find(item => item.seat === i))
                        seatsOfType++;

                if (seatsOfType === 0)
                    return null;

                do {
                    seat = Math.floor(Math.random() * flight.businessSeats) + 1;
                    exists = flight._tickets.find(item => item.seat === seat);
                } while (exists);

                return seat;
            default:
                throw new Error(`Unknown type`);
        }
    }
    this.report = function (nowTime) {

        const registration = this.registrationStarts <= nowTime && nowTime <= this.registrationEnds;
        const complete = nowTime > this.registrationEnds;
        const countOfSeats = this.seats;
        const reservedSeats = this._tickets.length;
        const registeredSeats = this._tickets.filter(t => t.registrationTime !== null).length;
        const countOfReverts = this._tickets.filter(ticket => (ticket.reverted)).length;
        const countOfReservations = reservedSeats - countOfReverts;
        const percentOfReverts = countOfReverts / reservedSeats * 100;

        return {
            flight: this.name,
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
}
