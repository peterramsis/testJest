const { expect } = require("@jest/globals");
const { sum } = require("./functions/sum.js");

const name = "Peter Ramsis";

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toEqual(3);
});

test("search peter in text", () => {
    expect(name).toMatch(/Peter/);
});
// console.log(sum(5, 6));