export type ClinicLocation = {
  city: string;
  region: string;
  address: string;
  coordinates: { lat: number; lng: number };
};

export const clinicLocations: ClinicLocation[] = [
  {
    city: "Curitiba",
    region: "Centro Cívico",
    address: "Rua da Glória, 396 — Sala 4",
    coordinates: { lat: -25.4193999, lng: -49.2670492 },
  },
  {
    city: "São José dos Pinhais",
    region: "Região metropolitana",
    address: "Rua Professora Lurdes Grutter Bonin, 1254 — Apto 102",
    coordinates: { lat: -25.5012611, lng: -49.1830263 },
  },
  {
    city: "Telêmaco Borba",
    region: "Campos Gerais",
    address: "Rua Vice-Prefeito Reginaldo Guedes Nocera, 439",
    coordinates: { lat: -24.3276964, lng: -50.6238252 },
  },
];

export function getClinicLocationMapsUrl(location: ClinicLocation) {
  const { lat, lng } = location.coordinates;
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

export function getClinicLocationEmbedUrl(location: ClinicLocation) {
  const { lat, lng } = location.coordinates;
  return `https://maps.google.com/maps?q=${lat},${lng}&t=&z=17&ie=UTF8&iwloc=&output=embed`;
}
