const firstOperand = document.getElementById('first-operand');
const secondOperand = document.getElementById('second-operand');
const calculateButton = document.getElementById('calculate-button');
const operationButtons = document.getElementsByClassName('operation-button');
const operationDiv = document.getElementById('operation');
const cancelButton = document.getElementById('cancel-button');
const digitButtons = document.getElementsByClassName('digit-button');
const operations = ['+', '-', '*', '/']

function calculate() {
    const operation = operationDiv.innerText;
    if (!operations.includes(operation)) { return };
    const firstOperandValue = parseFloat(firstOperand.value);
    const secondOperandValue = parseFloat(secondOperand.value) || 0;
    secondOperand.value = '0';
    operationDiv.innerHTML = '<br>';
    switch (operation) {
        case '+':
            firstOperand.value = firstOperandValue + secondOperandValue;
            break;
        case '-':
            firstOperand.value = firstOperandValue - secondOperandValue;
            break;
        case '*':
            firstOperand.value = firstOperandValue * secondOperandValue;
            break;
        case '/':
            firstOperand.value = firstOperandValue / secondOperandValue;
            break;
    }
}


function setOperation(event) {
    operationDiv.innerText = event.key || event.target.innerText;
    if (!(firstOperand.value)) {
        firstOperand.value = secondOperand.value;
        secondOperand.value = 0;
    }
}

function cancel() {
    firstOperand.value = '';
    secondOperand.value = 0;
    operationDiv.innerHTML = '<br>';
}

function inputDigit(event) {
    const digit = event.key || event.target.innerText;
    if (secondOperand.value == '0') {
        secondOperand.value = digit;
    } else {
        secondOperand.value += digit;
    }
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
