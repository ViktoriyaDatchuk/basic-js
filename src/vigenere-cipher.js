const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  } 
  encrypt(string, key) {
    if (string === undefined || key === undefined) throw new Error("Incorrect arguments!");
    let codeString = [];
    let codeKey = [];
    let codeResult = [];
    let result = [];
    for (let i = 0; i < key.length; i++) {
      codeKey.push(this.alphabet.indexOf(key[i].toLowerCase()));
    }
    for (let i = 0; i < string.length; i++) {
      if (this.alphabet.indexOf(string[i].toLowerCase()) !== -1) {
        codeString.push(this.alphabet.indexOf(string[i].toLowerCase()));
      } else {
        codeString.push(string[i]);
      }
    }
    let j = 0;
    for (let i = 0; i < codeString.length; i++) {
      if (Number.isInteger(codeString[i])) {
        codeResult[i] = (codeString[i] + codeKey[j]) % 26;
        j++;
      } else {
        codeResult[i] = codeString[i];
      }
      if (j === codeKey.length) j = 0;
    }
    for (let i = 0; i < codeResult.length; i++) {
      if (Number.isInteger(codeResult[i])) {
        result.push(this.alphabet[codeResult[i]].toUpperCase());
      } else {
        result.push(codeResult[i]);
      }
    }
    if (this.isDirect) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }
  decrypt(string, key) {
    if (string === undefined || key === undefined) throw new Error("Incorrect arguments!");
    let codeString = [];
    let codeKey = [];
    let codeResult = [];
    let result = [];
    for (let i = 0; i < key.length; i++) {
      codeKey.push(this.alphabet.indexOf(key[i].toLowerCase()));
    }
    for (let i = 0; i < string.length; i++) {
      if (this.alphabet.indexOf(string[i].toLowerCase()) !== -1) {
        codeString.push(this.alphabet.indexOf(string[i].toLowerCase()));
      } else {
        codeString.push(string[i]);
      }
    }
    let j = 0;
    for (let i = 0; i < codeString.length; i++) {
      if (Number.isInteger(codeString[i])) {
        let diff = (codeString[i] - codeKey[j]);
        if (diff < 0) {
          codeResult[i] = diff + 26;
        } else {
          codeResult[i] = diff;
        }
        j++;
      } else {
        codeResult[i] = codeString[i];
      }
      if (j === codeKey.length) j = 0;
    }
    for (let i = 0; i < codeResult.length; i++) {
      if (Number.isInteger(codeResult[i])) {
        result.push(this.alphabet[codeResult[i]].toUpperCase());
      } else {
        result.push(codeResult[i]);
      }
    }
    if (this.isDirect) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
