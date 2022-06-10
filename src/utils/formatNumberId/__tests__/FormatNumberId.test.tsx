import formatNumberId from '../index';

describe('formatNumberId', () => {
  it('should add space as 4º caractere', () => {
    expect(formatNumberId('1234')).toBe('123 4');
  });
});
