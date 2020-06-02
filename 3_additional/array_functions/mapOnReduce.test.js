describe('mapOnReduce', () => {
    it('empty test', () => {
    });
    it('[1,2,3,4,5]', () => {
        const result = mapOnReduce([1, 2, 3, 4, 5], item => item * 2);
        assert.deepEqual(result, [2, 4, 6, 8, 10]);
    });
})