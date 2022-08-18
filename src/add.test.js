const addTask = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(addTask()).toBe(3);
});
