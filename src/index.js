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
  let morse_str = '';

  for (let i = 0; i < expr.length; i += 2) {

    if (expr.substr(i, 2) === '10') {
      morse_str = morse_str + '.';
    } else if (expr.substr(i, 2) === '11') {
      morse_str = morse_str + '-';
    } else if (expr.substr(i, 2) === '00') {
      morse_str = morse_str + 'n';
    } else {
      morse_str = morse_str + ' ';
    }
  }

  let letter_str = '';

  for (let i = 0; i < morse_str.length; i += 5) {

    let key_str = '';
    let morse_letter = morse_str.substring(i, i + 5);

    if (morse_letter.charAt(0) === 'n') {

      morse_letter = morse_letter.replace(/n/g, '');
      letter_str = letter_str + MORSE_TABLE[morse_letter];
    } else if (morse_letter.charAt(0) === ' ') {
      morse_letter = morse_letter.replace('     ', ' ');
      letter_str = letter_str + morse_letter;
    } else {
      letter_str = letter_str + MORSE_TABLE[morse_letter];
    }
  }
  return (letter_str);
}

module.exports = {
    decode
}
