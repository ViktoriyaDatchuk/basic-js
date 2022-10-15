const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  let addString = '';
  if (options.addition !== undefined) {
    let addStringArray= [];
    options.addition = String(options.addition);
    if (!options.additionRepeatTimes) {
      addString = options.addition;
    } else {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        addStringArray.push(options.addition);
      }
      console.log(addStringArray);
      addString = addStringArray.join(options.additionSeparator);
    } 
  }
  let string = String(str);
  string += addString;
  let stringArray = [];
  let result;
  if (!options.repeatTimes) {
    result = string;
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      stringArray.push(string);
    }
    result = stringArray.join(options.separator);
  }
  return result;
}

module.exports = {
  repeater
};
