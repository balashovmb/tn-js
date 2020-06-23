describe('filterOnReduce', () => {
    it('filterOnReduce([1, 2, 3, 4, 5], item => item > 2) is ok', () => {
        const result = filterOnReduce([1, 2, 3, 4, 5], item => item > 2);
        assert.deepEqual(result, [3, 4, 5]);
    });
    it('filterOnReduce([], item => item > 2) is ok', () => {
        const result = filterOnReduce([], item => item > 2);
        assert.deepEqual(result, []);
    });
    it('throw error when first argument is not an array', () => {
        const result = () => filterOnReduce('', item => item > 2);
        assert.throw(result, TypeError, 'First arg is not an array');
    });
    it('throw error when second argument is not a function', () => {
        const result = () => filterOnReduce([1, 2, 3, 4, 5], 'string');
        assert.throw(result, TypeError, 'Second arg is not a function');
    });
})