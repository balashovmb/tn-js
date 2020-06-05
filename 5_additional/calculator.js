function calculator() {
    const firstOperand = document.getElementById('first-operand');
    const secondOperand = document.getElementById('second-operand');
    const calculateButton = document.getElementById('calculate-button');
    const operationButtons = document.getElementsByClassName('operation-button');
    const operationDiv = document.getElementById('operation');

    function calculate() {
        const firstOperandValue = parseFloat(firstOperand.value);
        const secondOperandValue = parseFloat(secondOperand.value);
        const operation = operationDiv.innerText;
        // firstOperand.value = firstOperandValue * secondOperandValue;
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
    }

    Array.from(operationButtons).forEach(function (element) {
        element.addEventListener('click', setOperation);
    });

    calculateButton.addEventListener('click', calculate);
}

calculator();
