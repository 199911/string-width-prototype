// If it is charact with ascii code <= 127, return 0.5
const check0x7f = (str) => {
  return [...str].map((c) => {
    return c.charCodeAt(0) <= 0x7f ? 0.5 : 1;
  }).reduce((acc, v) => {
    return acc + v;
  });
}

module.exports = check0x7f;
