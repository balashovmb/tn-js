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
 */
function Flight(world, airliner, time, name) {
    while (name in world.flights) {
        name = [
            String.fromCharCode(CHARCODE_A + random(0, 26)),
            String.fromCharCode(CHARCODE_A + random(0, 26)),
            random(100, 999)
        ].join('');
    }

    this.name = name;
    this.seats = airliner.seats;
    this.businessSeats = airliner.businessSeats;
    this.registrationStarts = time - 5 * 3600 * 1000;
    this.registrationEnds = time - 1 * 3600 * 1000;

    this._tickets = [];

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

        const ticket = {
            id,
            flight: this.name,
            buyTime,
            fullName,
            registrationTime: null,
            type,
            seat,
        };

        this._tickets.push(ticket);

        return { ...ticket }; // копируем, что бы "пассажир" случайно ничего не изменил в самой информации о рейсе
    }

    function findAvailableSeat(flight, type) {
        let exists;
        let seat;
        let seatsOfType = 0;

        console.log(type);

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

    world.flights[this.name] = this;
}
