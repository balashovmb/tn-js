function convertTime(timeString){
    let [hours, minutes, dayPhase] = parseInput();

    if (!(validateInput())) {
        return ('Не верный ввод');
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
        if (dayPhase == 'pm') {
            hours += 12;
        };
        if (hours == '24') {
            hours = 0;
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
console.log(convertTime('25 1 am'));
console.log(convertTime('7-65 am'));
console.log(convertTime('1-1'));
