/**
 * @param {array} arr Массив чисел
 * @returns {Object} {count: number, sum: number}  Количество и сумма пожолительных чисел
 */
function sumOfPositive(arr) {
    const positiveArray = arr.filter(element => element >= 0);
    const count = positiveArray.length;
    const sum = positiveArray.reduce((a, b) => a + b, 0);

    return { count, sum };
}
