function toReadable(n) {
    let zero = 'zero';
    let one = 'one';
    let two = 'two';
    let three = 'three';
    let four = 'four';
    let five = 'five';
    let six = 'six';
    let seven = 'seven';
    let eight = 'eight';
    let nine = 'nine';
    let ten = 'ten';
    let eleven = 'eleven';
    let twelve = 'twelve';
    let thirteen = 'thirteen';
    let fourteen = 'fourteen';
    let fifteen = 'fifteen';
    let sixteen = 'sixteen';
    let seventeen = 'seventeen';
    let eighteen = 'eighteen';
    let nineteen = 'nineteen';
    let twenty = 'twenty';
    let thirty = 'thirty';
    let forty = 'forty';
    let fifty = 'fifty';
    let sixty = 'sixty';
    let seventy = 'seventy';
    let eighty = 'eighty';
    let ninety = 'ninety';
    let hundred = ' hundred';
    let result = '';
    let st = '';
    let st2 = '';
    if (n > 100) {
        st = ' '
    }
    if (n > 10) {
        st2 = ' '
    }
    if (n >= 100) {
        let h = Math.trunc(n / 100)
        if (h === 9) {
            result = result + nine + hundred;
        }
        if (h === 8) {
            result = result + eight + hundred;
        }
        if (h === 7) {
            result = result + seven + hundred;
        }
        if (h === 6) {
            result = result + six + hundred;
        }
        if (h === 5) {
            result = result + five + hundred;
        }
        if (h === 4) {
            result = result + four + hundred;
        }
        if (h === 3) {
            result = result + three + hundred;
        }
        if (h === 2) {
            result = result + two + hundred;
        }
        if (h === 1) {
            result = result + one + hundred;
        }
    } 
    if (n >= 10) {
        if (n % 100 === 10) {
            result = result + st + ten;
        }
        if (n % 100 === 11) {
            result = result + st + eleven;
        }
        if (n % 100 === 12) {
            result = result + st + twelve;
        }
        if (n % 100 === 13) {
            result = result + st + thirteen;
        }
        if (n % 100 === 14) {
            result = result + st + fourteen;
        }
        if (n % 100 === 15) {
            result = result + st + fifteen;
        }
        if (n % 100 === 16) {
            result = result + st + sixteen;
        }
        if (n % 100 === 17) {
            result = result + st + seventeen;
        }
        if (n % 100 === 18) {
            result = result + st + eighteen;
        }
        if (n % 100 === 19) {
            result = result + st + nineteen;
        }
        if (n % 100 >= 20 && n % 100 < 30) {
            result = result + st + twenty;
        }
        if (n % 100 >= 30 && n % 100 < 40) {
            result = result + st + thirty;
        }
        if (n % 100 >= 40 && n % 100 < 50) {
            result = result + st + forty;
        }
        if (n % 100 >= 50 && n % 100 < 60) {
            result = result + st + fifty;
        }
        if (n % 100 >= 60 && n % 100 < 70) {
            result = result + st + sixty;
        }
        if (n % 100 >= 70 && n % 100 < 80) {
            result = result + st + seventy;
        }
        if (n % 100 >= 80 && n % 100 < 90) {
            result = result + st + eighty;
        }
        if (n % 100 >= 90 && n % 100 < 100) {
            result = result + st + ninety;
        }
        if (n % 10 === 9 && n % 100 !== 19) {
            result = result + st2 + nine;
        }
        if (n % 10 === 8 && n % 100 !== 18) {
            result = result + st2 + eight;
        }
        if (n % 10 === 7 && n % 100 !== 17) {
            result = result + st2 + seven;
        }
        if (n % 10 === 6 && n % 100 !== 16) {
            result = result + st2 + six;
        }
        if (n % 10 === 5 && n % 100 !== 15) {
            result = result + st2 + five;
        }
        if (n % 10 === 4 && n % 100 !== 14) {
            result = result + st2 + four;
        }
        if (n % 10 === 3 && n % 100 !== 13) {
            result = result + st2 + three;
        }
        if (n % 10 === 2 && n % 100 !== 12) {
            result = result + st2 + two;
        }
        if (n % 10 === 1 && n % 100 !== 11) {
            result = result + st2 + one;
        }
        if (n === 0) {
            result = zero;
        }
    }
    return result
}
