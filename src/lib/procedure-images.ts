import aesthetic1 from "@/assets/aesthetic-procedure-1.jpg";
import aesthetic2 from "@/assets/aesthetic-procedure-2.jpg";
import aesthetic3 from "@/assets/aesthetic-procedure-3.jpg";
import aesthetic4 from "@/assets/aesthetic-procedure-4.jpg";
import aesthetic5 from "@/assets/aesthetic-procedure-5.jpg";
import aesthetic6 from "@/assets/aesthetic-procedure-6.jpg";
import podology1 from "@/assets/podology-procedure-1.jpg";
import podology2 from "@/assets/podology-procedure-2.jpg";
import podology3 from "@/assets/podology-procedure-3.jpg";
import podology4 from "@/assets/podology-procedure-4.jpg";
import podology5 from "@/assets/podology-procedure-5.jpg";
import podology6 from "@/assets/podology-procedure-6.jpg";
import podology7 from "@/assets/podology-procedure-7.jpg";
import podology8 from "@/assets/podology-procedure-8.jpg";
import podology9 from "@/assets/podology-procedure-9.jpg";
import resultadoAbdomen3Sessoes from "@/assets/resultado-estetica-abdomen-3-sessoes.webp.asset.json";
import resultadoAbdomen from "@/assets/resultado-estetica-abdomen.webp.asset.json";
import resultadoCicatrizAcne from "@/assets/resultado-estetica-cicatriz-acne.webp.asset.json";
import resultadoCicatrizMaos from "@/assets/resultado-estetica-cicatriz-maos.webp.asset.json";
import resultadoLiftPlasma from "@/assets/resultado-estetica-lift-plasma.webp.asset.json";
import resultadoLobulo from "@/assets/resultado-estetica-lobulo.webp.asset.json";
import resultadoMaosManchas from "@/assets/resultado-estetica-maos-manchas.webp.asset.json";
import resultadoPescoco from "@/assets/resultado-estetica-pescoco.webp.asset.json";

export const aestheticImages = [
  aesthetic1,
  aesthetic2,
  aesthetic3,
  aesthetic4,
  aesthetic5,
  aesthetic6,
];

export const podologyImages = [
  podology1,
  podology2,
  podology3,
  podology4,
  podology5,
  podology6,
  podology7,
  podology8,
  podology9,
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

// Ordem fixa (igual no servidor e no navegador) que embaralha estética e podologia sem repetir.
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
