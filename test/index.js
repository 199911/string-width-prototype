const { assert } = require('chai');

const check0x7f = require('../check0x7f.js');
const checkFullWidthCodePoint = require('../checkFullWidthCodePoint.js');
const checkStringWidth = require('../checkStringWidth.js');

const runTestcases = func => {
  it('should return 3 for 易樂𠒇', () => {
    const actual = func("易樂𠒇");
    assert.equal(actual, 3);
  });

  it('should return 1 for full-width space', () => {
    const actual = func("　");
    assert.equal(actual, 1);
  });

  it('should return 0.5 for half-width space', () => {
    const actual = func(" ");
    assert.equal(actual, 0.5);
  });

  it('should return 1 for emoji 😀', () => {
    const actual = func("😀");
    assert.equal(actual, 1);
  });

  it('should return 3 for 。。。', () => {
    const actual = func("。。。");
    assert.equal(actual, 3);
  });

  it('should reutrn 0.5 for Europian charactor like ÿ', () => {
    const actual = func("ÿ");
    assert.equal(actual, 0.5);
  });

  it('should reutrn 0.5 for Symbol ｡ (0xff61)', () => {
    const actual = func("｡");
    assert.equal(actual, 0.5);
  });
};

describe('check0x7f', () => {
  runTestcases(check0x7f);
});

describe('checkFullWidthCodePoint', () => {
  runTestcases(checkFullWidthCodePoint);
});

describe('checkStringWidth', () => {
  runTestcases(checkStringWidth);
});
