const stringWidth = require('string-width');


const checkStringWidth = (str) => {
  return stringWidth(str)/2;
}

module.exports = checkStringWidth;
