describe('revertTicket', () => {
    const time = new Date().setHours(12, 0, 0);
    const tooLate = new Date().setHours(12, 0, 1);
    const ticket = {
        id: 'BH118-B50',
        flight: 'BH118',
        fullName: 'Ivanov I. I.',
        type: 0,
        seat: 18,
        buyTime: time,
        registrationTime: null,
    }
    const ticket2 = {
        id: 'BH118-B51',
        flight: 'BH118',
        fullName: 'Ivanova A. A.',
        type: 1,
        seat: 19,
        buyTime: time,
        registrationTime: null,
    }
    const testWorld = {
        flights: {
            BH118: {
                name: 'BH118',
                seats: 28,
                businessSeats: 4,
                registrationStarts: time,
                registrationEnds: new Date().setHours(15, 0, 0),
                tickets: [
                    ticket,
                    ticket2
                ],
            }
        }
    };
    describe('valid args', () => {
        const result = revertTicket('BH118-B50', time, testWorld.flights);
        it('returns true', () => {
            assert.equal(result, true);
        });
        it('adds "reverted" property to ticket', () => {
            assert.equal(ticket.reverted, true);
        });
    });
    describe('throws error when', () => {
        it('user tries to revert business class ticket', () => {
            const result = () => { revertTicket('BH118-B51', time, testWorld.flights) };
            assert.throw(result, Error, 'You cannot revert business class ticket');
        });
        it('user tries to revert ticket later than 3 hours before departure', () => {
            const result = () => { revertTicket('BH118-B50', tooLate, testWorld.flights) };
            assert.throw(result, Error, 'The ticket can be returned no later than 3 hours before departure');
        });
        it('ticket id is not a string', () => {
            const result = () => { revertTicket(123, time, testWorld.flights) };
            assert.throw(result, TypeError, 'Ticket id is not a string.');
        });
        it('time arg is not a number', () => {
            const result = () => { revertTicket('BH118-B51', '12:30', testWorld.flights) };
            assert.throw(result, TypeError, 'Time is not a number.');
        });
    });
})