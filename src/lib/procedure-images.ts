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

export type ResultImage = { image?: string; title: string; alt: string };

const podologyResults: ResultImage[] = [
  {
    image: "/galeria-unha-encravada-thumb.webp",
    title: "Unha encravada",
    alt: "Antes e depois de tratamento de unha encravada",
  },
  {
    image: "/galeria-verruga-plantar-thumb.webp",
    title: "Verruga plantar",
    alt: "Antes e depois de tratamento de verruga plantar",
  },
  {
    image: "/galeria-fissuras-thumb.webp",
    title: "Fissuras",
    alt: "Antes e depois de tratamento de fissuras no pé",
  },
  {
    image: "/galeria-reconstrucao-unha-thumb.webp",
    title: "Reconstrução de unha",
    alt: "Antes e depois de reconstrução de unha",
  },
  {
    image: "/galeria-atendimento-thumb.webp",
    title: "Atendimento podológico",
    alt: "Registro de atendimento podológico",
  },
  {
    image: "/galeria-unha-encravada-2-thumb.webp",
    title: "Unha encravada",
    alt: "Segundo registro de tratamento de unha encravada",
  },
  {
    image: "/galeria-fissuras-2-thumb.webp",
    title: "Fissuras",
    alt: "Segundo registro de tratamento de fissuras no pé",
  },
  {
    image: "/galeria-atendimento-2-thumb.webp",
    title: "Atendimento podológico",
    alt: "Segundo registro de atendimento podológico",
  },
];

const aestheticResults: ResultImage[] = [
  {
    image: resultadoCicatrizMaos.url,
    title: "Jato de plasma — cicatrizes nas mãos",
    alt: "Antes e depois do tratamento com jato de plasma em cicatrizes das mãos",
  },
  {
    image: resultadoPescoco.url,
    title: "Jato de plasma — pescoço",
    alt: "Antes e depois do tratamento de manchas no pescoço",
  },
  {
    image: resultadoMaosManchas.url,
    title: "Manchas nas mãos",
    alt: "Antes e depois do tratamento de manchas na pele das mãos",
  },
  {
    image: resultadoLobulo.url,
    title: "Reparo do lobo da orelha",
    alt: "Antes e depois do reparo do lobo da orelha",
  },
  {
    image: resultadoAbdomen3Sessoes.url,
    title: "Jato de plasma — abdômen",
    alt: "Antes e depois do jato de plasma no abdômen após três sessões",
  },
  {
    image: resultadoAbdomen.url,
    title: "Jato de plasma — abdômen",
    alt: "Antes e depois do jato de plasma no abdômen",
  },
  {
    image: resultadoCicatrizAcne.url,
    title: "Cicatrizes de acne no rosto",
    alt: "Antes e depois do tratamento de cicatrizes de acne no rosto",
  },
  {
    image: resultadoLiftPlasma.url,
    title: "Lift plasma — contorno dos olhos",
    alt: "Antes e depois do lift plasma na região dos olhos",
  },
];

// Ordem fixa (mesma no servidor e no navegador) que embaralha estética e podologia sem repetir.
function seededShuffle<T>(items: T[], seed: number): T[] {
  const out = [...items];
  let state = seed;
  for (let i = out.length - 1; i > 0; i -= 1) {
    state = (state * 1664525 + 1013904223) % 4294967296;
    const swap = state % (i + 1);
    [out[i], out[swap]] = [out[swap], out[i]];
  }
  return out;
}

export const resultImages: ResultImage[] = seededShuffle(
  [...aestheticResults, ...podologyResults],
  20261012,
);
