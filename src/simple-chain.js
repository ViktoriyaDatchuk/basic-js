const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.split('~~').length;
  },
  addLink(value) {
    if (value === undefined) {
      value = '';
    }
    if (this.chain !== '') {
      const arr = this.chain.split('~~');
      arr.push(`( ${value} )`);
      this.chain = arr.join('~~');
    } else {
      this.chain += `( ${value} )`;
    }
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || (position <= 0) || (position > this.chain.split('~~').length)) {
      this.chain = '';
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain = this.chain.split('~~').filter((item, index) => index !== position - 1).join('~~');
    console.log(this.chain.split('~~').length)
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    const result = this.chain;
    this.chain = '';
    return result;
  }
};

module.exports = {
  chainMaker
};
