
const { add } = require('../index');

test('2 + 3 應該等於 5', () => {
  expect(add(2, 3)).toBe(5);
});
