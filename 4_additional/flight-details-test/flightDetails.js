function flightDetails(flight) {
    if (!(flight.name) || !(flight.tickets)) {
        throw new Error('Incorrect flight object');
    }
    const container = document.getElementById('flight-details');
    const flightNameHeader = document.createElement('h3');
    flightNameHeader.textContent = `Отчет по рейсу ${flight.name}`;
    container.append(flightNameHeader);

    if (flight.tickets.length == 0) {
        addDiv(container, 'У данного рейса не продано ни одного билета.');
    } else {
        flight.tickets.forEach(ticket => {
            addDiv(container, `Номер билета: ${ticket.id}`);
            addDiv(container, `Место: ${ticket.seat}`);
            addDiv(container, `Полное имя пассажира: ${ticket.fullName}`);
            addDiv(container, `Регистрация ${registrationStatus(ticket)}`);
            const br = document.createElement('br');
            container.append(br);
        })
    }
}

function addDiv(container, content) {
    const div = document.createElement('div');
    div.textContent = content;
    container.append(div);
}

function registrationStatus(ticket) {
    if (ticket.registrationTime) {
        return 'пройдена';
    } else {
        return 'не пройдена';
    }
}

