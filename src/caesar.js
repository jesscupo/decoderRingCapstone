// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function alphabetPosition(letter) {
  return alphabet.indexOf(letter.toLowerCase());
}

function letterFromIndex(letterIndex) {
  return alphabet[letterIndex];
}

function caesar(input, shift, encode = true) {
    falseReturns = [undefined, null, 0, -26, 26];
    let rtn = "";
    let shiftSign = 1;
    if (falseReturns.includes(shift)) {return false};
    if(encode === false) {shiftSign = -1;}
    for (let i = 0; i < input.length; i++) {
      let thisLetter = input[i];
      let thisIndex = alphabetPosition(thisLetter);
      if (thisIndex === -1) 
          {rtn+=input[i];}
      else 
          {
            let shiftedIndex = thisIndex + shift*shiftSign;
            if (shiftedIndex > 25) {shiftedIndex -= 26}
            else if (shiftedIndex < 0) {shiftedIndex += 26}
            rtn += letterFromIndex(shiftedIndex);
          }
    }
    return rtn;
  }

  return {
    caesar,
    alphabetPosition,
    letterFromIndex
  };
})();


module.exports = { caesar: caesarModule.caesar };

