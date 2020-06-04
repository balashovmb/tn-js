describe('encodeText', () => {
    const phrases = [
        { text: 'Lorem ipsum ipsum dolor.', countFirst: 1 },
        { text: 'один два три один один', countFirst: 3 },
        { text: 'слово', countFirst: 1 }
    ]
    phrases.forEach(phrase => {
        describe(phrase.text, () => {
            const result = encodeText(phrase.text)
            it('returns obj with keys dictionary, encodedText', () => {
                expect(result).to.have.property('dictionary');
                expect(result).to.have.property('encodedText');
            });
            it('dictionary item has correct word', () => {
                const firstWord = phrase.text.split(' ')[0];
                expect(result).to.have.deep.property('dictionary[0].word', firstWord);
            });
            it('dictionary item has correct word count', () => {
                expect(result).to.have.deep.property('dictionary[0].count', phrase.countFirst);
            });
            it('dictionary item has "code" key', () => {
                expect(result).to.have.deep.property('dictionary[0].code');
            });
            it('code of element in dictionary is equal to code in encodedText', () => {
                const firstEncoded = result.encodedText.split(',')[0];
                expect(firstEncoded).to.equal(result.dictionary[0].code);
            });
        });
    });
})
