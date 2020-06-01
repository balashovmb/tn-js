function prepareCanvas(canvasHeight = 40, canvasWidth = 40) {
    const canvasHolder = document.getElementById('canvasHolder');
    const table = document.createElement('table');
    table.cellPadding = 0;
    table.cellSpacing = 0;
    table.id = 'canvas';
    for (let rowNumber = 0; rowNumber < canvasHeight; rowNumber++) {
        let row = table.insertRow(-1);
        for (let cellNumber = 0; cellNumber < canvasWidth; cellNumber++) {
            row.insertCell(-1);
        }
    }
    canvasHolder.append(table);
}

function startDrawing() {
    const palette = document.getElementById('palette');
    const canvas = document.getElementById('canvas');

    canvas.addEventListener('click', click);
    palette.addEventListener('click', setColor);

    /**
     * @param {MouseEvent} event
     */
    function setColor(event) {
        if (event.target.tagName !== 'TD')
            return;
        const currentColorCell = document.getElementById(palette.dataset.color);
        currentColorCell.innerText = '';
        event.target.innerText = '*';
        palette.dataset.color = event.target.id;
    }

    /**
     * @param {MouseEvent} event
     */
    function click(event) {
        const brushColor = palette.dataset.color;
        if (event.target.tagName !== 'TD')
            return;

        event.target.style.backgroundColor = brushColor;
    }
}
document.addEventListener('DOMContentLoaded', prepareCanvas());
document.addEventListener('DOMContentLoaded', startDrawing());
