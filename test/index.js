const { assert } = require('chai');

const check0x7f = require('../check0x7f.js');

describe('check0x7f', () => {
  it('should return 3 for 易樂𠒇', () => {
    const actual = check0x7f("易樂𠒇");
    assert.equal(actual, 3);
  });

  it('should return 1 for full-width space', () => {
    const actual = check0x7f("　");
    assert.equal(actual, 1);
  });

  it('should return 0.5 for half-width space', () => {
    const actual = check0x7f(" ");
    assert.equal(actual, 0.5);
  });

  it('should return 1 for emoji 😀', () => {
    const actual = check0x7f("😀");
    assert.equal(actual, 1);
  });

  it('should return 3 for 。。。', () => {
    const actual = check0x7f("。。。");
    assert.equal(actual, 3);
  });

  it('should reutrn 0.5 for Europian charactor like ÿ', () => {
    const actual = check0x7f("ÿ");
    assert.equal(actual, 0.5);
  });

  it('should reutrn 0.5 for Symbol ｡ (0xff61)', () => {
    const actual = check0x7f("｡");
    assert.equal(actual, 0.5);
  });
})
