const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  let result = '';
  // for (let i = 0; i < str.length;i++) {
  //   let letter = str[i];
  //   let line = str;
  //   str = str.replaceAll(str[i], '');
  //   result += (line.length  - str.length);
  //   result += letter;
  // }
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i + 1] === str[i]) {
      continue;
    } else if (count > 1) {
      result += count + str[i];
      count = 0;
    } else {
      result += str[i];
      count = 0;
    }
  }
  return result;
}

encodeLine('aaaatttt');

module.exports = {
  encodeLine
};
