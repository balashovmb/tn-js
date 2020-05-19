const phrase = 'Lorem ipsum dolor sit amet.';
function wordAndCode(phrase) {
    let result = [];

    let wordsArray = phrase.split(' ');

    wordsArray.forEach( word => {
        let sum = 0;
        [...word].forEach( letter => {
            sum += letter.charCodeAt(0);
        })
        result.push({ word, sum })
    })

    return(result);
}

console.log(wordAndCode(phrase));