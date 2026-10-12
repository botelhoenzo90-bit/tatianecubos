import { describe, expect, it } from "vitest";
import { clinicPhone, clinicWhatsapp } from "./clinic-contact";

describe("Clinic contact", () => {
  it("uses the phone supplied by the clinic for booking", () => {
    expect(clinicPhone).toBe("+55 41 9977-8493");
    expect(clinicWhatsapp).toBe("https://wa.me/554199778493");
  });
});