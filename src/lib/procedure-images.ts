import resultadoAbdomen3Sessoes from "@/assets/resultado-estetica-abdomen-3-sessoes.webp.asset.json";
import resultadoAbdomen from "@/assets/resultado-estetica-abdomen.webp.asset.json";
import resultadoCicatrizAcne from "@/assets/resultado-estetica-cicatriz-acne.webp.asset.json";
import resultadoCicatrizMaos from "@/assets/resultado-estetica-cicatriz-maos.webp.asset.json";
import resultadoLiftPlasma from "@/assets/resultado-estetica-lift-plasma.webp.asset.json";
import resultadoLobulo from "@/assets/resultado-estetica-lobulo.webp.asset.json";
import resultadoMaosManchas from "@/assets/resultado-estetica-maos-manchas.webp.asset.json";
import resultadoPescoco from "@/assets/resultado-estetica-pescoco.webp.asset.json";

export const aestheticImages = [
  "/Consulta%20de%20Pele%20em%20Cl%C3%ADnica%20Est%C3%A9tica.png",
  "/Tratamento%20Facial%20em%20Cl%C3%ADnica%20de%20Est%C3%A9tica.png",
  "/Retrato%20sereno%20em%20cl%C3%ADnica%20est%C3%A9tica.png",
  "/Retrato%20de%20pele%20com%20hiperpigmenta%C3%A7%C3%A3o.png",
  "/Aplica%C3%A7%C3%A3o%20Est%C3%A9tica%20na%20Testa.png",
  "/Tratamento%20Facial%20em%20Cl%C3%ADnica%20de%20Luxo.png",
];

export const podologyImages = [
  "/P%C3%A9s%20Fedorentos%20com%20Bact%C3%A9rias%20Ilustradas.png",
  "/Massagem%20Relaxante%20para%20os%20P%C3%A9s.png",
  "/Imagem%20do%20ChatGPT%2012%20de%20out.%20de%202026%2C%2015_37_31.png",
  "/Tratamento%20Podol%C3%B3gico%20Profissional%20no%20H%C3%A1lux.png",
  "/Tratamento%20Profissional%20da%20Unha%20do%20P%C3%A9.png",
  "/Imagem%20do%20ChatGPT%2012%20de%20out.%20de%202026%2C%2015_32_38.png",
  "/Tratamento%20Podol%C3%B3gico%20em%20Spa%20Cl%C3%ADnico.png",
  "/Imagem%20do%20ChatGPT%2012%20de%20out.%20de%202026%2C%2015_29_58.png",
  "/Pedicure%20Cl%C3%ADnico%20com%20Tratamento%20do%20Calcanhar.png",
  "/Pedicure%20Relaxante%20no%20Spa.png",
  "/Aplica%C3%A7%C3%A3o%20de%20%C3%B3rtese%20no%20h%C3%A1lux.png",
  "/Aplica%C3%A7%C3%A3o%20de%20%C3%B3rtese%20corretiva%20na%20unha%20%D7%90.png",
  "/Tratamento%20Profissional%20de%20Unha%20Encravada.png",
  "/Tratamento%20de%20Calo%20em%20Cl%C3%ADnica%20Podol%C3%B3gica.png",
  "/Avalia%C3%A7%C3%A3o%20Podol%C3%B3gica%20com%20Cuidado%20Profissional.png",
  "/Imagem%20do%20ChatGPT%2012%20de%20out.%20de%202026%2C%2015_39_14.png",
  "/Exame%20Podol%C3%B3gico%20com%20Les%C3%B5es%20Cut%C3%A2neas.png",
];

export type ResultTag = "PODOLOGIA" | "ESTÉTICA";
export type ResultImage = { image: string; title: string; alt: string; tag: ResultTag };

const podologyResults: ResultImage[] = [
  {
    image: "/galeria-unha-encravada-thumb.webp",
    title: "Cuidado com unha encravada",
    alt: "Imagem de atendimento podológico para unha encravada",
    tag: "PODOLOGIA",
  },
  {
    image: "/galeria-unha-encravada-2-thumb.webp",
    title: "Avaliação das unhas",
    alt: "Imagem de cuidado podológico das unhas",
    tag: "PODOLOGIA",
  },
  {
    image: "/galeria-verruga-plantar-thumb.webp",
    title: "Cuidado podológico especializado",
    alt: "Imagem de atendimento relacionado à verruga plantar",
    tag: "PODOLOGIA",
  },
  {
    image: "/galeria-fissuras-thumb.webp",
    title: "Cuidado com fissuras",
    alt: "Imagem de atendimento podológico para fissuras nos pés",
    tag: "PODOLOGIA",
  },
  {
    image: "/galeria-fissuras-2-thumb.webp",
    title: "Saúde da pele dos pés",
    alt: "Imagem de cuidado podológico da pele dos pés",
    tag: "PODOLOGIA",
  },
  {
    image: "/galeria-reconstrucao-unha-thumb.webp",
    title: "Reconstrução de unha",
    alt: "Imagem de procedimento de reconstrução ungueal",
    tag: "PODOLOGIA",
  },
  {
    image: "/galeria-atendimento-thumb.webp",
    title: "Atendimento podológico",
    alt: "Imagem de atendimento podológico",
    tag: "PODOLOGIA",
  },
  {
    image: "/galeria-atendimento-2-thumb.webp",
    title: "Cuidado em consultório",
    alt: "Imagem de atendimento em podologia",
    tag: "PODOLOGIA",
  },
  {
    image: "/galeria-desencravamento-thumb.webp",
    title: "Desencravamento",
    alt: "Imagem de procedimento podológico de desencravamento",
    tag: "PODOLOGIA",
  },
];

const aestheticResults: ResultImage[] = [
  {
    image: resultadoCicatrizMaos.url,
    title: "Jato de plasma — cicatrizes nas mãos",
    alt: "Antes e depois do tratamento com jato de plasma em cicatrizes das mãos",
    tag: "ESTÉTICA",
  },
  {
    image: resultadoPescoco.url,
    title: "Jato de plasma — pescoço",
    alt: "Antes e depois do tratamento de manchas no pescoço",
    tag: "ESTÉTICA",
  },
  {
    image: resultadoMaosManchas.url,
    title: "Manchas nas mãos",
    alt: "Antes e depois do tratamento de manchas na pele das mãos",
    tag: "ESTÉTICA",
  },
  {
    image: resultadoLobulo.url,
    title: "Reparo do lobo da orelha",
    alt: "Antes e depois do reparo do lobo da orelha",
    tag: "ESTÉTICA",
  },
  {
    image: resultadoAbdomen3Sessoes.url,
    title: "Jato de plasma — abdômen",
    alt: "Antes e depois do jato de plasma no abdômen após três sessões",
    tag: "ESTÉTICA",
  },
  {
    image: resultadoAbdomen.url,
    title: "Jato de plasma — abdômen",
    alt: "Antes e depois do jato de plasma no abdômen",
    tag: "ESTÉTICA",
  },
  {
    image: resultadoCicatrizAcne.url,
    title: "Cicatrizes de acne no rosto",
    alt: "Antes e depois do tratamento de cicatrizes de acne no rosto",
    tag: "ESTÉTICA",
  },
  {
    image: resultadoLiftPlasma.url,
    title: "Lift plasma — contorno dos olhos",
    alt: "Antes e depois do lift plasma na região dos olhos",
    tag: "ESTÉTICA",
  },
];

function seededShuffle<T>(items: T[], seed: number): T[] {
  const out = [...items];
  let state = seed;
  for (let i = out.length - 1; i > 0; i -= 1) {
    state = (state * 1664525 + 1013904223) % 4294967296;
    const swap = state % (i + 1);
    const current = out[i] as T;
    const other = out[swap] as T;
    out[i] = other;
    out[swap] = current;
  }
  return out;
}

export const resultImages: ResultImage[] = seededShuffle(
  [...aestheticResults, ...podologyResults],
  20261012,
);
