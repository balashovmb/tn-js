const keyCodeA = 'a'.charCodeAt(0);
const keyCodeZ = 'z'.charCodeAt(0);
const vowels = ["a", "e", "i", "o", "u", "y"];
let vowelCount = 0;
let consonantCount = 0;

const phrase = prompt ("Введите текст").toLowerCase();

[...phrase].forEach(c => {
    if (c.charCodeAt(0) >= keyCodeA && c.charCodeAt(0) <= keyCodeZ) {
        if (vowels.includes(c)) {
            vowelCount ++;
        } else {
            consonantCount ++;
        }
    }
});

alert(`В тексте ${vowelCount} гласных и ${consonantCount} согласных.`);
