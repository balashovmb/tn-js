const firstOperandEl = document.getElementById('first-operand');
const secondOperandEl = document.getElementById('second-operand');
const calculateButton = document.getElementById('calculate-button');
const operationButtons = document.getElementsByClassName('operation-button');
const operationDiv = document.getElementById('operation');
const cancelButton = document.getElementById('cancel-button');
const digitButtons = document.getElementsByClassName('digit-button');
const operations = ['+', '-', '*', '/']
let firstOperand = '';
let secondOperand = '';
let operation;

function calculate() {
    const firstOperandValue = parseFloat(firstOperand);
    const secondOperandValue = parseFloat(secondOperand) || 0;
    if (!operation) { return };
    switch (operation) {
        case '+':
            firstOperand = firstOperandValue + secondOperandValue;
            break;
        case '-':
            firstOperand = firstOperandValue - secondOperandValue;
            break;
        case '*':
            firstOperand = firstOperandValue * secondOperandValue;
            break;
        case '/':
            firstOperand = firstOperandValue / secondOperandValue;
            break;
    }
    operation = '';
    operationDiv.innerHTML = '<br>';
    secondOperand = '0';
    showOperands();
}

function setOperation(event) {
    operation = event.key || event.target.innerText;
    operationDiv.innerText = operation;
    if (!(firstOperand)) {
        firstOperand = secondOperand;
        secondOperand = '0';
    }
    showOperands();
}

function cancel() {
    firstOperand = '';
    secondOperand = 0;
    operationDiv.innerHTML = '<br>';
    operation = '';
    showOperands();
}

function inputDigit(event) {
    const digit = event.key || event.target.innerText;
    if (secondOperand == '0') {
        secondOperand = digit;
    } else {
        secondOperand += digit;
    }
    event.target.blur();
    showOperands();
}

function showOperands() {
    firstOperandEl.value = firstOperand;
    secondOperandEl.value = secondOperand;
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (key == 'Enter') {
        calculate();
    }

    if (key == 'Escape') {
        cancel();
    }

    if (Number.isInteger(parseInt(key))) {
        inputDigit(event);
    }

    if (operations.includes(key)) {
        setOperation(event);
    }

    event.stopPropagation();
});

Array.from(operationButtons).forEach(function (element) {
    element.addEventListener('click', setOperation);
});

Array.from(digitButtons).forEach(function (element) {
    element.addEventListener('click', inputDigit);
});

calculateButton.addEventListener('click', calculate);
cancelButton.addEventListener('click', cancel);
