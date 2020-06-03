describe('mapOnReduce', () => {
    it('mapOnReduce([1, 2, 3, 4, 5], item => item * 2) is ok', () => {
        const result = mapOnReduce([1, 2, 3, 4, 5], item => item * 2);
        assert.deepEqual(result, [2, 4, 6, 8, 10]);
    });
    it('mapOnReduce([], item => item * 2) is ok', () => {
        const result = mapOnReduce([], item => item * 2);
        assert.deepEqual(result, []);
    });
    it('throw error when first argument is not an array', () => {
        const result = () => { mapOnReduce('', item => item > 2) };
        assert.throw(result, TypeError, 'First arg is not an array');
    });
    it('throw error when second argument is not a function', () => {
        const result = () => { mapOnReduce([1, 2, 3, 4, 5], 'string') };
        assert.throw(result, TypeError, 'Second arg is not a function');
    });
})