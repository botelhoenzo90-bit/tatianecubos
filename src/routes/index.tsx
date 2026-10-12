import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDown, ArrowRight, Award, BadgeCheck, Check, ChevronDown,
  ChevronLeft, ChevronRight, Clock3, Footprints, Heart, HeartPulse, MapPin,
  Menu, MessageCircle, Microscope, Package, Play, ShieldCheck, Sparkles, Star,
  Stethoscope, Syringe, X, Mail, Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";

const siteUrl = "https://tatianecubos.com.br";
const whatsapp = "https://wa.me/5541999778493";
const instagram = "https://www.instagram.com/podologa_tati.cubos/";
const media = "/midia/";
const publicMedia = "/";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Tati Cubos | Podologia, Biomedicina Estética e Cosméticos em Curitiba" },
      { name: "description", content: "Podologia especializada e cuidados estéticos com Tatiane Cubos. Mais de 18 anos de experiência, atendimento em Curitiba, São José dos Pinhais e Telêmaco Borba." },
      { property: "og:title", content: "Tati Cubos — Podologia, Estética e Cosméticos" },
      { property: "og:description", content: "Cuidado especializado para a saúde e a beleza dos pés e da pele, com técnica, ciência e acolhimento." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#183f2f" },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
  }),
  component: Index,
});

const podologyServices = [
  { title: "Unhas encravadas", text: "Avaliação e manejo técnico da unha, com cuidado para aliviar o desconforto e orientar a prevenção de recorrências.", icon: Footprints },
  { title: "Órtese ungueal", text: "Recurso aplicado quando indicado para auxiliar na correção da curvatura da unha e acompanhar seu crescimento.", icon: ShieldCheck },
  { title: "Calos e calosidades", text: "Remoção técnica de áreas espessadas da pele, respeitando as condições e a sensibilidade de cada pé.", icon: HeartPulse },
  { title: "Fissuras e rachaduras", text: "Cuidado especializado para calcanhares ressecados, com orientação para manter a pele hidratada.", icon: Sparkles },
  { title: "Micose e frieiras", text: "Avaliação dos sinais nas unhas e na pele, com orientação e encaminhamento quando necessário.", icon: Microscope },
  { title: "Pés diabéticos", text: "Atenção preventiva e cuidadosa, com avaliação dos riscos e condutas adequadas para cada pessoa.", icon: BadgeCheck },
  { title: "Podologia infantil", text: "Atendimento paciente e acolhedor, respeitando o ritmo das crianças e suas necessidades.", icon: Heart },
  { title: "Podologia geriátrica", text: "Cuidado atento à mobilidade, ao conforto e às necessidades dos pés na maturidade.", icon: Stethoscope },
  { title: "Reconstrução de unhas", text: "Técnica estética aplicada após avaliação das condições da unha e da indicação para o caso.", icon: Sparkles },
  { title: "Higienização e corte técnico", text: "Limpeza e corte adequados para manter as unhas e os pés bem cuidados.", icon: Check },
  { title: "Hidratação profunda", text: "Cuidados para melhorar o ressecamento e preservar a maciez e a integridade da pele.", icon: HeartPulse },
  { title: "Bicho de pé", text: "Avaliação da região afetada e orientação sobre a conduta segura ou o encaminhamento adequado para cada caso.", icon: Microscope },
  { title: "Chulé e odor nos pés", text: "Orientações de higiene, secagem e cuidados com a pele para ajudar a controlar o odor e reduzir fatores associados.", icon: Sparkles },
  { title: "Olho de peixe (verruga plantar)", text: "Avaliação de lesões na sola dos pés para orientar o cuidado apropriado e, quando necessário, encaminhar para avaliação médica.", icon: Microscope },
  { title: "Alterações e infecções da pele", text: "Observação de sinais como vermelhidão, descamação ou desconforto, com orientação e encaminhamento profissional quando indicado.", icon: ShieldCheck },
  { title: "Ressecamento dos pés", text: "Cuidados para pele áspera e ressecada, com hidratação e recomendações para a rotina em casa.", icon: HeartPulse },
  { title: "Podologia preventiva", text: "Orientações e cuidados regulares para observar alterações e ajudar a evitar problemas recorrentes.", icon: ShieldCheck },
];

const aestheticServices = [
  { title: "Skinbooster", text: "Procedimento injetável voltado à hidratação da pele e à melhora de sua qualidade, após avaliação individual.", icon: Sparkles },
  { title: "Toxina botulínica", text: "Pode suavizar linhas de expressão em regiões específicas. A indicação depende de avaliação com profissional habilitado.", icon: Syringe },
  { title: "Melasma e manchas", text: "Avaliação estética para entender os fatores envolvidos e definir opções de cuidado adequadas para a pele.", icon: Microscope },
  { title: "Linhas finas e textura", text: "Plano individualizado para cuidar da textura, hidratação e aparência da pele, sem promessas de resultado.", icon: Heart },
  { title: "Firmeza e viço", text: "Opções de tratamento estético definidas conforme as características da pele e os objetivos de cada pessoa.", icon: Sparkles },
  { title: "Avaliação estética", text: "Uma conversa para conhecer suas queixas, analisar possibilidades e esclarecer benefícios, limites e cuidados.", icon: Stethoscope },
];

const testimonials = [
  { name: "Paciente · Unhas e pés", text: "A avaliação da unha encravada foi feita com muito cuidado. Entendi cada etapa do atendimento e saí com orientações para manter os pés bem cuidados." },
  { name: "Paciente · Estética facial", text: "Pude falar sobre manchas, textura e o que queria melhorar na pele. Recebi explicações claras sobre as possibilidades e sobre o que fazia sentido para mim." },
  { name: "Paciente · Cuidado contínuo", text: "O atendimento foi atencioso do começo ao fim. Gostei de ter um plano pensado para minhas necessidades, com recomendações práticas para continuar o cuidado em casa." },
];

const gallery = [
  { title: "Unha encravada", file: "antes-depois-unha-encravada.jpg", desc: "Comparativo antes e depois do tratamento de unha encravada" },
  { title: "Unha recuperada", file: "antes-depois-unha-recuperada.jpg", desc: "Evolução do cuidado com a unha" },
  { title: "Verruga plantar", file: "antes-depois-verruga-plantar.jpg", desc: "Comparativo de tratamento de verruga plantar" },
  { title: "Fissuras no calcanhar", file: "antes-depois-fissuras.jpg", desc: "Cuidado para fissuras e rachaduras" },
  { title: "Hidratação profunda", file: "antes-depois-hidratacao.jpg", desc: "Comparativo de hidratação profunda" },
  { title: "Reconstrução de unha", file: "reconstrucao-unha.jpg", desc: "Resultado de reconstrução ungueal" },
  { title: "Biossegurança", file: "biosseguranca.jpg", desc: "Atendimento com luvas e material descartável" },
  { title: "Avaliação inicial", file: "avaliacao-inicial.jpg", desc: "Avaliação podológica antes do procedimento" },
  { title: "Ozonioterapia", file: "equipamento-ozonioterapia.jpg", desc: "Equipamento utilizado em atendimentos indicados" },
  { title: "Linha própria", file: "emolipro-linha-propria.jpg", desc: "EmoliPro, cosmético podológico Tati Cubos" },
];

const faq = [
  ["O tratamento de unha encravada dói?", "A sensibilidade varia conforme cada caso. A Tati avalia a unha, explica a técnica indicada e trabalha com cuidado para minimizar o desconforto."],
  ["Quantas sessões são necessárias?", "Depende da condição, da evolução e dos cuidados em casa. Após avaliar seu caso, a Tati explica uma previsão individual, sem prometer um número fixo."],
  ["Quem tem diabetes pode fazer podologia?", "Pessoas com diabetes precisam de atenção específica. Informe seu histórico no agendamento para que a avaliação considere os cuidados e limites adequados."],
  ["Onde fica o consultório em Curitiba?", "O atendimento em Curitiba é no Centro Cívico, na Rua da Glória, 396 — Sala 4, mediante agendamento."],
  ["Você atende em casa?", "Sim, há atendimento domiciliar sob consulta de disponibilidade e região. Entre em contato para confirmar as condições do home care."],
  ["Você também faz manicure e pedicure?", "A atuação inclui manicure especializada e cuidados com unhas. Envie uma mensagem para confirmar o serviço desejado e a disponibilidade."],
  ["Atende crianças e idosos?", "Sim. O atendimento é adaptado à pessoa, com paciência e atenção às necessidades de crianças, idosos e pessoas que precisam de mais cuidado."],
  ["Como funciona a parte estética?", "Os procedimentos estéticos são definidos após avaliação. A Tati explica indicações, contraindicações, cuidados e resultados possíveis antes de qualquer decisão."],
];

function book(message = "Olá, Tati! Gostaria de agendar uma avaliação e saber qual atendimento é indicado para mim.") {
  window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [podologyIndex, setPodologyIndex] = useState(0);
  const [aestheticIndex, setAestheticIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPodologyIndex((index) => (index + 1) % podologyServices.length);
      setAestheticIndex((index) => (index + 1) % aestheticServices.length);
      setReviewIndex((index) => (index + 1) % testimonials.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Olá, Tati! Meu nome é ${form.name}. Telefone: ${form.phone}. E-mail: ${form.email || "não informado"}. Minha mensagem: ${form.message}`;
    book(message);
  };

  const visiblePodology = Array.from({ length: 3 }, (_, i) => podologyServices[(podologyIndex + i) % podologyServices.length]);
  const visibleAesthetic = Array.from({ length: 3 }, (_, i) => aestheticServices[(aestheticIndex + i) % aestheticServices.length]);

  return (
    <main className="tc-site">


      <section className="tc-hero" id="inicio">
        <div className="tc-hero-leaf tc-leaf-one"/><div className="tc-hero-leaf tc-leaf-two"/>
        <div className="tc-wrap tc-hero-grid">
          <div className="tc-hero-copy">
            <div className="tc-logo-placeholder"><img className="tc-official-logo" src="/Logotipo%20Tati%20Cubos%20Verde%20e%20Dourado.png" alt="Logotipo Tati Cubos"/><p className="tc-hero-region">Atendimento em Curitiba e região · São José dos Pinhais e Telêmaco Borba</p></div>
            <h1>Podologia e biomedicina estética com <em>cuidado, técnica e atenção a você.</em></h1>
            <p className="tc-hero-detail">Há mais de 18 anos na área da beleza e da saúde, uno experiência, conhecimento e escuta para cuidar dos pés e da pele. Atendo no Centro Cívico, em Curitiba, além de São José dos Pinhais e Telêmaco Borba, com avaliação individual e orientação clara em cada etapa.</p>
            <div className="tc-hero-actions"><Button variant="siteGold" size="site" onClick={() => book()}>Agendar atendimento <ArrowRight size={18}/></Button></div>

            
          </div>

        </div>
        
      </section>

      <section className="tc-marquee" aria-label="Informações sobre a profissional"><div className="tc-marquee-track"><span><span>Podologia desde 2018</span><i>✦</i><span>Biomedicina em 2025</span><i>✦</i><span>Atendimento humanizado</span><i>✦</i><span>Curitiba e região</span><i>✦</i><span><span>Podologia desde 2018</span><i>✦</i><span>Biomedicina em 2025</span><i>✦</i><span>Atendimento humanizado</span><i>✦</i><span>Curitiba e região</span><i>✦</i></div></section>

      <section className="tc-section tc-how" id="como-funciona"><div className="tc-wrap"><div className="tc-section-head tc-section-head-center"><span className="tc-kicker">COMO FUNCIONA</span><h2>Seu cuidado começa <em>com uma boa conversa.</em></h2><p>Um processo claro, acolhedor e pensado para entender o que você precisa.</p></div><div className="tc-how-grid"><article><span>01</span><h3>Você conta</h3><p>Fale sobre o que deseja cuidar, seus sintomas e suas expectativas.</p></article><article><span>02</span><h3>Avaliamos juntos</h3><p>A Tati entende seu caso, explica as opções e esclarece dúvidas.</p></article><article><span>03</span><h3>Plano individual</h3><p>Você recebe orientação sobre o atendimento indicado e os próximos cuidados.</p></article></div><Button variant="siteGold" size="site" onClick={() => book()}>Agendar uma conversa <ArrowRight size={17}/></Button></div></section>

      <section className="tc-section" id="sobre"><div className="tc-wrap tc-about-grid">
        <div className="tc-about-visual"><img src="/ba6d069e-c75a-4734-94f9-b40e8820a17d.png" alt="Tatiane Cubos, podóloga e biomédica" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement?.classList.add("tc-about-empty"); }}/><div className="tc-round-note"><span>TC</span><small>Cuidado feito com<br/>conhecimento e carinho</small></div></div>
        <div className="tc-about-copy"><span className="tc-kicker">SOBRE MIM</span><h2>Sou a Tati. <em>Seu cuidado começa pela escuta.</em></h2><p>Trabalho há mais de 18 anos na área da beleza e da saúde, com especialização em Podologia desde 2018 e formação em Biomedicina concluída em 2025.</p><p>Na podologia, meu foco é a saúde dos pés: prevenção, avaliação e cuidado de condições podológicas. Na área estética, a proposta é avaliar a pele e conversar sobre procedimentos possíveis, com informação clara sobre indicações, limites e cuidados.</p><p>Atendo do bebê ao idoso, adaptando o atendimento às necessidades de cada pessoa. Depois da consulta, o cuidado continua com orientações e acompanhamento pelo WhatsApp conforme o caso.</p>
          <div className="tc-values"><span><Check/> Plano personalizado</span><span><Check/> Formação técnica e científica</span><span><Check/> Orientações pós-atendimento</span><span><Check/> Linha própria de cosméticos</span></div><Button variant="siteGold" size="site" onClick={() => book("Olá, Tati! Gostaria de conhecer melhor seu trabalho e agendar uma avaliação.")}>Vamos conversar <ArrowRight size={17}/></Button>
        </div>
      </div></section>

      <section className="tc-section tc-product-line" id="linha-propria"><div className="tc-wrap tc-product-line-grid"><div className="tc-product-line-visual"><img src="/7d877015-9709-4f95-acb9-28200810ec0b.png" alt="Linha própria de produtos para cuidados podológicos" loading="lazy"/></div><div className="tc-product-line-copy"><span className="tc-kicker">LINHA PRÓPRIA</span><h2>Tati Cubos <em>cuidados que continuam em casa.</em></h2><p>Produtos selecionados para complementar a rotina de cuidado dos pés entre os atendimentos. Converse com a Tati para conhecer as opções e receber orientações de uso adequadas ao seu caso.</p><Button variant="siteGold" size="site" onClick={()=>book("Olá, Tati! Gostaria de conhecer a linha própria de produtos.")}>Conhecer os produtos <ArrowRight size={17}/></Button></div></div></section>



      <section className="tc-section tc-section-soft" id="especialidades"><div className="tc-wrap"><div className="tc-section-head"><span className="tc-kicker">ESPECIALIDADES</span><h2>Do cuidado dos pés à <em>saúde da pele.</em></h2><p>Dois campos de atuação, cada um com sua avaliação e atenção especializada. Escolha o que faz sentido para você.</p></div><div className="tc-specialty-grid">
        <a className="tc-specialty-card tc-foot-card" href="#podologia"><div className="tc-specialty-icon"><Footprints/></div><span className="tc-card-label">SAÚDE, CONFORTO E PREVENÇÃO</span><h3>Podologia</h3><p>Cuidados clínicos, preventivos e estéticos para unhas e pés, do atendimento infantil ao cuidado geriátrico.</p><span className="tc-card-bottom">Ver serviços <ArrowRight/></span><div className="tc-specialty-decoration"><Footprints/></div></a>
        <a className="tc-specialty-card tc-skin-card" href="#estetica"><div className="tc-specialty-icon"><Sparkles/></div><span className="tc-card-label">PELE, VIÇO E AUTOESTIMA</span><h3>Biomedicina estética</h3><p>Avaliação individual para conversar sobre procedimentos estéticos faciais e opções de cuidado para a pele.</p><span className="tc-card-bottom">Conhecer a estética <ArrowRight/></span><div className="tc-specialty-decoration"><Sparkles/></div></a>
      </div></div></section>

      <section className="tc-section tc-section-dark" id="estetica"><div className="tc-wrap">
        <div className="tc-aesthetic-layout"><div className="tc-aesthetic-intro"><span className="tc-kicker tc-kicker-light">BIOMEDICINA ESTÉTICA</span><h2>Procedimentos estéticos para <em>realçar sua beleza com naturalidade.</em></h2><p>Conheça possibilidades de cuidado para hidratação, linhas de expressão, manchas e qualidade da pele. Cada procedimento é conversado e indicado após uma avaliação individual, considerando seus objetivos, características e segurança.</p><div className="tc-aesthetic-image"><img src={media+"skinbooster.jpg"} alt="Imagem ilustrativa de procedimento estético facial" onError={(e)=>{e.currentTarget.style.display="none";e.currentTarget.parentElement?.classList.add("tc-aesthetic-empty")}}/><div className="tc-aesthetic-fallback"><Sparkles/><strong>Seu procedimento estético</strong><small>Adicione skinbooster.jpg em public/midia</small></div></div><p className="tc-small-note">Os procedimentos são realizados somente quando indicados e dentro das habilitações profissionais aplicáveis. Indicações, contraindicações e resultados variam conforme cada pessoa.</p><Button variant="siteGold" size="site" onClick={() => book("Olá, Tati! Gostaria de agendar uma avaliação de biomedicina estética.")}>Agendar avaliação estética <ArrowRight size={17}/></Button></div>
          <div className="tc-aesthetic-services"><div className="tc-carousel-head tc-carousel-head-light"><span>Possibilidades de cuidado</span></div><div className="tc-conveyor tc-conveyor-aesthetic"><div className="tc-conveyor-track">{[...aestheticServices,...aestheticServices].map((service,i)=>{const Icon=service.icon;return <article className="tc-aesthetic-card" key={service.title+"-"+i}><img className="tc-procedure-image" src={["https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=85","https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=85","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85"][i%3]} alt={service.title} loading="lazy"/><div className="tc-procedure-copy"><h3>{service.title}</h3><p>{service.text}</p></div></article>})}</div></div></div>
        </div></div></section>

      <section className="tc-section" id="podologia"><div className="tc-wrap">
        <div className="tc-section-head tc-section-head-row"><div><span className="tc-kicker">PODOLOGIA ESPECIALIZADA</span><h2>Tratamentos podológicos para <em>mais conforto e saúde.</em></h2></div><p>De unhas encravadas e calosidades à prevenção e aos cuidados com a pele: cada atendimento começa com uma avaliação cuidadosa e um plano adequado às suas necessidades.</p></div>
        <div className="tc-carousel-head"><span>Serviços de podologia</span></div>
        <div className="tc-conveyor tc-conveyor-podology"><div className="tc-conveyor-track">{[...podologyServices,...podologyServices].map((service,i)=>{const Icon=service.icon;return <article className="tc-service-card" key={service.title+"-"+i}><img className="tc-procedure-image" src={["https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=800&q=85","https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=85","https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=85"][i%3]} alt={"Imagem ilustrativa de "+service.title.toLowerCase()} loading="lazy"/><div className="tc-procedure-copy"><h3>{service.title}</h3><p>{service.text}</p></div><button onClick={() => book(`Olá, Tati! Gostaria de informações sobre ${service.title.toLowerCase()}.`)}>Saiba mais <ArrowRight size={15}/></button></article>})}</div></div>
        
        <div className="tc-podology-cta"><Button variant="siteGold" size="site" onClick={() => book("Olá, Tati! Gostaria de agendar uma avaliação de podologia.")}>Agendar avaliação de podologia <ArrowRight size={17}/></Button></div>
      </div></section>

      <section className="tc-section" id="depoimentos"><div className="tc-wrap"><div className="tc-section-head tc-section-head-center"><span className="tc-kicker">AVALIAÇÕES</span><h2>Experiências de cuidado com <em>atenção em cada detalhe.</em></h2><p>Relatos ilustrativos de pacientes sobre cuidados em Podologia e Biomedicina Estética.</p></div><div className="tc-reviews-layout"><div className="tc-reviews-conveyor"><div className="tc-reviews-track">{[...testimonials,...testimonials].map((review,i)=><article className="tc-review-feature" key={review.name+"-"+i}><div className="tc-review-quote">“</div><div className="tc-review-stars">{[1,2,3,4,5].map(n=><Star key={n} fill="currentColor"/>)}</div><p>“{review.text}”</p><div className="tc-review-author"><span>{review.name.slice(0,1)}</span><div><strong>{review.name}</strong></div></div></article>)}</div></div><div className="tc-review-side"><span className="tc-kicker">CUIDADO QUE VAI ALÉM DA SESSÃO</span><h3>Uma relação construída com <em>confiança e atenção.</em></h3><p>Cada atendimento começa com uma conversa e uma avaliação individual. O objetivo é que você compreenda o cuidado proposto e se sinta à vontade para tirar dúvidas.</p><div className="tc-review-benefit"><BadgeCheck/><span><strong>Escuta e respeito</strong><small>Você é atendido no seu ritmo.</small></span></div><div className="tc-review-benefit"><ShieldCheck/><span><strong>Orientação clara</strong><small>Você entende cada etapa do cuidado.</small></span></div><Button variant="siteGold" size="site" onClick={()=>book()}>Agendar meu atendimento <ArrowRight size={17}/></Button></div></div><p className="tc-disclaimer">Os depoimentos apresentados devem corresponder a relatos reais e autorizados. Se necessário, substitua os textos de demonstração pelos depoimentos aprovados pela profissional.</p></div></section>



      <section className="tc-section tc-video-future" id="video"><div className="tc-wrap tc-video-future-grid"><div><span className="tc-kicker">CONHEÇA MAIS DE PERTO</span><h2>Um pouco do cuidado <em>que você vai encontrar.</em></h2><p>Em breve, você poderá assistir a uma apresentação da Tati, conhecer o espaço e acompanhar os detalhes do atendimento.</p><Button variant="siteGold" size="site" onClick={()=>book("Olá, Tati! Gostaria de saber mais sobre seu espaço e os atendimentos.")}>Quero conhecer <ArrowRight size={16}/></Button></div><div className="tc-video-future-frame"><video controls playsInline preload="metadata" poster="/ba6d069e-c75a-4734-94f9-b40e8820a17d.png"><source src="/Biomedical_podiatrist_explaining%E2%80%A6_20261012111927.mp4" type="video/mp4"/>Seu navegador não suporta a reprodução de vídeo.</video></div></div></section>

      <section className="tc-section tc-section-soft" id="locais"><div className="tc-wrap"><div className="tc-section-head"><span className="tc-kicker">ONDE ATENDO</span><h2>O cuidado está mais perto <em>de você.</em></h2><p>Atendimento mediante agendamento em três cidades do Paraná. Consulte disponibilidade para atendimento domiciliar.</p></div><div className="tc-location-grid">
        {[["Curitiba","Centro Cívico","Rua da Glória, 396 — Sala 4","https://www.google.com/maps/search/?api=1&query=Rua+da+Gloria+396+Curitiba+PR"],["São José dos Pinhais","Região metropolitana","Rua Professora Lurdes Grutter Bonin, 1254 — Apto 102","https://www.google.com/maps/search/?api=1&query=Rua+Professora+Lurdes+Grutter+Bonin+1254+Sao+Jose+dos+Pinhais"],["Telêmaco Borba","Campos Gerais","Rua Vice-Prefeito Reginaldo Guedes Nocera, 439","https://www.google.com/maps/search/?api=1&query=Rua+Vice-Prefeito+Reginaldo+Guedes+Nocera+439+Telemaco+Borba"]].map(([city,region,address,map])=><article className="tc-location-card" key={city}><span className="tc-location-pin"><MapPin/></span><span className="tc-location-region">{region}</span><h3>{city}</h3><p>{address}</p><span className="tc-location-hours"><Clock3 size={15}/> Sob agendamento</span><a href={map} target="_blank" rel="noreferrer">Ver no mapa <ArrowRight size={15}/></a></article>)}</div><div className="tc-map-grid"><article><div className="tc-map-heading"><MapPin/><div><strong>Curitiba · Centro Cívico</strong><small>Rua da Glória, 396 — Sala 4</small></div></div><iframe title="Mapa de atendimento em Curitiba" src="https://maps.google.com/maps?q=Rua%20da%20Gloria%20396%20Curitiba%20PR&t=&z=14&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></article><article><div className="tc-map-heading"><MapPin/><div><strong>São José dos Pinhais</strong><small>Rua Professora Lurdes Grutter Bonin, 1254</small></div></div><iframe title="Mapa de atendimento em São José dos Pinhais" src="https://maps.google.com/maps?q=Rua%20Professora%20Lurdes%20Grutter%20Bonin%201254%20Sao%20Jose%20dos%20Pinhais&t=&z=14&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></article></div><div className="tc-homecare"><div className="tc-homecare-icon"><HeartHandshakeIcon/></div><div><span className="tc-kicker">LEVO O CUIDADO ATÉ VOCÊ</span><h3>Atendimento domiciliar (home care)</h3><p>Quando sair de casa não é a melhor opção, consulte a possibilidade de atendimento domiciliar, com materiais e protocolos de biossegurança adequados ao serviço.</p></div><Button variant="siteGold" size="site" onClick={()=>book("Olá, Tati! Gostaria de consultar a disponibilidade de atendimento domiciliar.")}>Consultar disponibilidade <ArrowRight size={16}/></Button></div></div></section>



      <section className="tc-section tc-gallery-section" id="galeria" style={{display:"none"}}><div className="tc-wrap"><div className="tc-section-head tc-section-head-row"><div><span className="tc-kicker">GALERIA</span><h2>Detalhes do cuidado, <em>na prática.</em></h2></div><p>Procedimentos, bastidores e evolução dos cuidados. Clique em uma imagem para ampliar.</p></div><div className="tc-gallery-grid">{gallery.map((item,i)=><button className="tc-gallery-item" key={item.file} onClick={()=>setLightbox(i)}><img src={media+item.file} alt={item.desc} onError={(e)=>{e.currentTarget.style.display="none";e.currentTarget.parentElement?.classList.add("tc-gallery-empty")}}/><span className="tc-gallery-fallback"><Footprints/><small>Adicionar imagem</small></span><span className="tc-gallery-caption"><strong>{item.title}</strong><span>Ver imagem <ArrowRight size={14}/></span></span></button>)}</div><p className="tc-gallery-note">Imagens de antes e depois devem ser reais, autorizadas e apresentadas sem edição enganosa. Resultados variam conforme cada caso.</p></div></section>

      <section className="tc-section tc-section-soft" id="duvidas"><div className="tc-wrap tc-faq-layout"><div className="tc-faq-intro"><span className="tc-kicker">DÚVIDAS FREQUENTES</span><h2>Vamos esclarecer <em>suas dúvidas?</em></h2><p>Se sua pergunta não estiver aqui, mande uma mensagem. A Tati responde pessoalmente.</p><Button variant="siteGold" size="site" onClick={()=>book("Olá, Tati! Tenho uma dúvida sobre os atendimentos.")}>Perguntar pelo WhatsApp <MessageCircle size={17}/></Button></div><div className="tc-faq-list">{faq.map(([q,a],i)=><article className={faqOpen===i?"tc-faq-item is-open":"tc-faq-item"} key={q}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)} aria-expanded={faqOpen===i}><span>{q}</span><ChevronDown/></button>{faqOpen===i&&<p>{a}</p>}</article>)}</div></div></section>

      <section className="tc-section tc-contact" id="contato"><div className="tc-wrap tc-contact-grid"><div><span className="tc-kicker tc-kicker-light">ENTRE EM CONTATO</span><h2>Seu próximo passo começa <em>com uma conversa.</em></h2><p>Conte o que você está sentindo ou o que gostaria de cuidar. Vamos conversar sobre o atendimento mais adequado para você.</p><div className="tc-contact-details"><a href={whatsapp} target="_blank" rel="noreferrer"><span><MessageCircle/></span><div><small>WHATSAPP</small><strong>(41) 99977-8493</strong></div><ArrowRight/></a><a href="mailto:contato@taticubos.com.br"><span><Mail/></span><div><small>E-MAIL</small><strong>contato@taticubos.com.br</strong></div><ArrowRight/></a><a href={instagram} target="_blank" rel="noreferrer"><span><Instagram/></span><div><small>INSTAGRAM</small><strong>@podologa_tati.cubos</strong></div><ArrowRight/></a></div><p className="tc-contact-hours"><Clock3 size={16}/> Atendimento sob agendamento · Curitiba e região</p></div><div className="tc-contact-form tc-contact-cta"><span className="tc-form-kicker">FALE DIRETAMENTE COM A TATI</span><h3>Vamos conversar?</h3><p>Agende seu atendimento ou tire suas dúvidas diretamente pelo WhatsApp. A Tati responde pessoalmente.</p><Button variant="siteGold" size="site" onClick={()=>book()}>Conversar pelo WhatsApp <ArrowRight size={17}/></Button><div className="tc-contact-trust"><ShieldCheck/><span>Atendimento individual, com escuta e orientação clara.</span></div></div></div></section>

      <footer className="tc-footer"><div className="tc-wrap"><div className="tc-footer-grid"><div className="tc-footer-about"><a className="tc-brand tc-brand-footer" href="#inicio"><span className="tc-brand-mark"><Footprints/></span><span><strong>Tati Cubos</strong><small>Podologia e Cosméticos</small></span></a><p>Cuidado especializado para a saúde e a beleza dos seus pés e da sua pele, com técnica, ciência e acolhimento.</p></div><div><strong>Navegue</strong><a href="#sobre">Sobre mim</a><a href="#podologia">Podologia</a><a href="#estetica">Biomedicina estética</a><a href="#produtos">Produtos</a><a href="#locais">Onde atendo</a></div><div><strong>Atendimento</strong><span>Curitiba · Centro Cívico</span><span>São José dos Pinhais</span><span>Telêmaco Borba</span><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp: (41) 99977-8493</a><a href="mailto:contato@taticubos.com.br">contato@taticubos.com.br</a></div></div><div className="tc-footer-bottom"><span>© 2026 Tati Cubos — Podologia e Cosméticos. Todos os direitos reservados.</span><span>Registro profissional informado: 170107510001/91</span></div><p className="tc-footer-note">Conteúdo informativo. Procedimentos dependem de avaliação individual; imagens e resultados não representam garantia de resultado.</p></div></footer>

      <button className="tc-whatsapp-float" onClick={()=>book()} aria-label="Agendar atendimento pelo WhatsApp"><img src="/whatsapp-logo-CuaKE2hX.png" alt="WhatsApp"/></button>
      {lightbox!==null&&<div className="tc-lightbox" role="dialog" aria-modal="true" aria-label={gallery[lightbox].title} onClick={()=>setLightbox(null)}><button className="tc-lightbox-close" aria-label="Fechar imagem"><X/></button><button className="tc-lightbox-prev" aria-label="Imagem anterior" onClick={e=>{e.stopPropagation();setLightbox((lightbox-1+gallery.length)%gallery.length)}}><ChevronLeft/></button><figure onClick={e=>e.stopPropagation()}><img src={media+gallery[lightbox].file} alt={gallery[lightbox].desc}/><figcaption>{gallery[lightbox].title}</figcaption></figure><button className="tc-lightbox-next" aria-label="Próxima imagem" onClick={e=>{e.stopPropagation();setLightbox((lightbox+1)%gallery.length)}}><ChevronRight/></button></div>}
    </main>
  );
}

function HeartHandshakeIcon() { return <HeartPulse size={28}/>; }
