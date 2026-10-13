import oleo from "@/assets/produto-oleo-cravo.png.asset.json";
import antimicotico from "@/assets/produto-antimicotico.png.asset.json";
import resultado1 from "@/assets/resultado-antimicotico-1.png.asset.json";
import resultado2 from "@/assets/resultado-antimicotico-2.png.asset.json";

export const brandProcess = {
  number: "937363405",
  depositedOn: "12/12/2024",
  decisionOn: "09/07/2026",
  decisionNumber: "1270288",
  status: "Aguardando processamento da concessão do registro de marca",
  granted: false,
  name: "TATI CUBOS PODOLOGIA E COSMÉTICOS",
};

export const exclusiveProducts = [
  {
    name: "Loção Antimicótica",
    image: antimicotico.url,
    heading: "Cuidado diário para unhas mais saudáveis",
    description: "Unhas amareladas, quebradiças ou com manchas merecem atenção. A Loção Antimicótica Tati Cubos integra a rotina de cuidado das unhas, com aplicação em gotas e orientação profissional.",
    benefits: ["Aplicação precisa diretamente na unha", "Cuidado com unhas frágeis e descamadas", "Rotina de proteção e cuidado diário"],
    details: "Alterações nas unhas podem ter diferentes causas. Suspeita de micose requer avaliação; o produto não substitui diagnóstico nem tratamento indicado por um profissional. Siga as instruções do rótulo.",
  },
  {
    name: "Óleo de Cravo",
    image: oleo.url,
    heading: "O cuidado dos pés encontra a natureza",
    description: "O Óleo de Cravo Tati Cubos faz parte da linha de cuidados para pés e unhas, desenvolvida a partir da experiência da profissional em podologia. Uma opção para complementar sua rotina, sempre conforme a orientação de uso.",
    benefits: ["Cuidado direcionado aos pés e às unhas", "Atenção às unhas fracas e quebradiças", "Conhecimento da podologia na rotina em casa"],
    details: "O cravo contém eugenol, composto estudado por suas propriedades antimicrobianas. Isso não comprova, por si só, a eficácia deste produto contra micoses. A proposta da marca valoriza a seleção de matérias-primas e a manipulação cuidadosa. Concentração, segurança e indicação devem ser conferidas no rótulo e com a profissional; não aplique óleo essencial puro por conta própria.",
  },
];

export const productResults = [
  { image: resultado1.url, alt: "Sequência enviada pela profissional: antes, remoção, limpeza e depois do cuidado de uma unha" },
  { image: resultado2.url, alt: "Comparativo enviado pela profissional de uma unha antes e depois do cuidado" },
];