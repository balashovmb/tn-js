function parseTemplate(element, attrs) {
    const nodes = Array.from(element.querySelectorAll('[data-field]'));
    nodes.forEach(node => {
        const field = node.dataset.field;
        if (!attrs.hasOwnProperty(field)) {
            throw new Error(`Value of ${field} is not exists`);
        }
        node.innerText = attrs[field];
    });
}

parseTemplate(
    document.getElementById('item1'),
    {
        title: 'Hello world',
        description: 'The first program',
    }
)