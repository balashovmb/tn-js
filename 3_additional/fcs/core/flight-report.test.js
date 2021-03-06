describe('flightReport', () => {
    const time = new Date().setHours(10, 0, 0);
    const time2 = new Date().setHours(5, 0, 0);
    const testWorld = {
        flights: {
            BH118: {
                name: 'BH118',
                seats: 28,
                businessSeats: 4,
                registrationStarts: time,
                registrationEnds: new Date().setHours(15, 0, 0),
                tickets: [
                    {
                        id: 'BH118-B50',
                        flight: 'BH118',
                        fullName: 'Ivanov I. I.',
                        type: 0,
                        seat: 18,
                        buyTime: time,
                        registrationTime: time,
                    },
                    {
                        id: 'BH118-B51',
                        flight: 'BH118',
                        fullName: 'Ivanova A. A.',
                        type: 0,
                        seat: 19,
                        buyTime: time,
                        registrationTime: null,
                    }
                ],
            },
            BH119: {
                name: 'BH119',
                seats: 32,
                businessSeats: 5,
                registrationStarts: time2,
                registrationEnds: time,
                tickets: [
                ],
            }
        }
    };
    describe('valid args', ()=>{
        it('BH118', () => {
            const result = flightReport(testWorld.flights, 'BH118', time);
            console.log(result)
            assert.deepEqual(result, {
                flight: 'BH118',
                registration: true,
                complete: false,
                countOfSeats: 28,
                reservedSeats: 2,
                registeredSeats: 1,
                countOfReverts: 0,
                countOfReservations: 2,
                percentOfReverts: 0
            });
        });
        it('BH119', () => {
            const result = flightReport(testWorld.flights, 'BH119', time);
            console.log(result)
            assert.deepEqual(result, {
                flight: 'BH119',
                registration: true,
                complete: false,
                countOfSeats: 32,
                reservedSeats: 0,
                registeredSeats: 0,
                countOfReverts: 0,
                countOfReservations: 0,
                percentOfReverts: 0
            });
        });
    });

    it('throws error when flight is not found by id', () => {
        const result = () => { flightReport(testWorld.flights, 'nope', time) };
        assert.throw(result, Error, 'Flight not found');
    });
    it('throws error when flight id is not a string', () => {
        const result = () => { flightReport(testWorld.flights, 123, time) };
        assert.throw(result, Error, 'Flight number is not a string.');
    });
    it('throws error when time arg is not a number', () => {
        const result = () => { flightReport(testWorld.flights, 'BH118', '12:30') };
        assert.throw(result, Error, 'Time is not a number.');
    });

});