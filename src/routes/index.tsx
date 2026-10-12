import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowDown, ArrowRight, Award, BadgeCheck, Check, ChevronDown,
  ChevronLeft, ChevronRight, Clock3, Footprints, Heart, HeartPulse, MapPin,
  Menu, MessageCircle, Microscope, Package, Play, ShieldCheck, Sparkles, Star,
  Stethoscope, Syringe, X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const siteUrl = "https://tatianecubos.com.br";
const whatsapp = "https://wa.me/5541999778493";
const instagram = "https://www.instagram.com/podologa_tati.cubos/";
const media = "/midia/";

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
  { name: "Marina S.", text: "Atendimento impecável. Meus pés nunca estiveram tão saudáveis. Profissional excepcional!" },
  { name: "Ricardo T.", text: "Resolveu meu problema de unha encravada com técnica e zero desconforto. Recomendo de olhos fechados." },
  { name: "Camila R.", text: "Os produtos próprios são incríveis. A hidratação dura muito mais do que qualquer creme do mercado." },
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

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Olá, Tati! Meu nome é ${form.name}. Telefone: ${form.phone}. E-mail: ${form.email || "não informado"}. Minha mensagem: ${form.message}`;
    book(message);
  };

  const visiblePodology = Array.from({ length: 3 }, (_, i) => podologyServices[(podologyIndex + i) % podologyServices.length]);
  const visibleAesthetic = Array.from({ length: 3 }, (_, i) => aestheticServices[(aestheticIndex + i) % aestheticServices.length]);

  return (
    <main className="tc-site">
      <div className="tc-topline"><div className="tc-wrap"><span><MapPin size={14}/> Curitiba · São José dos Pinhais · Telêmaco Borba</span><a href={instagram} target="_blank" rel="noreferrer">Siga @podologa_tati.cubos <ArrowRight size={13}/></a></div></div>
      <header className="tc-header">
        <div className="tc-wrap tc-nav">
          <a className="tc-brand" href="#inicio" aria-label="Tati Cubos início">
            <span className="tc-brand-mark"><Footprints size={29}/></span>
            <span><strong>Tati Cubos</strong><small>Podologia e Cosméticos</small></span>
          </a>
          <button className="tc-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? <X/> : <Menu/>}</button>
          <nav className={menuOpen ? "tc-links is-open" : "tc-links"} aria-label="Navegação principal">
            {[["Sobre","sobre"],["Podologia","podologia"],["Estética","estetica"],["Produtos","produtos"],["Onde atendo","locais"],["Depoimentos","depoimentos"],["Galeria","galeria"],["Dúvidas","duvidas"]].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <Button variant="siteGold" size="site" onClick={() => book()}>Agendar <ArrowRight size={16}/></Button>
          </nav>
        </div>
      </header>

      <section className="tc-hero" id="inicio">
        <div className="tc-hero-leaf tc-leaf-one"/><div className="tc-hero-leaf tc-leaf-two"/>
        <div className="tc-wrap tc-hero-grid">
          <div className="tc-hero-copy">
            <span className="tc-kicker"><span/> PODologia · Biomedicina estética · Curitiba e região</span>
            <h1>Cuidado que une <em>ciência, técnica</em> e acolhimento.</h1>
            <p className="tc-hero-lead">Saúde dos pés e cuidados estéticos com atenção individual, experiência e respeito à sua história.</p>
            <p className="tc-hero-detail">Sou Tatiane Cubos, podóloga e biomédica. Há mais de 18 anos, ajudo pessoas a cuidarem da saúde, do conforto e da autoestima — com um plano pensado para cada caso.</p>
            <div className="tc-hero-actions"><Button variant="siteGold" size="site" onClick={() => book()}>Agendar pelo WhatsApp <ArrowRight size={18}/></Button><a className="tc-text-link" href="#especialidades">Conhecer os atendimentos <ArrowDown size={16}/></a></div>
            <div className="tc-hero-proof"><span><Award/> <b>18+ anos</b><small>de experiência</small></span><span><BadgeCheck/><b>Podologia desde 2018</b><small>Biomedicina em 2025</small></span><span><ShieldCheck/><b>Cuidado individual</b><small>com biossegurança</small></span></div>
          </div>
          <div className="tc-hero-visual">
            <div className="tc-photo-main"><img src={media + "tati-hero.jpg"} alt="Tatiane Cubos em seu espaço de atendimento" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement?.classList.add("tc-photo-empty"); }}/><div className="tc-photo-placeholder"><Footprints size={48}/><strong>Sua foto profissional</strong><span>Adicione tati-hero.jpg em public/midia</span></div></div>
            <div className="tc-photo-stamp"><span>TC</span><div><strong>Tati Cubos</strong><small>Podóloga & Biomédica</small></div></div>
            <div className="tc-floating-note"><span><Check size={17}/></span><div><strong>Atendimento humanizado</strong><small>Tempo, escuta e cuidado</small></div></div>
          </div>
        </div>
        <div className="tc-wrap tc-hero-bottom"><span>UM CUIDADO COMPLETO, EM DUAS ESPECIALIDADES</span><div><a href="#podologia"><Footprints/> Saúde dos pés</a><i/><a href="#estetica"><Sparkles/> Estética e pele</a></div></div>
      </section>

      <section className="tc-stats"><div className="tc-wrap tc-stats-grid"><div><strong>18<span>+</span></strong><span>Anos de experiência na área da beleza e saúde</span></div><div><strong>2018</strong><span>Especialização em Podologia</span></div><div><strong>2025</strong><span>Formação em Biomedicina</span></div><div><strong>03</strong><span>Cidades atendidas no Paraná</span></div></div></section>

      <section className="tc-section" id="sobre"><div className="tc-wrap tc-about-grid">
        <div className="tc-about-visual"><img src={media + "tati-sobre.jpg"} alt="Tatiane Cubos, podóloga e biomédica" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement?.classList.add("tc-about-empty"); }}/><div className="tc-about-fallback"><Footprints size={42}/><span>Foto da Tati</span><small>Adicione tati-sobre.jpg em public/midia</small></div><div className="tc-round-note"><span>TC</span><small>Cuidado feito com<br/>conhecimento e carinho</small></div></div>
        <div className="tc-about-copy"><span className="tc-kicker">01 · SOBRE MIM</span><h2>Sou a Tati. <em>Seu cuidado começa pela escuta.</em></h2><p>Trabalho há mais de 18 anos na área da beleza e da saúde, com especialização em Podologia desde 2018 e formação em Biomedicina concluída em 2025.</p><p>Na podologia, meu foco é a saúde dos pés: prevenção, avaliação e cuidado de condições podológicas. Na área estética, a proposta é avaliar a pele e conversar sobre procedimentos possíveis, com informação clara sobre indicações, limites e cuidados.</p><p>Atendo do bebê ao idoso, adaptando o atendimento às necessidades de cada pessoa. Depois da consulta, o cuidado continua com orientações e acompanhamento pelo WhatsApp conforme o caso.</p>
          <div className="tc-values"><span><Check/> Plano personalizado</span><span><Check/> Formação técnica e científica</span><span><Check/> Orientações pós-atendimento</span><span><Check/> Linha própria de cosméticos</span></div><Button variant="siteGold" size="site" onClick={() => book("Olá, Tati! Gostaria de conhecer melhor seu trabalho e agendar uma avaliação.")}>Vamos conversar <ArrowRight size={17}/></Button>
        </div>
      </div></section>

      <section className="tc-section tc-section-soft" id="especialidades"><div className="tc-wrap"><div className="tc-section-head"><span className="tc-kicker">02 · ESPECIALIDADES</span><h2>Do cuidado dos pés à <em>saúde da pele.</em></h2><p>Dois campos de atuação, cada um com sua avaliação e atenção especializada. Escolha o que faz sentido para você.</p></div><div className="tc-specialty-grid">
        <a className="tc-specialty-card tc-foot-card" href="#podologia"><div className="tc-specialty-icon"><Footprints/></div><span className="tc-card-label">SAÚDE, CONFORTO E PREVENÇÃO</span><h3>Podologia</h3><p>Cuidados clínicos, preventivos e estéticos para unhas e pés, do atendimento infantil ao cuidado geriátrico.</p><span className="tc-card-bottom">Ver serviços <ArrowRight/></span><div className="tc-specialty-decoration"><Footprints/></div></a>
        <a className="tc-specialty-card tc-skin-card" href="#estetica"><div className="tc-specialty-icon"><Sparkles/></div><span className="tc-card-label">PELE, VIÇO E AUTOESTIMA</span><h3>Biomedicina estética</h3><p>Avaliação individual para conversar sobre procedimentos estéticos faciais e opções de cuidado para a pele.</p><span className="tc-card-bottom">Conhecer a estética <ArrowRight/></span><div className="tc-specialty-decoration"><Sparkles/></div></a>
      </div></div></section>

      <section className="tc-section" id="podologia"><div className="tc-wrap">
        <div className="tc-section-head tc-section-head-row"><div><span className="tc-kicker">03 · PODologia ESPECIALIZADA</span><h2>Seus pés merecem <em>atenção de verdade.</em></h2></div><p>Atendimentos clínicos, preventivos e estéticos, com técnica, biossegurança e tempo para entender seu caso.</p></div>
        <div className="tc-carousel-head"><span>Serviços de podologia</span><div className="tc-carousel-controls"><button aria-label="Serviços anteriores" onClick={() => setPodologyIndex((podologyIndex - 1 + podologyServices.length) % podologyServices.length)}><ChevronLeft/></button><button aria-label="Próximos serviços" onClick={() => setPodologyIndex((podologyIndex + 1) % podologyServices.length)}><ChevronRight/></button></div></div>
        <div className="tc-service-grid">{visiblePodology.map((service, i) => {const Icon = service.icon; return <article className="tc-service-card" key={service.title}><div className="tc-service-icon"><Icon/></div><span className="tc-service-number">0{(podologyIndex + i) % podologyServices.length + 1}</span><h3>{service.title}</h3><p>{service.text}</p><button onClick={() => book(`Olá, Tati! Gostaria de informações sobre ${service.title.toLowerCase()}.`)}>Saiba mais <ArrowRight size={15}/></button></article>;})}</div>
        <div className="tc-carousel-dots">{podologyServices.map((s,i)=><button key={s.title} aria-label={`Mostrar ${s.title}`} className={i===podologyIndex?"active":""} onClick={()=>setPodologyIndex(i)}/>)}</div>
        <div className="tc-service-note"><ShieldCheck/><p><strong>Não sabe qual serviço escolher?</strong><br/>Conte o que está sentindo. A avaliação ajuda a entender qual cuidado faz sentido para você.</p><Button variant="siteGold" size="site" onClick={() => book("Olá, Tati! Estou com uma questão nos pés e gostaria de orientação para agendar uma avaliação.")}>Pedir orientação <ArrowRight size={16}/></Button></div>
      </div></section>

      <section className="tc-section tc-section-dark" id="estetica"><div className="tc-wrap">
        <div className="tc-aesthetic-layout"><div className="tc-aesthetic-intro"><span className="tc-kicker tc-kicker-light">04 · BIOMEDICINA ESTÉTICA</span><h2>Cuidados para realçar <em>sua pele, sem perder sua essência.</em></h2><p>Na biomedicina estética, cada decisão começa com avaliação. Conversamos sobre suas queixas, características da pele, objetivos e opções possíveis para construir um plano individual.</p><div className="tc-aesthetic-image"><img src={media+"skinbooster.jpg"} alt="Imagem ilustrativa de procedimento estético facial" onError={(e)=>{e.currentTarget.style.display="none";e.currentTarget.parentElement?.classList.add("tc-aesthetic-empty")}}/><div className="tc-aesthetic-fallback"><Sparkles/><strong>Seu procedimento estético</strong><small>Adicione skinbooster.jpg em public/midia</small></div></div><p className="tc-small-note">Os procedimentos são realizados somente quando indicados e dentro das habilitações profissionais aplicáveis. Indicações, contraindicações e resultados variam conforme cada pessoa.</p><Button variant="siteGold" size="site" onClick={() => book("Olá, Tati! Gostaria de agendar uma avaliação de biomedicina estética.")}>Agendar avaliação estética <ArrowRight size={17}/></Button></div>
          <div className="tc-aesthetic-services"><div className="tc-carousel-head tc-carousel-head-light"><span>Possibilidades de cuidado</span><div className="tc-carousel-controls"><button aria-label="Tratamentos anteriores" onClick={()=>setAestheticIndex((aestheticIndex-1+aestheticServices.length)%aestheticServices.length)}><ChevronLeft/></button><button aria-label="Próximos tratamentos" onClick={()=>setAestheticIndex((aestheticIndex+1)%aestheticServices.length)}><ChevronRight/></button></div></div><div className="tc-aesthetic-card-list">{visibleAesthetic.map((service,i)=>{const Icon=service.icon;return <article className="tc-aesthetic-card" key={service.title}><span className="tc-aesthetic-icon"><Icon/></span><div><h3>{service.title}</h3><p>{service.text}</p></div><span className="tc-aesthetic-num">0{(aestheticIndex+i)%aestheticServices.length+1}</span></article>})}</div><div className="tc-carousel-dots tc-dots-light">{aestheticServices.map((s,i)=><button key={s.title} aria-label={`Mostrar ${s.title}`} className={i===aestheticIndex?"active":""} onClick={()=>setAestheticIndex(i)}/>)}</div></div>
        </div></div></section>

      <section className="tc-section tc-products" id="produtos"><div className="tc-wrap tc-products-grid"><div className="tc-products-copy"><span className="tc-kicker">05 · LINHA EXCLUSIVA</span><h2>O cuidado continua <em>em casa.</em></h2><p>Desenvolvi a linha de cosméticos podológicos Tati Cubos para apoiar a hidratação, a recuperação e a proteção da pele dos pés, com qualidade profissional.</p><div className="tc-product-points"><span><Check/> Hidratação intensa</span><span><Check/> Apoio à recuperação da pele ressecada</span><span><Check/> Proteção e cuidado diário</span></div><p>São produtos que também utilizo nos atendimentos e que podem fazer parte da sua rotina, conforme a orientação indicada para você.</p><Button variant="siteGold" size="site" onClick={() => book("Olá, Tati! Gostaria de conhecer a linha de cosméticos podológicos Tati Cubos.")}>Conhecer os produtos <ArrowRight size={17}/></Button></div><div className="tc-product-visual"><div className="tc-product-orbit"/><div className="tc-product-image"><img src={media+"emolipro.jpg"} alt="EmoliPro, produto da linha própria Tati Cubos" onError={(e)=>{e.currentTarget.style.display="none";e.currentTarget.parentElement?.classList.add("tc-product-empty")}}/><div className="tc-product-fallback"><Package size={48}/><strong>Linha Tati Cubos</strong><small>Adicione emolipro.jpg em public/midia</small></div></div><div className="tc-product-tag"><span>LINHA PRÓPRIA</span><strong>EmoliPro</strong><small>Emoliente de cutículas e calosidades</small></div></div></div></section>

      <section className="tc-section tc-video-future" id="video"><div className="tc-wrap tc-video-future-grid"><div><span className="tc-kicker">CONHEÇA MAIS DE PERTO</span><h2>Um pouco do cuidado <em>que você vai encontrar.</em></h2><p>Em breve, você poderá assistir a uma apresentação da Tati, conhecer o espaço e acompanhar os detalhes do atendimento.</p><Button variant="siteGold" size="site" onClick={()=>book("Olá, Tati! Gostaria de saber mais sobre seu espaço e os atendimentos.")}>Quero conhecer <ArrowRight size={16}/></Button></div><div className="tc-video-future-frame"><div><span className="tc-video-play"><Play size={24} fill="currentColor"/></span><strong>Vídeo de apresentação</strong><small>Adicione <code>video-tati.mp4</code> em <code>public/midia</code> para preparar esta seção para o vídeo.</small></div></div></div></section>

      <section className="tc-section tc-section-soft" id="locais"><div className="tc-wrap"><div className="tc-section-head"><span className="tc-kicker">06 · ONDE ATENDO</span><h2>O cuidado está mais perto <em>de você.</em></h2><p>Atendimento mediante agendamento em três cidades do Paraná. Consulte disponibilidade para atendimento domiciliar.</p></div><div className="tc-location-grid">
        {[["Curitiba","Centro Cívico","Rua da Glória, 396 — Sala 4","https://www.google.com/maps/search/?api=1&query=Rua+da+Gloria+396+Curitiba+PR"],["São José dos Pinhais","Região metropolitana","Rua Professora Lurdes Grutter Bonin, 1254 — Apto 102","https://www.google.com/maps/search/?api=1&query=Rua+Professora+Lurdes+Grutter+Bonin+1254+Sao+Jose+dos+Pinhais"],["Telêmaco Borba","Campos Gerais","Rua Vice-Prefeito Reginaldo Guedes Nocera, 439","https://www.google.com/maps/search/?api=1&query=Rua+Vice-Prefeito+Reginaldo+Guedes+Nocera+439+Telemaco+Borba"]].map(([city,region,address,map])=><article className="tc-location-card" key={city}><span className="tc-location-pin"><MapPin/></span><span className="tc-location-region">{region}</span><h3>{city}</h3><p>{address}</p><span className="tc-location-hours"><Clock3 size={15}/> Sob agendamento</span><a href={map} target="_blank" rel="noreferrer">Ver no mapa <ArrowRight size={15}/></a></article>)}</div><div className="tc-homecare"><div className="tc-homecare-icon"><HeartHandshakeIcon/></div><div><span className="tc-kicker">LEVO O CUIDADO ATÉ VOCÊ</span><h3>Atendimento domiciliar (home care)</h3><p>Quando sair de casa não é a melhor opção, consulte a possibilidade de atendimento domiciliar, com materiais e protocolos de biossegurança adequados ao serviço.</p></div><Button variant="siteGold" size="site" onClick={()=>book("Olá, Tati! Gostaria de consultar a disponibilidade de atendimento domiciliar.")}>Consultar disponibilidade <ArrowRight size={16}/></Button></div></div></section>

      <section className="tc-section" id="depoimentos"><div className="tc-wrap"><div className="tc-section-head tc-section-head-center"><span className="tc-kicker">07 · DEPOIMENTOS</span><h2>Palavras de quem já <em>cuidou de si com a Tati.</em></h2><p>Experiências compartilhadas por clientes.</p></div><div className="tc-reviews-layout"><div className="tc-review-feature"><div className="tc-review-quote">“</div><div className="tc-review-stars">{[1,2,3,4,5].map(n=><Star key={n} fill="currentColor"/>)}</div><p>“{testimonials[reviewIndex].text}”</p><div className="tc-review-author"><span>{testimonials[reviewIndex].name.slice(0,1)}</span><div><strong>{testimonials[reviewIndex].name}</strong><small>Depoimento de cliente</small></div></div><div className="tc-review-controls"><button aria-label="Depoimento anterior" onClick={()=>setReviewIndex((reviewIndex-1+testimonials.length)%testimonials.length)}><ChevronLeft/></button><span>0{reviewIndex+1} / 0{testimonials.length}</span><button aria-label="Próximo depoimento" onClick={()=>setReviewIndex((reviewIndex+1)%testimonials.length)}><ChevronRight/></button></div></div><div className="tc-review-side"><span className="tc-kicker">CUIDADO QUE VAI ALÉM DA SESSÃO</span><h3>Uma relação construída com <em>confiança e atenção.</em></h3><p>Cada atendimento começa com uma conversa e uma avaliação individual. O objetivo é que você compreenda o cuidado proposto e se sinta à vontade para tirar dúvidas.</p><div className="tc-review-benefit"><BadgeCheck/><span><strong>Escuta e respeito</strong><small>Você é atendido no seu ritmo.</small></span></div><div className="tc-review-benefit"><ShieldCheck/><span><strong>Orientação clara</strong><small>Você entende cada etapa do cuidado.</small></span></div><Button variant="siteGold" size="site" onClick={()=>book()}>Agendar meu atendimento <ArrowRight size={17}/></Button></div></div><p className="tc-disclaimer">Os depoimentos apresentados devem corresponder a relatos reais e autorizados. Se necessário, substitua os textos de demonstração pelos depoimentos aprovados pela profissional.</p></div></section>

      <section className="tc-section tc-gallery-section" id="galeria"><div className="tc-wrap"><div className="tc-section-head tc-section-head-row"><div><span className="tc-kicker">08 · GALERIA</span><h2>Detalhes do cuidado, <em>na prática.</em></h2></div><p>Procedimentos, bastidores e evolução dos cuidados. Clique em uma imagem para ampliar.</p></div><div className="tc-gallery-grid">{gallery.map((item,i)=><button className="tc-gallery-item" key={item.file} onClick={()=>setLightbox(i)}><img src={media+item.file} alt={item.desc} onError={(e)=>{e.currentTarget.style.display="none";e.currentTarget.parentElement?.classList.add("tc-gallery-empty")}}/><span className="tc-gallery-fallback"><Footprints/><small>Adicionar imagem</small></span><span className="tc-gallery-caption"><strong>{item.title}</strong><span>Ver imagem <ArrowRight size={14}/></span></span></button>)}</div><p className="tc-gallery-note">Imagens de antes e depois devem ser reais, autorizadas e apresentadas sem edição enganosa. Resultados variam conforme cada caso.</p></div></section>

      <section className="tc-section tc-section-soft" id="duvidas"><div className="tc-wrap tc-faq-layout"><div className="tc-faq-intro"><span className="tc-kicker">09 · DÚVIDAS FREQUENTES</span><h2>Vamos esclarecer <em>suas dúvidas?</em></h2><p>Se sua pergunta não estiver aqui, mande uma mensagem. A Tati responde pessoalmente.</p><Button variant="siteGold" size="site" onClick={()=>book("Olá, Tati! Tenho uma dúvida sobre os atendimentos.")}>Perguntar pelo WhatsApp <MessageCircle size={17}/></Button></div><div className="tc-faq-list">{faq.map(([q,a],i)=><article className={faqOpen===i?"tc-faq-item is-open":"tc-faq-item"} key={q}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)} aria-expanded={faqOpen===i}><span>{q}</span><ChevronDown/></button>{faqOpen===i&&<p>{a}</p>}</article>)}</div></div></section>

      <section className="tc-section tc-contact" id="contato"><div className="tc-wrap tc-contact-grid"><div><span className="tc-kicker tc-kicker-light">10 · ENTRE EM CONTATO</span><h2>Seu próximo passo começa <em>com uma conversa.</em></h2><p>Conte o que você está sentindo ou o que gostaria de cuidar. Vamos conversar sobre o atendimento mais adequado para você.</p><div className="tc-contact-details"><a href={whatsapp} target="_blank" rel="noreferrer"><span><MessageCircle/></span><div><small>WHATSAPP</small><strong>(41) 99977-8493</strong></div><ArrowRight/></a><a href="mailto:contato@taticubos.com.br"><span><Package/></span><div><small>E-MAIL</small><strong>contato@taticubos.com.br</strong></div><ArrowRight/></a><a href={instagram} target="_blank" rel="noreferrer"><span><Sparkles/></span><div><small>INSTAGRAM</small><strong>@podologa_tati.cubos</strong></div><ArrowRight/></a></div><p className="tc-contact-hours"><Clock3 size={16}/> Atendimento sob agendamento · Curitiba e região</p></div><form className="tc-contact-form" onSubmit={submitForm}><span className="tc-form-kicker">FALE COM A TATI</span><h3>Como posso ajudar?</h3><p>Preencha os campos e sua mensagem será preparada para enviar pelo WhatsApp.</p><label>Seu nome<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Como podemos chamar você?"/></label><div className="tc-form-row"><label>Telefone / WhatsApp<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="(41) 99999-9999"/></label><label>E-mail (opcional)<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="voce@email.com"/></label></div><label>Como posso ajudar?<textarea required rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Conte um pouco sobre o que deseja cuidar..."/></label><Button variant="siteGold" size="site" type="submit">Preparar mensagem no WhatsApp <ArrowRight size={17}/></Button><small>Ao continuar, o WhatsApp será aberto com os dados preenchidos para você revisar e enviar.</small></form></div></section>

      <footer className="tc-footer"><div className="tc-wrap"><div className="tc-footer-grid"><div className="tc-footer-about"><a className="tc-brand tc-brand-footer" href="#inicio"><span className="tc-brand-mark"><Footprints/></span><span><strong>Tati Cubos</strong><small>Podologia e Cosméticos</small></span></a><p>Cuidado especializado para a saúde e a beleza dos seus pés e da sua pele, com técnica, ciência e acolhimento.</p></div><div><strong>Navegue</strong><a href="#sobre">Sobre mim</a><a href="#podologia">Podologia</a><a href="#estetica">Biomedicina estética</a><a href="#produtos">Produtos</a><a href="#locais">Onde atendo</a><a href="#galeria">Galeria</a></div><div><strong>Atendimento</strong><span>Curitiba · Centro Cívico</span><span>São José dos Pinhais</span><span>Telêmaco Borba</span><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp: (41) 99977-8493</a><a href="mailto:contato@taticubos.com.br">contato@taticubos.com.br</a></div></div><div className="tc-footer-bottom"><span>© 2026 Tati Cubos — Podologia e Cosméticos. Todos os direitos reservados.</span><span>Registro profissional informado: 170107510001/91</span></div><p className="tc-footer-note">Conteúdo informativo. Procedimentos dependem de avaliação individual; imagens e resultados não representam garantia de resultado.</p></div></footer>

      <button className="tc-whatsapp-float" onClick={()=>book()} aria-label="Agendar atendimento pelo WhatsApp"><MessageCircle/><span>Agendar atendimento</span></button>
      {lightbox!==null&&<div className="tc-lightbox" role="dialog" aria-modal="true" aria-label={gallery[lightbox].title} onClick={()=>setLightbox(null)}><button className="tc-lightbox-close" aria-label="Fechar imagem"><X/></button><button className="tc-lightbox-prev" aria-label="Imagem anterior" onClick={e=>{e.stopPropagation();setLightbox((lightbox-1+gallery.length)%gallery.length)}}><ChevronLeft/></button><figure onClick={e=>e.stopPropagation()}><img src={media+gallery[lightbox].file} alt={gallery[lightbox].desc}/><figcaption>{gallery[lightbox].title}</figcaption></figure><button className="tc-lightbox-next" aria-label="Próxima imagem" onClick={e=>{e.stopPropagation();setLightbox((lightbox+1)%gallery.length)}}><ChevronRight/></button></div>}
    </main>
  );
}

function HeartHandshakeIcon() { return <HeartPulse size={28}/>; }
