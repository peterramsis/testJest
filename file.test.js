const { expect, describe, it } = require("@jest/globals");
const { sum } = require("./functions/sum.js");

const name = "Peter Ramsis";
let arr = ["click", "item"];
describe("sum", () => {
    it("should return equla x plus y", () => {
        expect(sum(1, 2)).toBe(3);
    });

    it("adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toEqual(3);
    });
});

describe("match string", () => {
    it("search peter in text", () => {
        expect(name).toMatch(/Peter/);
    });
});

describe("undefine", () => {
    it("shoud return undefind", () => {
        var x;
        expect(x).toBeUndefined();
    });
});

describe("array", () => {
    it("containt", () => {
        expect(arr).toContain("item");
    });
});

describe("Truthy", () => {
    it("should return truthy", () => {
        var check = true;
        expect(check).toBeTruthy();
    });
});