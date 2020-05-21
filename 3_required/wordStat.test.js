describe('wordStat', () => {
    it('empty test', () => {
    });
    it('Lorem ipsum dolor sit amet.', () => {
        const result = wordStat('Lorem ipsum dolor sit amet.');
        const value = [
            { word: 'Lorem', sum: 511 },
            { word: 'ipsum', sum: 558 },
            { word: 'dolor', sum: 544 },
            { word: 'sit', sum: 336 },
            { word: 'amet.', sum: 469 }
        ];
        assert.deepEqual(result, value);
    });
    it('Oneword', () => {
        const result = wordStat('Oneword');
        const value = [{ word: 'Oneword', sum: 734 }];
        assert.deepEqual(result, value);
    });
    it('*Empty string*', () => {
        const result = wordStat('');
        const value = [{ word: '', sum: 0 }];
        assert.deepEqual(result, value);
    });
    it('a', () => {
        const result = wordStat('a');
        const value = [{ word: 'a', sum: 97 }];
        assert.deepEqual(result, value);
    });
})