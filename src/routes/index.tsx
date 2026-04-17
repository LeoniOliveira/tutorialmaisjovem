import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import aliceHero from "@/assets/alice-hero.webp";
import aliceAuthority from "@/assets/alice-authority.webp";
import for1 from "@/assets/for-1.webp";
import for2 from "@/assets/for-2.webp";
import for3 from "@/assets/for-3.webp";
import for4 from "@/assets/for-4.webp";
import for5 from "@/assets/for-5.webp";
import heavyMakeup from "@/assets/heavy-makeup-problem.webp";

// Defer client-only urgency widgets until after first paint
const SeatsBar = lazy(() => import("@/components/SeatsBar"));
const SignupNotifications = lazy(() => import("@/components/SignupNotifications"));

const SENDFLOW_LINK = "[SENDFLOW_LINK]";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Tutorial Gratuito — Como Parecer 10 Anos Mais Jovem com Maquiagem | Alice Salazar",
      },
      {
        name: "description",
        content:
          "Tutorial ao vivo e gratuito com Alice Salazar. Aprenda a técnica que tira anos do rosto em 3 movimentos. Para mulheres de 35 a 70 anos.",
      },
      {
        property: "og:title",
        content:
          "Tutorial para Pele Madura — Pareça 10 Anos Mais Jovem | Alice Salazar",
      },
      {
        property: "og:description",
        content:
          "Tutorial ao vivo e gratuito no dia 21/05. A técnica que tira anos do rosto em 3 movimentos. Inscrição grátis.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Tutorial para Pele Madura — Pareça 10 Anos Mais Jovem | Alice Salazar",
      },
      {
        name: "twitter:description",
        content:
          "Tutorial ao vivo e gratuito no dia 21/05. A técnica que tira anos do rosto em 3 movimentos.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "image",
        href: aliceHero,
        fetchPriority: "high",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

const ClockIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const learnItems = [
  {
    title: "O erro silencioso",
    text: "que faz a maquiagem craquelar, pesar e envelhecer ainda mais a pele madura",
  },
  {
    title: "A técnica dos 3 movimentos",
    text: "que transforma a textura da pele em minutos, deixando a pele mais jovem, natural com aspecto de pêssego sem nenhum filtro",
  },
  {
    title: "Como abrir o olhar",
    text: "esconder as rugas e levantar a pálpebra caída sem ficar pesado",
  },
  {
    title: "A sequência exata de preparação da pele madura",
    text: "que nenhum tutorial genérico do YouTube ensina",
  },
  {
    title: "Como montar uma rotina de 10 a 15 minutos",
    text: "com produtos acessíveis que funcionam de verdade na pele madura",
  },
];

const forCards = [
  {
    text: "Tem melasma, olheiras, pálpebras caídas ou rugas marcadas e não sabe como lidar com isso na maquiagem",
    image: for1,
    alt: "Mulher madura com melasma e olheiras se olhando",
  },
  {
    text: "Tem entre 35 e 70 anos, olha no espelho depois de se maquiar e sente que ficou mais velha do que antes de começar",
    image: for2,
    alt: "Mulher madura observando o rosto no espelho do banheiro",
  },
  {
    text: "Já tentou tutoriais no YouTube e nunca conseguiu reproduzir em casa, e acha que o problema é você",
    image: for3,
    alt: "Mulher tentando reproduzir tutorial de maquiagem em casa",
  },
  {
    text: "Quer uma maquiagem leve e natural que te deixe bonita de verdade, sem parecer máscara",
    image: for4,
    alt: "Mulher madura sorrindo com maquiagem leve e natural",
  },
  {
    text: "Quer se olhar no espelho e se reconhecer de novo",
    image: for5,
    alt: "Mulher madura sorrindo ao se olhar no espelho",
  },
];

function LandingPage() {
  const [showUrgency, setShowUrgency] = useState(false);

  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    const id = w.requestIdleCallback
      ? w.requestIdleCallback(() => setShowUrgency(true), { timeout: 2500 })
      : window.setTimeout(() => setShowUrgency(true), 1500);
    return () => {
      if (typeof id === "number") window.clearTimeout(id);
    };
  }, []);

  return (
    <>
      <style>{css}</style>
      {showUrgency && (
        <Suspense fallback={null}>
          <SeatsBar />
          <SignupNotifications />
        </Suspense>
      )}
      <main className="page">
        {/* SCARCITY BAR */}
        <div className="scarcity-bar" role="alert">
          <span className="scarcity-dot" aria-hidden="true" />
          <strong>Vagas limitadas</strong>
          <span aria-hidden="true"> | </span>
          <span>Restam algumas vagas disponíveis</span>
        </div>

        {/* HERO */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div className="hero-text">
              <span className="badge badge-free">🔴 AULA GRÁTIS</span>
              <p className="overline">TUTORIAL PARA PELE MADURA</p>
              <h1 id="hero-title" className="headline">
                Como Parecer 10 Anos Mais Jovem com Maquiagem
              </h1>
              <p className="subheadline">
                Descubra ao vivo a técnica que tira anos do rosto em 3 movimentos,
                sem botox, sem procedimento e sem maquiagem pesada. Desenvolvida
                especialmente para mulheres de 35 a 70 anos por uma das maiores
                maquiadoras do Brasil.
              </p>
              <p className="hero-date">
                <span className="hero-date-pill">
                  <ClockIcon />
                  <span>21/05 · Às 20h</span>
                </span>
                <span className="hero-date-text">
                  TUTORIAL 100% GRATUITO. CLIQUE NO BOTÃO ABAIXO PARA PARTICIPAR.
                </span>
              </p>
              <a
                href={SENDFLOW_LINK}
                className="cta cta-pulse"
                aria-label="Inscrever-se no tutorial gratuito de maquiagem"
              >
                QUERO GARANTIR MEU LUGAR AGORA
              </a>
            </div>
            <div className="hero-image-wrap">
              <img
                src={aliceHero}
                alt="Alice Salazar maquiando uma mulher de pele madura"
                width={1000}
                height={1000}
                fetchPriority="high"
                decoding="async"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="section section-light" aria-labelledby="problem-title">
          <div className="container problem-container">
            <h2 id="problem-title" className="problem-headline">
              Você sabia que a maquiagem que você está usando hoje pode estar te
              envelhecendo <span className="problem-headline-accent">mais do que as próprias rugas?</span>
            </h2>
            <div className="problem-grid">
              <div className="problem-image-wrap">
                <img
                  src={heavyMakeup}
                  alt="Mulher madura com maquiagem pesada e craquelada marcando as rugas"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="problem-image"
                />
              </div>
              <div className="problem-text">
                <p className="problem-lead">
                  O problema <strong>não é sua idade</strong>, sua pele ser
                  difícil ou porque você não nasceu para a maquiagem.
                </p>
                <p>
                  A verdade é que a técnica que você aprendeu anos atrás{" "}
                  <strong>já não funciona mais</strong> para a sua pele hoje.
                </p>
                <p>
                  Você não precisa de produtos caros, horas de tentativa e muito
                  menos técnicas complexas para ter uma make perfeita, com zero
                  rugas e aquela pele com efeito de pêssego. Com uma sequência
                  de 3 movimentos simples, em menos de 15 minutos, sua aparência
                  fica <strong>10 ANOS MAIS JOVEM</strong>, sem exageros.
                </p>
                <p className="problem-closing">
                  E é isso que você vai aprender <strong>de graça</strong> com a
                  maior referência em maquiagem do Brasil no Tutorial de
                  Maquiagem para Pele Madura.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* APRENDIZADOS */}
        <section className="section section-pink" aria-labelledby="learn-title">
          <div className="container narrow">
            <h2 id="learn-title" className="section-title">
              O que você vai aprender no Tutorial?
            </h2>
            <ol className="learn-list">
              {learnItems.map((item, i) => (
                <li key={i} className="learn-item">
                  <div className="learn-number" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="learn-body">
                    <h3 className="learn-item-title">{item.title}</h3>
                    <p className="learn-item-text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="date-highlight">
              <ClockIcon />
              <span>TUTORIAL AO VIVO NO DIA 21/05 · ÀS 20H</span>
            </p>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="section section-light" aria-labelledby="for-title">
          <div className="container">
            <h2 id="for-title" className="section-title">
              Esse Tutorial é para você que:
            </h2>
            <div className="for-grid">
              {forCards.map((card, i) => (
                <article key={i} className="for-card">
                  <img
                    src={card.image}
                    alt={card.alt}
                    width={640}
                    height={360}
                    loading="lazy"
                    decoding="async"
                    className="for-card-image"
                  />
                  <p className="for-card-text">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AUTORIDADE */}
        <section className="section section-pink" aria-labelledby="auth-title">
          <div className="container">
            <h2 id="auth-title" className="section-title">
              Aprenda com a maior referência de maquiagem do Brasil
            </h2>
            <div className="authority">
              <div className="alice-photo-wrap">
                <img
                  src={aliceAuthority}
                  alt="Alice Salazar, maquiadora profissional"
                  width={320}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  className="alice-photo"
                />
                <span className="alice-badge">6 milhões de seguidoras</span>
              </div>
              <div className="authority-text">
                <p>
                  Alice Salazar é a maior referência em maquiagem do Brasil e
                  especialista em maquiagem para a pele madura.
                </p>
                <p>
                  Com mais de <strong>6 milhões de seguidoras</strong>, formação
                  internacional em Paris, Dubai, Londres e Nova York, e mais de{" "}
                  <strong>40 mil alunas</strong> que transformaram sua autoestima.
                </p>
                <p>
                  Neste Tutorial ao vivo, ela vai ensinar na prática como parecer
                  10 anos mais jovem com uma única técnica de maquiagem
                  desenvolvida ao longo de uma vida como maquiadora profissional.
                </p>
                <p>
                  Essa é a chance de você descobrir o que funciona de verdade
                  para pele madura e voltar a ter segurança, sabendo que a
                  maquiagem se tornou aliada da sua beleza.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section section-dark" aria-labelledby="final-title">
          <div className="container narrow center">
            <h2 id="final-title" className="final-headline">
              Sua pele não é difícil. Tudo que faltava para parecer mais jovem é
              a técnica certa — e você vai aprender ela ao vivo e de graça.
            </h2>
            <p className="final-sub">
              Clique no botão abaixo e participe do tutorial de maquiagem para
              pele madura!
            </p>
            <a
              href={SENDFLOW_LINK}
              className="cta"
              aria-label="Inscrever-se no tutorial gratuito de maquiagem"
            >
              QUERO GARANTIR MEU LUGAR AGORA
            </a>
            <p className="final-date">
              <ClockIcon />
              <span>TUTORIAL 100% GRATUITO · 21/05 ÀS 20H</span>
            </p>
          </div>
        </section>

        <footer className="footer">
          <div className="container center">
            <p>© 2026 Alice Salazar — Todos os direitos reservados.</p>
            <p className="footer-links">
              <a href="https://alicesalazarcursos.com.br/termos-de-uso/">
                Termos de Uso
              </a>
              <span aria-hidden="true"> · </span>
              <a href="https://alicesalazarcursos.com.br/politicas-de-privacidade">
                Política de Privacidade
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

const css = `
:root{
  --rosa-primario:#8B1E3F;--rosa-vibrante:#A82B53;--rosa-claro:#FADBD8;
  --rose:#F4C9C2;--rose-bg:#FCE9E4;
  --escuro:#2B0F18;--cinza-texto:#3D2A2F;--cinza-bg:#F7F3F2;--branco:#FFFFFF;
  --dourado:#B8860B;--dourado-claro:#FFF8E1;
  --verde:#4ADE6A;--verde-escuro:#22C55E;--verde-hover:#16A34A;
  --vermelho:#DC2626;--vermelho-escuro:#B91C1C;
}
*,*::before,*::after{box-sizing:border-box}
html,body{margin:0;padding:0}
body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
  font-size:16px;line-height:1.65;color:var(--cinza-texto);background:var(--branco);-webkit-font-smoothing:antialiased}
.page{overflow-x:hidden}
.container{max-width:820px;margin:0 auto;padding:0 24px;width:100%}
.container.narrow{max-width:680px}
.center{text-align:center}
a{color:var(--rosa-primario)}
img{max-width:100%;height:auto;display:block}

/* SCARCITY BAR */
.scarcity-bar{background:linear-gradient(90deg,var(--vermelho-escuro),var(--vermelho));
  color:#fff;font-size:13.5px;font-weight:600;letter-spacing:.3px;
  padding:10px 16px;text-align:center;display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap}
.scarcity-bar strong{font-weight:800;letter-spacing:.6px}
.scarcity-dot{width:9px;height:9px;border-radius:50%;background:#fff;
  box-shadow:0 0 0 0 rgba(255,255,255,.7);animation:blink 1.6s ease-in-out infinite}
@keyframes blink{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(255,255,255,.7)}50%{opacity:.55;box-shadow:0 0 0 6px rgba(255,255,255,0)}}
@media(prefers-reduced-motion:reduce){.scarcity-dot{animation:none}}

/* HERO */
.hero{background:linear-gradient(180deg,var(--rose-bg) 0%,var(--branco) 100%);color:var(--escuro);padding:56px 0 80px;position:relative}
.hero .container{max-width:1180px}
.hero-inner{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.hero-text{display:flex;flex-direction:column;align-items:flex-start;gap:18px;text-align:left}
.hero-text .headline{text-align:left;max-width:none}
.hero-text .subheadline{text-align:left;max-width:none}
.hero-image-wrap{width:100%}
.hero-image{width:100%;height:auto;border-radius:18px;box-shadow:0 16px 40px rgba(43,15,24,.25);object-fit:cover;aspect-ratio:1/1}
.badge{display:inline-flex;align-items:center;gap:6px;font-weight:800;font-size:14px;letter-spacing:1.4px;
  padding:10px 18px;border-radius:999px}
.badge-free{background:var(--vermelho);color:#fff;
  box-shadow:0 6px 18px rgba(220,38,38,.35);text-transform:uppercase}
.overline{margin:0;font-size:13px;font-weight:600;letter-spacing:2.2px;
  color:var(--rosa-primario);text-transform:uppercase}
.headline{font-size:46px;line-height:1.1;font-weight:800;color:var(--escuro);margin:0;max-width:760px;letter-spacing:-0.025em}
.subheadline{font-size:15.5px;line-height:1.6;color:var(--cinza-texto);max-width:600px;margin:0;font-weight:400}
.hero-date{margin:0;display:flex;flex-direction:column;gap:8px;align-items:flex-start}
.hero-date-pill{display:inline-flex;align-items:center;gap:8px;
  background:var(--branco);color:var(--rosa-primario);
  border:1.5px solid var(--rosa-claro);
  padding:8px 14px;border-radius:999px;font-weight:800;font-size:14px;letter-spacing:.5px}
.hero-date-text{font-size:12px;font-weight:700;letter-spacing:1px;color:var(--cinza-texto);text-transform:uppercase}
.cta{display:inline-block;background:var(--verde-escuro);color:#fff;text-decoration:none;
  font-weight:800;font-size:18px;letter-spacing:0.5px;padding:20px 28px;border-radius:12px;
  min-height:56px;box-shadow:0 6px 20px rgba(34,197,94,.40);transition:background .2s,transform .2s;
  cursor:pointer;text-align:center;line-height:1.2;width:100%;max-width:480px}
.cta:hover{background:var(--verde-hover);transform:translateY(-1px)}
.cta-pulse{animation:pulse 2.4s ease-in-out infinite}
@keyframes pulse{0%,100%{box-shadow:0 6px 20px rgba(34,197,94,.40)}50%{box-shadow:0 8px 32px rgba(74,222,106,.75)}}
@media(prefers-reduced-motion:reduce){.cta-pulse{animation:none}}

/* PROBLEMA */
.problem-container{max-width:1120px}
.problem-headline{font-size:38px;line-height:1.2;font-weight:800;color:var(--escuro);
  margin:0 0 48px;text-align:center;letter-spacing:-0.02em;max-width:920px;margin-left:auto;margin-right:auto}
.problem-headline-accent{color:var(--rosa-primario);display:inline}
.problem-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);
  gap:56px;align-items:center}
.problem-image-wrap{position:relative}
.problem-image{width:100%;height:auto;border-radius:18px;
  box-shadow:0 18px 44px rgba(43,15,24,.22);aspect-ratio:1/1;object-fit:cover}
.problem-text{display:flex;flex-direction:column;gap:18px}
.problem-text p{margin:0;font-size:17px;line-height:1.65;color:var(--cinza-texto)}
.problem-text strong{color:var(--escuro);font-weight:700}
.problem-lead{font-size:19px !important;font-weight:500;color:var(--escuro) !important;line-height:1.5 !important}
.problem-closing{background:var(--rose-bg);border-left:4px solid var(--rosa-primario);
  padding:18px 20px;border-radius:0 12px 12px 0;font-weight:500;
  color:var(--escuro) !important;font-size:16.5px !important;margin-top:6px !important}
.problem-closing strong{color:var(--rosa-primario)}


/* SECTIONS */
.section{padding:80px 0}
.section-light{background:var(--branco)}
.section-pink{background:var(--rose-bg)}
.section-dark{background:var(--cinza-bg);color:var(--escuro)}
.section-title{font-size:32px;line-height:1.2;font-weight:800;color:var(--escuro);
  margin:0 0 40px;text-align:center;letter-spacing:-0.01em}

/* LEARN LIST — numbered cards */
.learn-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0;
  background:var(--branco);border-radius:16px;overflow:hidden;
  box-shadow:0 4px 24px rgba(139,30,63,.08);border:1px solid rgba(139,30,63,.08)}
.learn-item{display:grid;grid-template-columns:auto 1fr;gap:22px;align-items:flex-start;
  padding:28px 28px;border-bottom:1px solid rgba(139,30,63,.08)}
.learn-item:last-child{border-bottom:none}
.learn-number{font-size:34px;font-weight:800;line-height:1;
  color:var(--rosa-primario);letter-spacing:-0.02em;
  min-width:54px;font-variant-numeric:tabular-nums}
.learn-body{display:flex;flex-direction:column;gap:6px}
.learn-item-title{margin:0;font-size:19px;font-weight:800;color:var(--escuro);
  line-height:1.25;letter-spacing:-0.01em}
.learn-item-text{margin:0;font-size:15.5px;line-height:1.6;color:var(--cinza-texto)}
.date-highlight{margin:36px auto 0;display:inline-flex;align-items:center;gap:8px;
  background:var(--rosa-claro);color:var(--rosa-primario);font-weight:800;
  padding:12px 22px;border-radius:999px;font-size:13.5px;letter-spacing:1px;
  width:fit-content;margin-left:auto;margin-right:auto}
.date-highlight{display:flex}
.section .narrow{margin:0 auto}

/* FOR-YOU CARDS GRID */
.for-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;max-width:980px;margin:0 auto}
.for-card{background:var(--branco);border-radius:16px;overflow:hidden;
  box-shadow:0 6px 24px rgba(139,30,63,.10);
  border:1px solid rgba(139,30,63,.06);
  display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s}
.for-card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(139,30,63,.14)}
.for-card-image{aspect-ratio:16/9;width:100%;object-fit:cover;display:block;background:var(--rose-bg)}
.for-card-text{margin:0;padding:22px 24px 26px;font-size:16px;line-height:1.55;color:var(--cinza-texto);font-weight:500}
.for-grid > .for-card:nth-child(5):last-child{grid-column:span 2;max-width:480px;margin:0 auto;width:100%}

/* AUTHORITY */
.authority{display:grid;grid-template-columns:320px 1fr;gap:48px;align-items:center;max-width:900px;margin:0 auto}
.alice-photo-wrap{position:relative;width:320px;height:320px;margin:0 auto}
.alice-photo{width:320px;height:320px;border-radius:50%;object-fit:cover;
  border:6px solid var(--branco);box-shadow:0 12px 32px rgba(139,30,63,.18)}
.alice-badge{position:absolute;bottom:8px;left:50%;transform:translateX(-50%);
  background:var(--rosa-primario);color:#fff;font-weight:700;font-size:13px;
  padding:8px 16px;border-radius:999px;white-space:nowrap;box-shadow:0 4px 12px rgba(0,0,0,.2)}
.authority-text p{margin:0 0 16px;font-size:17px;color:var(--cinza-texto)}
.authority-text strong{color:var(--escuro)}
.authority-text p:last-child{margin-bottom:0}

/* FINAL CTA */
.final-headline{font-size:30px;line-height:1.25;font-weight:800;color:var(--escuro);
  margin:0 0 20px;letter-spacing:-0.01em}
.final-sub{font-size:17px;color:var(--cinza-texto);margin:0 0 28px}
.final-date{margin:18px auto 0;display:inline-flex;align-items:center;gap:8px;
  font-size:13px;font-weight:800;letter-spacing:1px;color:var(--rosa-primario);
  text-transform:uppercase}

/* FOOTER */
.footer{background:var(--escuro);color:#D9C8CD;padding:32px 0;font-size:14px;text-align:center}
.footer p{margin:6px 0}
.footer a{color:#F4C9C2;text-decoration:none}
.footer a:hover{text-decoration:underline}

/* MOBILE */
@media(max-width:768px){
  .container{padding:0 20px}
  .hero{padding:36px 0 56px}
  .hero-inner{grid-template-columns:1fr;gap:32px}
  .hero-text{align-items:center;text-align:center}
  .hero-text .headline,.hero-text .subheadline,.overline{text-align:center}
  .hero-date{align-items:center}
  .hero-image{order:-1}
  .headline{font-size:30px;line-height:1.2}
  .subheadline{font-size:14.5px}
  .section{padding:56px 0}
  .section-title{font-size:24px;margin-bottom:28px}
  .learn-item{padding:22px 20px;gap:14px}
  .learn-number{font-size:28px;min-width:42px}
  .learn-item-title{font-size:17px}
  .learn-item-text{font-size:14.5px}
  .for-grid{grid-template-columns:1fr;gap:18px}
  .for-grid > .for-card:nth-child(5):last-child{grid-column:auto;max-width:none}
  .for-card-text{padding:18px 20px 22px;font-size:15px}
  .authority{grid-template-columns:1fr;gap:28px;text-align:center}
  .authority-text{text-align:left}
  .alice-photo-wrap,.alice-photo{width:240px;height:240px}
  .final-headline{font-size:23px}
  .cta{font-size:16px;padding:18px 20px}
  .scarcity-bar{font-size:12.5px;padding:9px 14px}
  .problem-headline{font-size:24px;margin-bottom:28px}
  .problem-grid{grid-template-columns:1fr;gap:28px}
  .problem-image-wrap{max-width:420px;margin:0 auto}
  .problem-text p{font-size:15.5px}
  .problem-lead{font-size:17px !important}
  .problem-closing{font-size:15.5px !important;padding:16px 18px}
}
`;
