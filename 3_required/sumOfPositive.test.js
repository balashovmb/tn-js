describe('sumOfPositive', () => {
    it('empty test', () => {
    });
    it('[-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]', () => {
        const result = sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]);
        assert.deepEqual(result, { count: 5, sum: 357 });
    });
    it('[-4, -10, -20]', () => {
        const result = sumOfPositive([-4, -10, -20]);
        assert.deepEqual(result, { count: 0, sum: 0, });
    });
    it('[1, 2, 0, -1]', () => {
        const result = sumOfPositive([1, 2, 0, -1]);
        assert.deepEqual(result, { count: 3, sum: 3, });
    });
    it('[]', () => {
        const result = sumOfPositive([]);
        assert.deepEqual(result, { count: 0, sum: 0, });
    });
})