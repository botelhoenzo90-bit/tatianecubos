import diploma from "@/assets/certificado-podologia-unopar.png.asset.json";
import unhas from "@/assets/certificado-unhas-maos-e-pes.png.asset.json";
import podopediatria from "@/assets/certificado-podopediatria.png.asset.json";
import acidos from "@/assets/certificado-acidos-e-peeling.png.asset.json";
import biomedicina from "@/assets/certificado-biomedicina-unicesumar.png.asset.json";

export type CredentialImage = {
  file: string;
  image: string;
  title: string;
  meta: string;
};

// Fotos reais dos documentos enviados pela profissional — nomes conferidos com ela.
export const credentialImages: CredentialImage[] = [
  {
    file: biomedicina.original_filename,
    image: biomedicina.url,
    title: "Bacharelado em Biomedicina",
    meta: "UniCesumar · Colação de grau em 25/04/2025",
  },
  {
    file: diploma.original_filename,
    image: diploma.url,
    title: "Superior em Podologia",
    meta: "Universidade Pitágoras Unopar · 2023",
  },
  {
    file: unhas.original_filename,
    image: unhas.url,
    title: "Unhas — Mãos e Pés",
    meta: "Saúde & Beleza · Editora Edit Brasil",
  },
  {
    file: podopediatria.original_filename,
    image: podopediatria.url,
    title: "Podopediatria",
    meta: "Carga horária de 8 horas · 2023",
  },
  {
    file: acidos.original_filename,
    image: acidos.url,
    title: "Ácidos e Peeling em Podologia",
    meta: "Instituto Ítalo Ventura · 2023",
  },
];
