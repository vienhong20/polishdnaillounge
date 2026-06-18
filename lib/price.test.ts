import { describe, it, expect } from "vitest";
import { displayPrice } from "./price";

describe("displayPrice", () => {
  it("formats cash price as whole dollars", () => {
    expect(displayPrice(20, "cash")).toBe("$20.00");
  });
  it("adds 2% for card and rounds to cents", () => {
    expect(displayPrice(20, "card")).toBe("$20.40");
    expect(displayPrice(99, "card")).toBe("$100.98");
  });
});
