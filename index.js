const sum = require("./functions/sum");
import { describe, expect, test } from "@jest/globals";

describe("sum", () => {
    it("should return equla x plus y", () => {
        expect(sum(1, 2).toBe(3));
    });
});