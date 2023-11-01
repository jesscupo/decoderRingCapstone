// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function create_polybius_grid() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let polybius_grid = {};
    let column = 1;
    let row = 1;
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] === "i" || alphabet[i] === "j") {
                polybius_grid[alphabet[i]] = "42";
                column = 4;
                row = 2;
                }
      else {polybius_grid[alphabet[i]] = column.toString() + row.toString();}
      column += 1;
      if (column == 6) {column = 1; row += 1;}
  }
  return polybius_grid
  }

  const polybius_dict = create_polybius_grid();

  function decode_polybius(input) {
    let decoded = "";
    if (input === "42") {decoded = "(i/j)"}
    else {
    decoded = Object.keys(polybius_dict).find(key => polybius_dict[key] === input);}
    return decoded;
  }

  function polybius(input, encode = true) {
    input = input.toLowerCase();
    result_string = "";
    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {next_letter = input[i]}
        else  {next_letter = polybius_dict[input[i]]} 
        result_string += next_letter;
      }
    }
    else {
      if (input.replace(/\s+/g, '').length % 2 ==0) {
        for (let i = 0; i < input.length; i+=2) {
          if (input[i-2] === " ") {i = i-1;}
          if (input[i] === " ") {next_letter = " "}
          else {next_letter = decode_polybius(input[i]+input[i+1]);}
          result_string += next_letter;
        }
    }
    else {return false}
  }
    return result_string;
  }

  return {
    polybius,create_polybius_grid,decode_polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
