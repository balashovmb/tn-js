const buyTicketForm = document.getElementById('buy-ticket-form');

buyTicketForm.addEventListener('submit', buyFormSubmitHandler);

/**
 * Обработчик отправки формы
 * @param {KeyboardEvent} event
 */
function buyFormSubmitHandler(event) {
    event.preventDefault();

    const formData = {
        flightName: buyTicketForm.elements.flight.value,
        fullName: buyTicketForm.elements.fullname.value,
        type: buyTicketForm.elements.type.value,
    };

    const buyTime = timeStub(formData.flightName);

    try {
        const ticket = buyTicket(
            world.flights,
            formData.flightName,
            buyTime,
            formData.fullName,
            parseInt(formData.type)
        );
        if (ticket) { buyTicketForm.reset() };
        alert('You bought a ticket. Seat number: ' + ticket.seat);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

function timeStub(flightName) {
    const flight = world.flights[flightName];
    if (flight) {
        return flight.registrationStarts;
    } else {
        return Date();
    }
}
