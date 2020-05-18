let oneSpaced = '';
const text = prompt ("Введите текст");

for (let i = 0; i < text.length; i++) {
    if (text[i] == ' ' && text[i-1] == ' ') {
        continue;
    }
    oneSpaced += text[i];
}

alert('Текст с убранными лишними пробелами: ' + oneSpaced);
