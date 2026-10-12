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

// Match the subject of each illustration to the service, never its carousel position.
export const podologyImagesByService: Record<string, string> = Object.fromEntries(
  Object.entries({
    "Unhas encravadas": "Tratamento Profissional de Unha Encravada.png",
    "Órtese ungueal": "Aplicação de órtese corretiva na unha א.png",
    "Calos e calosidades": "Tratamento de Calo em Clínica Podológica.png",
    "Fissuras e rachaduras": "Pedicure Clínico com Tratamento do Calcanhar.png",
    "Micose e frieiras": "Tratamento Profissional da Unha do Pé.png",
    "Pés diabéticos": "Avaliação Podológica com Cuidado Profissional.png",
    "Podologia infantil": "Imagem do ChatGPT 12 de out. de 2026, 15_32_38.png",
    "Podologia geriátrica": "Avaliação Podológica com Cuidado Profissional.png",
    "Reconstrução de unhas": "Tratamento Podológico Profissional no Hálux.png",
    "Higienização e corte técnico": "Tratamento Podológico em Spa Clínico.png",
    "Hidratação profunda": "Massagem Relaxante para os Pés.png",
    "Bicho de pé": "Imagem do ChatGPT 12 de out. de 2026, 15_37_31.png",
    "Chulé e odor nos pés": "Pés Fedorentos com Bactérias Ilustradas.png",
    "Olho de peixe (verruga plantar)": "Imagem do ChatGPT 12 de out. de 2026, 15_39_14.png",
    "Alterações e infecções da pele": "Exame Podológico com Lesões Cutâneas.png",
    "Ressecamento dos pés": "Pedicure Relaxante no Spa.png",
    "Podologia preventiva": "Avaliação Podológica com Cuidado Profissional.png",
  }).map(([service, filename]) => [service, `/${encodeURIComponent(filename)}`]),
);

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
