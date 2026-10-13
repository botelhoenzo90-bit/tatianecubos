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

  it("keeps the Telêmaco Borba address shown and mapped the same", () => {
    const telemaco = clinicLocations.find((location) => location.city === "Telêmaco Borba");
    expect(telemaco?.address).toBe("Rua Vice-Prefeito Reginaldo Guedes Nocera, 439");
    expect(telemaco?.region).toBe("Campos Gerais");
  });

  it("builds a embeddable map for every city", () => {
    for (const location of clinicLocations) {
      const url = getClinicLocationEmbedUrl(location);
      expect(url).toContain("output=embed");
      expect(url).toContain(encodeURIComponent(location.mapQuery));
      expect(url).not.toContain("undefined");
      expect(getClinicLocationMapsUrl(location)).toContain("maps/search/?api=1&query=");
    }
  });
});
