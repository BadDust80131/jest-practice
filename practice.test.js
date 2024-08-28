const practice = require("./practice");

test("'hello' returns 'Hello'", () => {
    expect(practice.capitalize("hello")).toBe("Hello");
});

test("'hello' return 'olleh'", () => {
    expect(practice.reverseString("hello")).toBe("olleh");
})

test("1 + 1 is 2", () => {
    expect(practice.calc.add(1,1)).toBe(2);
})

test("2 - 1 is 1", () => {
    expect(practice.calc.subtract(2,1)).toBe(1);
})

test("2 * 2 is 4", () => {
    expect(practice.calc.multiply(2,2)).toBe(4);
})

test("2 / 2 is 1", () => {
    expect(practice.calc.divide(2,2)).toBe(1);
})