let reversed = '';
const word = prompt ("Введите слово");

for (let i = word.length; i >= 0; i--) {
    reversed += word.charAt(i);
}

alert('Реверсированное слово: ' + reversed);
