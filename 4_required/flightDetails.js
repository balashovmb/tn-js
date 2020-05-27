function flightDetails(flight) {
    const container = document.getElementById('flight-details');
    const flightNameHeader = document.createElement('h3');
    flightNameHeader.textContent = `Отчет по рейсу ${flight.name}`;
    container.append(flightNameHeader);

    flight.tickets.forEach( ticket =>{
        const ticketIdDiv = document.createElement('div');
        ticketIdDiv.textContent = `Номер билета: ${ticket.id}`;
        container.append(ticketIdDiv);
        const seatDiv = document.createElement('div');
        seatDiv.textContent = `Место: ${ticket.seat}`;
        container.append(seatDiv);
        const fullNameIdDiv = document.createElement('div');
        fullNameIdDiv.textContent = `Полное имя пассажира: ${ticket.fullName}`;
        container.append(fullNameIdDiv);
        const registrationDiv = document.createElement('div');
        registrationDiv.textContent = `Регистрация ${registrationStatus(ticket)}`;
        container.append(registrationDiv);
        const br = document.createElement('br');
        container.append(br);
    })
}

function registrationStatus(ticket) {
    if (ticket.registrationTime) {
        return 'пройдена';
    } else {
        return 'не пройдена';
    }
}

let flight = {
    name: 'BH118',
    tickets: [
        {
            id: 'BH118-B50',
            flight: 'BH118',
            fullName: 'Ivanov I. I.',
            type: 0,
            seat: 18,
            buyTime: 1590354000000,
            registrationTime: null,
        },
        {
            id: 'BH118-B51',
            flight: 'BH118',
            fullName: 'Ivanova A. A.',
            type: 0,
            seat: 19,
            buyTime: 1590354000000,
            registrationTime: 1590382800000,
        }
    ],
    
};

flightDetails(flight);