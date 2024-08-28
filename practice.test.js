const practice = require("./practice");

test("'hello' returns 'Hello'", () => {
    expect(practice.capitalize("hello")).toBe("Hello");
});

test("'hello' return 'olleh'", () => {
    expect(practice.reverseString("hello")).toBe("olleh");
})