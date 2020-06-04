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
})