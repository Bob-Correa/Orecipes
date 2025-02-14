import { expect, test } from 'vitest';
import { sum } from '../../utils/utils';

// on va tester avec 2 et 2 et on va s'assurer que ça renvoie 4
test('sum called with parameters 2 and 2 should return 4', () => {
  // je m'attend à ce que la sum de 2 et 2 renvoye 4
  expect(sum(2, 2)).toBe(4);
});

// on va tester avec 2 et 2 et on va s'assurer que ça renvoie 4
test('sum called with parameters 2 and -2 should return 0', () => {
  expect(sum(2, -2)).toBe(0);
});
