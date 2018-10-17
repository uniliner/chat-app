const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string value', () => {
    expect(isRealString(345)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('     ')).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    expect(isRealString(' ron is here ')).toBe(true);
  });
});
