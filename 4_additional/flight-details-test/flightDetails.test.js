describe('flightDetails', () => {
    const testElementRoot = document.getElementById('flight-details');
    
    beforeEach(() => {
        testElementRoot.innerHTML = '';
    });

    after(() => {
        testElementRoot.innerHTML = '';
    });

    it('shows details when flight is ok', () => {
        const flight = {
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

        expect(testElementRoot.innerText).to.include(
            'Отчет по рейсу BH118',
            'Номер билета: BH118-B50',
            'Место: 18',
            'Полное имя пассажира: Ivanov I. I.',
            'Регистрация не пройдена',
            'Номер билета: BH118-B51',
            'Место: 19',
            'Полное имя пассажира: Ivanova A. A.',
            'Регистрация пройдена',
        );
    });

    it('throws error when flight is incorrect', () => {
        expect(() => flightDetails('1')).to.throw(Error, 'Incorrect flight object');
    });

    it('shows details when flight tickets is empty', () => {
        const flight = {
            name: 'BH118',
            tickets: []
        };

        flightDetails(flight);

        expect(testElementRoot.innerText).to.include(
            'Отчет по рейсу BH118',
            'У данного рейса не продано ни одного билета.'
        );
    });
});