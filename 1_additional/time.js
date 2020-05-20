function convertTime(timeString){
    let [hours, minutes, dayPhase] = parseInput();

    if (!(validateInput())) {
        return 'Не верный ввод';
    };
    
    changeFormat();
    
    return (twoDigits(hours) + ':' + twoDigits(minutes));

    function parseInput() {
        const fragmentSign = /(\d{1,2}|am|pm)/g;
        let [hours, minutes, dayPhase] = timeString.match(fragmentSign);
        return [parseInt(hours), minutes, dayPhase];
    }

    function validateInput() {
        if ((hours > 12) || (minutes > 59) || (!dayPhase)) {
            return false;
        };
        return true;
    }

    function changeFormat() {
        if (hours == '12') {
            if (dayPhase == 'am') {
                return hours = 0;
            } else {
                return hours = 12;
            }
        };
        if (dayPhase == 'pm') {
            return hours += 12;
        };
    }

    function twoDigits(number) {
        if (number.toString().length < 2) {
            return ( '0' + number);
        } else {
            return number;
        }
    }
}

console.log(convertTime('1*1 am'));
console.log(convertTime('7-11 pm'));
console.log(convertTime('12 00 am'));
console.log(convertTime('12 00 pm'));
console.log(convertTime('25 1 am'));
console.log(convertTime('7-65 am'));
console.log(convertTime('1-1'));
console.log(convertTime('7-11 xm'));
