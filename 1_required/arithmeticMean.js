let currentInput;
let numberInputs = 0;
let arithmeticMean = 0;
let sum = 0;
do {
    currentInput = prompt('Введите число');
    if (!isNaN(currentInput) && currentInput !== '') {
        numberInputs++;
        sum += parseFloat(currentInput);
        arithmeticMean = sum / numberInputs;
    }
} while (currentInput);

alert (
    `Количество чисел: ${numberInputs}, ` +
    `сумма: ${sum}, ` +
    `среднее арифметическое: ${arithmeticMean}`
);
