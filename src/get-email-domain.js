const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result;
  for (let i = email.length; i > 0; i--) {
    if (email[i] === '@') {
      result = email.slice(i + 1);
      break;
    }
  }
  return result;
}

module.exports = {
  getEmailDomain
};
