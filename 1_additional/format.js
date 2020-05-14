const text = 'Расставить символы переноса строки так, чтобы строка была не длиннее 80 символов Расставить символы переноса строки так, чтобы строка была не длиннее 80 символов Расставить символы переноса строки так, чтобы строка была не длиннее 80 символов ';
let endOfLine = 79;
let lastSpacePosition = 0;
let textArray = text.split('');

for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] == ' '){ 
        if (i > endOfLine ) {
            textArray[lastSpacePosition] = `\n`;
            endOfLine = lastSpacePosition + 80;
        }
        lastSpacePosition = i;
    }
}

console.log(textArray.join(''));
