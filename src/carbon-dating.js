const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if ((typeof sampleActivity) !== 'string' || isNaN(sampleActivity) || sampleActivity === '' || !Number(sampleActivity) || Number(sampleActivity) < 0 || Number(sampleActivity) > 15) return false;
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  const logorfm = .693;
  const k = logorfm / HALF_LIFE_PERIOD;
  return Math.ceil((Math.log(MODERN_ACTIVITY / +sampleActivity)) / k);
}

module.exports = {
  dateSample
};
