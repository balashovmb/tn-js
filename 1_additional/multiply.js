for (let j = 1; j < 10; j++) {
    let string;

    if (j > 1) { 
        string = j;
    } else {
        string = '';
    }
    for (let i = 1; i < 10; i++){
        let composition = i * j;
        if (composition < 10) {
            string += ' ' + composition + ' ';
        } else {
            string += composition + ' ';
        };
    };
    if (j == 1){ string = ' ' + string };
    console.log(string);
} ;
