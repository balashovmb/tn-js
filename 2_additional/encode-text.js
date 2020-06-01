function encodeText(text) {
    const textArray = text.split(' ');
    const dictionaryObj = createDictionaryObj(textArray)
    let encodedText = textArray.map((word) => (dictionaryObj[word]['code']));
    return {
        dictionary: Object.values(dictionaryObj),
        encodedText: encodedText.toString()
    };

    function createDictionaryObj(textArray) {
        let existedWords = [];
        let usedCodes = [];
        return textArray.reduce((acc, word) => {
            if (!existedWords.includes(word)) {
                existedWords.push(word);
                let code;
                do {
                    code = Math.random().toString(36).substr(2)
                } while (usedCodes.includes(code));
                usedCodes.push(code);
                acc[word] = { word, count: 1, code };
            }
            else {
                acc[word]['count']++;
            }
            return acc;
        }, {});
    }
}

text = 'Lorem ipsum ipsum dolor.'
console.log(encodeText(text));
