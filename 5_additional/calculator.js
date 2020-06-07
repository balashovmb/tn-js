function calculator() {
    const firstOperand = document.getElementById('first-operand');
    const secondOperand = document.getElementById('second-operand');
    const calculateButton = document.getElementById('calculate-button');
    const operationButtons = document.getElementsByClassName('operation-button');
    const operationDiv = document.getElementById('operation');
    const cancelButton = document.getElementById('cancel-button');
    const digitButtons = document.getElementsByClassName('digit-button');

    function calculate() {
        const firstOperandValue = parseFloat(firstOperand.value);
        const secondOperandValue = parseFloat(secondOperand.value) || 0;
        const operation = operationDiv.innerText;
        secondOperand.value = '0';
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
        operationDiv.innerHTML = '<br>';
    }


    function setOperation(event) {
        operationDiv.innerText = event.target.innerText;
        if (!firstOperand.value) {
            firstOperand.value = secondOperand.value;
            secondOperand.value = 0;
        }
    }

    function cancel() {
        firstOperand.value = '';
        secondOperand.value = 0;
    }

    function inputDigit(event) {
        const digit = event.target.innerText;
        if (secondOperand.value == '0') {
            secondOperand.value = digit;
        } else {
            secondOperand.value += digit;
        }
    }

    Array.from(operationButtons).forEach(function (element) {
        element.addEventListener('click', setOperation);
    });

    Array.from(digitButtons).forEach(function (element) {
        element.addEventListener('click', inputDigit);
    });

    calculateButton.addEventListener('click', calculate);
    cancelButton.addEventListener('click', cancel);
}

calculator();