const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let begin = 0, end = 9;
    let point = "";
    let tmp = end;
    let rez = "";
    while(end <= expr.length){
        let i = end;
        while(i > begin){
            if(expr[i]+expr[i-1] == "01") point="."+point;
            if(expr[i]+expr[i-1] == "11") point="-"+point;
            if(expr[i]+expr[i-1] == "**") {rez+=" "; break;}
            i-=2;
        }
        for(let key in MORSE_TABLE){
            if (key == point) {rez+=MORSE_TABLE[key]; break;}
        }
        begin += 10;
        end+=10;
        point = "";
    }
    return rez;
}

module.exports = {
    decode
}