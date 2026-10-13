export type ClinicLocation = {
  city: string;
  region: string;
  address: string;
  mapQuery: string;
};

export const clinicLocations: ClinicLocation[] = [
  {
    city: "Curitiba",
    region: "Centro Cívico",
    address: "Rua da Glória, 396 — Sala 4",
    mapQuery: "Rua da Gloria 396 Curitiba PR",
  },
  {
    city: "São José dos Pinhais",
    region: "Região metropolitana",
    address: "Rua Professora Lurdes Grutter Bonin, 1254 — Apto 102",
    mapQuery: "Rua Professora Lurdes Grutter Bonin 1254 Sao Jose dos Pinhais PR",
  },
  {
    city: "Telêmaco Borba",
    region: "Campos Gerais",
    address: "Rua Vice-Prefeito Reginaldo Guedes Nocera, 439",
    mapQuery: "Rua Vice-Prefeito Reginaldo Guedes Nocera 439 Telemaco Borba PR",
  },
];

export function getClinicLocationMapsUrl(location: ClinicLocation) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`;
}

export function getClinicLocationEmbedUrl(location: ClinicLocation) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
}
