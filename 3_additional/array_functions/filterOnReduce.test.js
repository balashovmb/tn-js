describe('filterOnReduce', () => {
    it('empty test', () => {
    });
    it('[1,2,3,4,5]', () => {
        const result = filterOnReduce([1, 2, 3, 4, 5], item => item > 2);
        assert.deepEqual(result, [3, 4, 5]);
    });
    it('throw error if first argument is not an array', () => {
        assert.throws(filterOnReduce('', item => item > 2));
    });
})

