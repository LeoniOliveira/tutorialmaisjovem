import { createFileRoute } from "@tanstack/react-router";

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
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <style>{css}</style>
      <main className="page">
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <span className="badge badge-date">TUTORIAL 100% GRATUITO — 21/05</span>
            <h1 id="hero-title" className="headline">
              Tutorial para Pele Madura: Como Parecer 10 Anos Mais Jovem com
              Maquiagem
            </h1>
            <p className="subheadline">
              Descubra ao vivo a técnica que tira anos do rosto em 3 movimentos,
              sem botox, sem procedimento e sem maquiagem pesada. Desenvolvida
              especialmente para mulheres de 35 a 70 anos por uma das maiores
              maquiadoras do Brasil.
            </p>
            <p className="hero-date">
              TUTORIAL 100% GRATUITO NO DIA 21/05. CLIQUE NO BOTÃO ABAIXO PARA
              PARTICIPAR.
            </p>
            <a
              href={SENDFLOW_LINK}
              className="cta cta-pulse"
              aria-label="Inscrever-se no tutorial gratuito de maquiagem"
            >
              QUERO PARTICIPAR DE GRAÇA
            </a>
          </div>
        </section>

        {/* APRENDIZADOS */}
        <section className="section section-light" aria-labelledby="learn-title">
          <div className="container narrow">
            <h2 id="learn-title" className="section-title">
              O que você vai aprender no Tutorial?
            </h2>
            <ul className="learn-list">
              <li>
                <span className="learn-icon" aria-hidden="true">✨</span>
                <span>
                  <strong>O erro silencioso</strong> que faz a maquiagem craquela,
                  pesar e envelhecer ainda mais a pele madura
                </span>
              </li>
              <li>
                <span className="learn-icon" aria-hidden="true">✨</span>
                <span>
                  <strong>A técnica dos 3 movimentos</strong> que transforma a
                  textura da pele em minutos, deixando a pele mais jovem, natural
                  com aspecto de pêssego sem nenhum filtro
                </span>
              </li>
              <li>
                <span className="learn-icon" aria-hidden="true">✨</span>
                <span>
                  <strong>Como abrir o olhar</strong>, esconder as rugas e
                  levantar a pálpebra caída sem ficar pesado
                </span>
              </li>
              <li>
                <span className="learn-icon" aria-hidden="true">✨</span>
                <span>
                  <strong>A sequência exata de preparação da pele madura</strong>{" "}
                  que nenhum tutorial genérico do YouTube ensina
                </span>
              </li>
              <li>
                <span className="learn-icon" aria-hidden="true">✨</span>
                <span>
                  <strong>Como montar uma rotina de 10 a 15 minutos</strong> com
                  produtos acessíveis que funcionam de verdade na pele madura
                </span>
              </li>
            </ul>
            <p className="date-highlight">📅 TUTORIAL AO VIVO NO DIA 21/05</p>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="section section-pink" aria-labelledby="for-title">
          <div className="container narrow">
            <h2 id="for-title" className="section-title">
              Esse Tutorial é para você que:
            </h2>
            <ul className="for-list">
              <li>
                <span className="check" aria-hidden="true">✅</span>
                <span>
                  Tem melasma, olheiras, pálpebras caídas ou rugas marcadas e não
                  sabe como lidar com isso na maquiagem
                </span>
              </li>
              <li>
                <span className="check" aria-hidden="true">✅</span>
                <span>
                  Tem entre 35 e 70 anos, olha no espelho depois de se maquiar e
                  sente que ficou mais velha do que antes de começar
                </span>
              </li>
              <li>
                <span className="check" aria-hidden="true">✅</span>
                <span>
                  Já tentou tutoriais no YouTube e nunca conseguiu reproduzir em
                  casa, e acha que o problema é você
                </span>
              </li>
              <li>
                <span className="check" aria-hidden="true">✅</span>
                <span>
                  Quer uma maquiagem leve e natural que te deixe bonita de
                  verdade, sem parecer máscara
                </span>
              </li>
              <li>
                <span className="check" aria-hidden="true">✅</span>
                <span>Quer se olhar no espelho e se reconhecer de novo</span>
              </li>
            </ul>
          </div>
        </section>

        {/* AUTORIDADE */}
        <section className="section section-light" aria-labelledby="auth-title">
          <div className="container">
            <h2 id="auth-title" className="section-title">
              Aprenda com a maior referência de maquiagem do Brasil
            </h2>
            <div className="authority">
              <div className="alice-photo-wrap">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=480&h=480&fit=crop&crop=faces"
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
              QUERO PARTICIPAR DE GRAÇA
            </a>
            <p className="final-date">TUTORIAL 100% GRATUITO NO DIA 21/05.</p>
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

/* HERO */
.hero{background:linear-gradient(180deg,var(--rose-bg) 0%,var(--branco) 100%);color:var(--escuro);padding:80px 0 88px;text-align:center;position:relative}
.hero-inner{display:flex;flex-direction:column;align-items:center;gap:24px}
.badge{display:inline-block;font-weight:700;font-size:13px;letter-spacing:1.2px;
  padding:8px 16px;border-radius:999px;background:var(--rosa-claro);color:var(--rosa-primario)}
.headline{font-size:44px;line-height:1.15;font-weight:800;color:var(--escuro);margin:0;max-width:760px;letter-spacing:-0.02em}
.subheadline{font-size:18px;line-height:1.6;color:var(--cinza-texto);max-width:640px;margin:0}
.hero-date{font-size:13px;font-weight:700;letter-spacing:1px;color:var(--rosa-primario);margin:0}
.cta{display:inline-block;background:var(--verde-escuro);color:#fff;text-decoration:none;
  font-weight:800;font-size:18px;letter-spacing:0.5px;padding:20px 36px;border-radius:12px;
  min-height:56px;box-shadow:0 6px 20px rgba(34,197,94,.40);transition:background .2s,transform .2s;
  cursor:pointer;text-align:center;line-height:1.2;width:100%;max-width:460px}
.cta:hover{background:var(--verde-hover);transform:translateY(-1px)}
.cta-pulse{animation:pulse 2.4s ease-in-out infinite}
@keyframes pulse{0%,100%{box-shadow:0 6px 20px rgba(34,197,94,.40)}50%{box-shadow:0 8px 32px rgba(74,222,106,.75)}}
@media(prefers-reduced-motion:reduce){.cta-pulse{animation:none}}

/* SECTIONS */
.section{padding:80px 0}
.section-light{background:var(--branco)}
.section-pink{background:var(--rose-bg)}
.section-dark{background:var(--cinza-bg);color:var(--escuro)}
.section-title{font-size:32px;line-height:1.2;font-weight:800;color:var(--escuro);
  margin:0 0 40px;text-align:center;letter-spacing:-0.01em}
.section-pink .section-title,.section-light .section-title,.section-dark .section-title{color:var(--escuro)}

/* LEARN LIST */
.learn-list,.for-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:20px}
.learn-list li,.for-list li{display:flex;gap:14px;align-items:flex-start;
  background:var(--cinza-bg);padding:20px 22px;border-radius:12px;
  box-shadow:0 2px 10px rgba(139,30,63,.06);font-size:16.5px;line-height:1.6;color:var(--cinza-texto)}
.section-pink .for-list li{background:var(--branco)}
.learn-icon,.check{font-size:22px;flex-shrink:0;line-height:1.4}
.learn-list strong{color:var(--escuro);font-weight:700}
.date-highlight{margin:36px auto 0;display:inline-block;background:var(--rosa-claro);
  color:var(--rosa-primario);font-weight:700;padding:10px 20px;border-radius:8px;font-size:14px;letter-spacing:1px;text-align:center}
.narrow.center,.center{display:block}
.section .narrow{margin:0 auto}
.date-highlight{display:block;width:fit-content;margin-left:auto;margin-right:auto}

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
.final-date{margin-top:18px;font-size:13px;font-weight:700;letter-spacing:1px;color:var(--rosa-primario)}

/* FOOTER */
.footer{background:var(--escuro);color:#D9C8CD;padding:32px 0;font-size:14px;text-align:center}
.footer p{margin:6px 0}
.footer a{color:#F4C9C2;text-decoration:none}
.footer a:hover{text-decoration:underline}

/* MOBILE */
@media(max-width:768px){
  .container{padding:0 20px}
  .hero{padding:56px 0 64px}
  .headline{font-size:30px;line-height:1.2}
  .subheadline{font-size:16px}
  .section{padding:56px 0}
  .section-title{font-size:24px;margin-bottom:28px}
  .learn-list li,.for-list li{padding:16px 18px;font-size:15.5px}
  .authority{grid-template-columns:1fr;gap:28px;text-align:center}
  .authority-text{text-align:left}
  .alice-photo-wrap,.alice-photo{width:240px;height:240px}
  .final-headline{font-size:23px}
  .cta{font-size:17px;padding:18px 24px}
}
`;
