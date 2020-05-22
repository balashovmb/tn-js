/**
 * @param {string} text Текст
 * @returns [{string, number}] Массив объектов: слово и сумма кодов всех символов слова 
 */
function wordStat(text) {
    if (text.length == 0) { return [] };

    const wordsArray = text.split(' ');

    const result = wordsArray.map(word => ({ word, sum: codeOfSymbols(word) }));

    return result;
}

/**
 * @param {string} word Слово
 * @returns {number} Cумма кодов всех символов слова 
 */
function codeOfSymbols(word) {
    const reducerCode = (accum, letter) => (accum + letter.charCodeAt(0));

    return [...word].reduce(reducerCode, 0);
}