const { addTwoNumbers } = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(addTwoNumbers(1, 2)).toBe(3);
});

test('adds 2 + 3 to equal 5', () => {
  expect(addTwoNumbers(2, 3).toBe(5));
});
