describe('parseTemplate', () => {
    const testElementRoot = document.getElementById('test-root');

    const propObject = {
        title: 'Hello world',
        description: 'The first program',
    };

    beforeEach(() => {
        testElementRoot.innerHTML = `<div id="item1">
            <h3 id="test-title" data-field="title">Some title</h3>
            <p id="test-decsription" data-field="description"></p>
        </div>`
    });

    after(() => {
        testElementRoot.innerHTML = '';
    });

    it('changes inner text of the element', () => {
        const testElement = document.getElementById('test-decsription');
        const innerText = testElement.innerText;
        parseTemplate(document.getElementById('item1'), propObject);
        expect(testElement.innerText).not.to.equal(innerText);
        expect(testElement.innerText).to.equal('The first program');
    });
    describe('throws error when', () => {
        it('first arg is not html element', () => {
            const result = () => parseTemplate('123', propObject);
            expect(result).to.throw(TypeError, 'First arg is not an HTTPElement');
        });
        it('second arg don\'t have required property', () => {
            const result = () => parseTemplate(
                document.getElementById('item1'),
                {
                    title: 'Hello world',
                }
            )
            expect(result).to.throw(Error, 'Value of description is not exists');
        });
    });
    it('don\' throws error when object have extra props', () => {
        const result = () => parseTemplate(
            document.getElementById('item1'),
            {
                title: 'Hello world',
                description: 'The first program',
                someProp: '123'
            }
        )
        expect(result).not.to.throw();
    });

})