describe('parseTemplate', () => {
    it('changes inner text of the element', () => {
        const testElement = document.getElementById('test-title');
        const innerText = testElement.innerText;
        parseTemplate(
            document.getElementById('item1'),
            {
                title: 'Hello world',
                description: 'The first program',
            }
        )
        expect(testElement.innerText).not.to.equal(innerText);
    });

    it('throws error when first arg is not html element', () => {
        const result = () => parseTemplate(
            '123',
            {
                title: 'Hello world',
                description: 'The first program',
            }
        )
        expect(result).to.throw(TypeError, 'First arg is not an HTTPElement');
    });

})


// () => sut.run()).to.throw()