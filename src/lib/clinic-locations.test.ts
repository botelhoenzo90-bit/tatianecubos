import { describe, expect, it } from "vitest";
import {
  clinicLocations,
  getClinicLocationEmbedUrl,
  getClinicLocationMapsUrl,
} from "./clinic-locations";

describe("clinic locations", () => {
  it("lists the three cities where Tati attends", () => {
    expect(clinicLocations.map((location) => location.city)).toEqual([
      "Curitiba",
      "São José dos Pinhais",
      "Telêmaco Borba",
    ]);
  });

  it("keeps the Telêmaco Borba address shown on the site", () => {
    const telemaco = clinicLocations.find((location) => location.city === "Telêmaco Borba");
    expect(telemaco?.address).toBe("Rua Vice-Prefeito Reginaldo Guedes Nocera, 439");
    expect(telemaco?.region).toBe("Campos Gerais");
  });

  it("pins every city inside Paraná", () => {
    for (const location of clinicLocations) {
      expect(location.coordinates.lat).toBeGreaterThan(-26);
      expect(location.coordinates.lat).toBeLessThan(-23);
      expect(location.coordinates.lng).toBeGreaterThan(-52);
      expect(location.coordinates.lng).toBeLessThan(-48.5);
    }
  });

  it("builds a pin-pointing map for every city", () => {
    for (const location of clinicLocations) {
      const url = getClinicLocationEmbedUrl(location);
      expect(url).toContain("output=embed");
      expect(url).toContain(`${location.coordinates.lat},${location.coordinates.lng}`);
      expect(url).not.toContain("undefined");
      expect(getClinicLocationMapsUrl(location)).toContain(
        `query=${location.coordinates.lat},${location.coordinates.lng}`,
      );
    }
  });
});
