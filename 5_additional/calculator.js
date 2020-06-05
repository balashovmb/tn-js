function calculator() {
    const firstOperand = document.getElementById('first-operand');
    const secondOperand = document.getElementById('second-operand');
    const calculateButton = document.getElementById('calculate-button');

    function calculate() {
        const firstOperandValue = parseFloat(firstOperand.value);
        const secondOperandValue = parseFloat(secondOperand.value);
        firstOperand.value = firstOperandValue * secondOperandValue;
    }

    calculateButton.addEventListener('click',calculate);
}

calculator();