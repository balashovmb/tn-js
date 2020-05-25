function printNode(node, deep, textContent = node.nodeValue) {
    const spaces = ' '.repeat(deep * 2);
    textContent = textContent || ' ';
    console.log(spaces + node.nodeName + ' ' + textContent);
}

function documentStructure1(node, deep = 1) {
    printNode(node, deep);
    if (node.childNodes) {
        deep++;
        for (let i = 0; i < node.childNodes.length; i++) {
            documentStructure1(node.childNodes[i], deep);
        }
    }

}
// documentStructure1(document);

function documentStructure2(node, deep = 1) {
    printNode(node, deep);
    node = node.firstChild;
    if (!node) {
        return;
    }
    deep++;
    do {
        documentStructure2(node, deep);
        node = node.nextSibling;
    } while (node);
}
// documentStructure2(document);


function documentStructure3(nodes, deep = 0) {
    deep++;
    Array.from(nodes).forEach(element => {
        printNode(element, deep);
        if (element.children) {
            documentStructure3(element.childNodes, deep)
        };
    })
    deep--;
}
documentStructure3(document.childNodes);