const isFullwidthCodePoint = require('is-fullwidth-code-point');

const checkFullWidthCodePoint = (str) => {
  return [...str].map((c) => {
    return isFullwidthCodePoint(c.codePointAt(0)) ? 1 : 0.5;
  }).reduce((acc, v) => {
    return acc + v;
  });
}

module.exports = checkFullWidthCodePoint;
