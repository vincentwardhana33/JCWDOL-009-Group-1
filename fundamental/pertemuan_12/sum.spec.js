const sum = require('./sum.js');

test("Testing sum function", () => {
    expect(sum.sum(1, 2)).toBe(3);
    expect(sum.sum(2, 3)).toBe(5);
})

