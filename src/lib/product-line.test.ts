import { describe, expect, it } from "vitest";
import { brandProcess } from "./product-line";

describe("Brand registration process supplied by the owner", () => {
  it("identifies the supplied INPI process", () => {
    expect(brandProcess.number).toBe("937363405");
  });
  it("keeps the deposit date", () => {
    expect(brandProcess.depositedOn).toBe("12/12/2024");
  });
  it("keeps the deferment decision date and number", () => {
    expect(brandProcess.decisionOn).toBe("09/07/2026");
    expect(brandProcess.decisionNumber).toBe("1270288");
  });
  it("does not treat the pending concession as a granted registration", () => {
    expect(brandProcess.granted).toBe(false);
  });
});