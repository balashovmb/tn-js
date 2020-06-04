function parseTemplate(element, attrs) {
    if (!(element instanceof HTMLElement)) {
        throw new TypeError('First arg is not an HTTPElement');
    }
    const nodes = Array.from(element.querySelectorAll('[data-field]'));
    nodes.forEach(node => {
        const field = node.dataset.field;
        if (!attrs.hasOwnProperty(field)) {
            throw new Error(`Value of ${field} is not exists`);
        }
        node.innerText = attrs[field];
    });
}

