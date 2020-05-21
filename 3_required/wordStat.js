/**
 * @param {string} text Текст
 * @returns [{string, number}] Массив объектов: слово и сумма кодов всех символов слова 
 */
function wordStat(text) {
    const wordsArray = text.split(' ');

    const reducerText = (accum, word) => (
        accum.concat({ word, sum: codeOfSymbols(word) })
    );

    const result = wordsArray.reduce(reducerText, []);

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