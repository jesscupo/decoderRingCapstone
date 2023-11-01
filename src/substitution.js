// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function validateAlphabet(alphabet) {
    if (alphabet.length != 26) {return false}
    const duplicates = alphabet.split("").reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    anyDupes = Object.keys(duplicates).every(el => duplicates[el] === 1);
    return anyDupes;
  }

  function createSubstitutionDict (alphabet) {
    const orig_alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    let sub_dict = {};
    orig_alpha.forEach((key, i) => sub_dict[key] = alphabet[i]);
    return sub_dict;
  }

  function substitution(input, alphabet, encode = true) {
    if (alphabet === undefined) {return false}
    if (validateAlphabet(alphabet) === false) {return false}
    const sub_dict = createSubstitutionDict(alphabet);
    result = "";
      for (let i = 0; i < input.length; i++) {
        thisLetter = input[i].toLowerCase()
        if (thisLetter === " ") {result += " "}
        else {
          if (encode === true)
            {result += sub_dict[thisLetter]}
          else
            {result += Object.keys(sub_dict).find(key => sub_dict[key] === thisLetter);}
          }
      }
    return result;
  }

  return {
    substitution,createSubstitutionDict,validateAlphabet,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

