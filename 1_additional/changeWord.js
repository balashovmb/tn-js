const wordA = 'Java';
const wordB = 'JS';
const wordC = 'overloading';
const text = `The syntax of Java is largely influenced by C++. Unlike C++, \
Java does not support operator overloading. Java uses comments similar 
to those of C++.`

let sentencesArray = text.split('.');
let indicesSentencesWithC = [];

for (let index = 0; index < sentencesArray.length; index ++) {
    if (sentencesArray[index].indexOf(wordC) > -1 ){
        indicesSentencesWithC.push(index);
    }
}

indicesSentencesWithC.forEach(indexOfSentence => {
    const sentence = sentencesArray[indexOfSentence];
    let indexOfWordA = sentence.indexOf(wordA);
    if (indexOfWordA > -1) {
        const newSentence = [
            sentence.slice(0, indexOfWordA),
            wordB,
            sentence.slice(indexOfWordA + wordA.length)
        ].join('');
        sentencesArray[indexOfSentence] = newSentence;
    }
})
console.log(sentencesArray.join('.'));
