export default function Home() {
  const skills = [
    { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
    { title: "Programação", items: ["Python", "Java", "C", "Lógica de Programação", "POO"] },
    { title: "Redes", items: ["Redes de Computadores", "Cisco Packet Tracer"] },
    { title: "Ferramentas", items: ["Git", "GitHub", "VSCode", "VirtualBox", "Vercel"] },
    { title: "Banco de Dados", items: ["SQL", "MySQL"] },
];

  const projects = [
    {
      name: "Portfólio Pessoal",
      description: "Site de currículo desenvolvido com Next.js e React.",
      tech: "Next.js · React · CSS",
      link: "[SEU GITHUB]",
    },
    {
      name: "Jogo da Forca",
      description: "Jogo interativo desenvolvido com React, disponível neste site.",
      tech: "React · JavaScript",
      link: "/forca",
    },
  ];

  const contacts = [
    { label: "GitHub", value: "[SEU GITHUB]", href: "[SEU GITHUB]" },
    { label: "LinkedIn", value: "[SEU LINKEDIN]", href: "[SEU LINKEDIN]" },
    { label: "E-mail", value: "[SEU EMAIL]", href: "mailto:[SEU EMAIL]" },
  ];

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#inicio" className="logo" aria-label="Marcos Dalyson, ir para o início">
            <span className="logo-mark">MD</span>
          </a>
          <nav className="menu">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#experiencia">Experiência</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
            <a href="/forca" className="menu-cta">Jogo da Forca</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-text">
              <span className="status">
                <span className="status-dot"></span>
                Disponível para oportunidades
              </span>

              <h1>
                Marcos
                <br />
                Dalyson
              </h1>

              <p className="hero-course">Estudante de Ciência da Computação</p>

              <p className="hero-description">
                Interessado em tecnologia, programação e desenvolvimento de
                software. Busco oportunidades para colocar meus conhecimentos em
                prática e continuar evoluindo profissionalmente.
              </p>

              <div className="hero-buttons">
                <a href="#projetos" className="btn btn-dark">Ver projetos</a>
                <a href="[SEU GITHUB]" target="_blank" rel="noopener noreferrer" className="btn btn-line">
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="hero-photo">
              <div className="photo-box">
                <div className="photo-placeholder">SUA FOTO</div>
              </div>
              <span className="photo-tag">Est. 2026</span>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="section" id="sobre">
          <div className="container row">
            <div className="row-label">
              <span>01</span>
              <h2>Sobre</h2>
            </div>
            <div className="row-content">
              <p className="lead">
              Estudante de Ciência da Computação, com interesse em desenvolvimento web,
              lógica de programação e resolução de problemas. Tenho formação técnica em
              Redes de Computadores e curiosidade pela área de Cibersegurança.
              </p>
              <dl className="facts">
                <div><dt>Curso</dt><dd>Ciência da Computação</dd></div>
                <div><dt>Instituição</dt><dd>Universidade Católica de Pernambuco</dd></div>
                <div><dt>Interesses</dt><dd>Web, Software, Dados</dd></div>
                <div><dt>Objetivo</dt><dd>Primeira oportunidade em tecnologia</dd></div>
              </dl>
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="section" id="experiencia">
          <div className="container row">
            <div className="row-label">
              <span>02</span>
              <h2>Experiência</h2>
            </div>
            <div className="row-content">
              <div className="entry">
                <span className="entry-date">5° Período</span>
                <div>
                  <h3>Ciência da Computação</h3>
                  <p>Universidade Católica de Pernambuco · Formação acadêmica</p>
                </div>
              </div>
              <div className="entry">
                <span className="entry-date">Atual</span>
                <div>
                  <h3>Experiência profissional</h3>
                  <p>Buscando minha primeira oportunidade profissional na área de tecnologia.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HABILIDADES */}
        <section className="section" id="habilidades">
          <div className="container row">
            <div className="row-label">
              <span>03</span>
              <h2>Habilidades</h2>
            </div>
            <div className="row-content">
              {skills.map((group) => (
                <div className="skill-row" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tags">
                    {group.items.map((item) => (
                      <span className="tag" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section className="section" id="projetos">
          <div className="container row">
            <div className="row-label">
              <span>04</span>
              <h2>Projetos</h2>
            </div>
            <div className="row-content">
              {projects.map((p, i) => (
                <a href={p.link} className="project-row" key={p.name}>
                  <span className="project-num">0{i + 1}</span>
                  <div className="project-info">
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <small>{p.tech}</small>
                  </div>
                  <span className="project-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* CONTATO + FOOTER */}
      <footer className="footer" id="contato">
        <div className="container">
          <p className="footer-kicker">05 — Contato</p>
          <h2 className="footer-title">Vamos conversar?</h2>

          <div className="contact-list">
            {contacts.map((c) => (
              <a href={c.href} className="contact-row" key={c.label} target="_blank" rel="noopener noreferrer">
                <span>{c.label}</span>
                <strong>{c.value}</strong>
                <em>↗</em>
              </a>
            ))}
          </div>

          <div className="footer-bottom">
            <p>© 2026 Marcos Dalyson · [Ciência da Computação]</p>
            <a href="#inicio">Voltar ao início ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}