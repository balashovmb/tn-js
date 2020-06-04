describe('parseTemplate', () => {
    it('changes inner text of the element', () => {
        const testElement = document.getElementById('test-title');
        const innerText = testElement.innerText;
        parseTemplate(
            document.getElementById('item1'),
            {
                title: 'Hello world',
                description: 'The first program',
                someProp: 'value'
            }
        )
        expect(testElement.innerText).not.to.equal(innerText);
        expect(testElement.innerText).to.equal('Hello world');
    });
    describe('throws error when', () => {
        it('first arg is not html element', () => {
            const result = () => parseTemplate(
                '123',
                {
                    title: 'Hello world',
                    description: 'The first program',
                }
            )
            expect(result).to.throw(TypeError, 'First arg is not an HTTPElement');
        });
        it('throws error when second arg don\'t have property', () => {
            const result = () => parseTemplate(
                document.getElementById('item1'),
                {
                    title: 'Hello world',
                }
            )
            expect(result).to.throw(Error, 'Value of description is not exists');
        });
    });

})


// () => sut.run()).to.throw()