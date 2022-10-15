const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = (""+n).split("");
  let result = [];
  let number;
  for (let i = 0; i < array.length; i++) {
    number = array.slice(0);
    number.splice(i, 1);
    result.push(Number(number.join('')));
  }
  return result.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
