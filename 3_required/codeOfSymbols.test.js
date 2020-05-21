describe('codeOfSymbols', () => {
    it('empty test', () => {
    });
    it('Lorem', () => {
        const result = codeOfSymbols('Lorem');
        assert.equal(result, 511);
    });
    it('ipsum', () => {
        const result = codeOfSymbols('ipsum');
        assert.equal(result, 558);
    });
    it('*empty string*', () => {
        const result = codeOfSymbols('');
        assert.equal(result, 0);
    });
})
