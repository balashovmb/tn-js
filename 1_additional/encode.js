const keyCodeA = 'a'.charCodeAt(0);
let key = 'sqnzbeuigvxtmhfpdcjyoakwlr';

let encoded = `qsnx gh yib uffz ftz zslj   yib  uftzbh bcs  fe nfmpoybcj  gy ksj 
bsjl  yf jbpscsyb yib mbh ecfm yib qflj  jfmbygmbj nsttbz  cbst mbh  shz  dognib 
bsybcj  gh yib tgybcsyocb   zocghu yigj pbcgfz  yib cbst mbh kbcb yib fhbj yisy 
ohzbcjyffz nfmpoybc pcfucsmmghu  shz yib dognib bsybcj kbcb yib fhbj yisy zgzh y `;

let decoded = '';
for (let index = 0; index < encoded.length; index++) {
    let charCode = key.indexOf(encoded[index]);
    if (charCode == -1) {
        decoded += ' ';
    } else {
        charCode += keyCodeA;
        decoded += String.fromCharCode(charCode);
    }
}

console.log(decoded);
