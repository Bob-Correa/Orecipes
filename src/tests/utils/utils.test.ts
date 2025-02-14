import { describe, expect, test } from 'vitest';
import { sub, sum } from '../../utils/utils';

describe('tests structure sum', () => {
  test('sum should be a function', () => {
    expect(sum).toBeTypeOf('function');
  });
});

describe('test execution sum', () => {
  // on va tester avec 2 et 2 et on va s'assurer que ça renvoie 4
  test('sum called with parameters 2 and 2 should return 4', () => {
    // ARRANGE
    const fakeNb1 = 2;
    const fakeNb2 = 2;

    // ACT
    const result = sum(fakeNb1, fakeNb2);

    // ASSERT
    expect(result).toBe(4);
  });

  // on va tester avec 2 et 2 et on va s'assurer que ça renvoie 4
  test('sum called with parameters 2 and -2 should return 0', () => {
    expect(sum(2, -2)).toBe(0);
  });
});

describe('function sub', () => {
  test('function sub should existe', () => {
    expect(sub).toBeDefined();
  });

  test('function sub executed with 2 and 2 should return 0', () => {
    expect(sub(2, 2)).toBe(0);
  });
  test('function sub executed with 2 and 2 should return 0', () => {
    expect(sub(2, 1)).toBe(1);
  });
});
