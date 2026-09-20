function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#inicio" className="logo mono" aria-label="Marcos Dalyson, ir para o início">
          MD
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
  );
}

function Row({ label, accent, children }) {
  return (
    <div className="tb-row">
      <dt className="mono label">{label}</dt>
      <dd className={accent ? "tb-accent" : ""}>{children}</dd>
    </div>
  );
}

function Heading({ code, title }) {
  return (
    <div className="heading">
      <span className="mono code">{code}</span>
      <h2>{title}</h2>
    </div>
  );
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map(function (item) {
        return (
          <li key={item} className="mono tag">
            {item}
          </li>
        );
      })}
    </ul>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="inicio">
      <div>
        <span className="status">
          <span className="status-dot" aria-hidden="true" />
          Disponível para oportunidades
        </span>

        <h1>Marcos Dalyson</h1>

        <p className="hero-meta mono">
          Ciência da Computação · UNICAP · 5° período
        </p>

        <p className="lead">
          Estudante de Ciência da Computação, com interesse em desenvolvimento
          web, lógica de programação, resolução de problemas, além de curiosidade em Cibersegurança. Busco
          oportunidades para colocar meus conhecimentos em prática e continuar
          evoluindo profissionalmente.
        </p>

        <div className="actions">
          <a href="#projetos" className="btn btn-dark">Ver projetos</a>
          <a href="https://github.com/marcosdalysonsb" className="btn" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>

      <dl className="about-list">
        <div>
          <dt className="mono label">🎓 Formação</dt>
          <dd>Ciência da Computação</dd>
        </div>
        <div>
          <dt className="mono label">💡 Interesses</dt>
          <dd>Web, Software, Cibersegurança</dd>
        </div>
        <div>
          <dt className="mono label">🎯 Objetivo</dt>
          <dd>Primeira oportunidade em tecnologia</dd>
        </div>
      </dl>
    </section>
  );
}

function Experiencia() {
  return (
    <section className="section wrap" id="experiencia">
      <Heading code="01" title="Experiência" />
      <div className="grid">
        <article className="card">
          <div className="card-head">
            <span className="mono card-code">ACA-01</span>
            <span className="mono card-meta">5° Período</span>
          </div>
          <h3>Ciência da Computação</h3>
          <p>Universidade Católica de Pernambuco · Formação acadêmica</p>
        </article>

        <article className="card">
          <div className="card-head">
            <span className="mono card-code">ACA-02</span>
            <span className="mono card-meta">2023</span>
          </div>
          <h3>Técnico em Redes de Computadores</h3>
          <p>ETE Pastor Isaac Martins Rodrigues · Ensino médio técnico</p>
        </article>

        <article className="card">
          <div className="card-head">
            <span className="mono card-code">PRO-01</span>
            <span className="mono status-tag">Em aberto</span>
          </div>
          <h3>Experiência profissional</h3>
          <p>Buscando minha primeira oportunidade profissional na área de tecnologia.</p>
        </article>
      </div>
    </section>
  );
}

function Habilidades() {
  return (
    <section className="section wrap" id="habilidades">
      <Heading code="02" title="Habilidades" />
      <div className="grid">
        <article className="card">
          <div className="card-head"><span className="mono card-code">HAB-01</span></div>
          <h3>Frontend</h3>
          <Tags items={["HTML", "CSS", "JavaScript", "React", "Next.js"]} />
        </article>
        <article className="card">
          <div className="card-head"><span className="mono card-code">HAB-02</span></div>
          <h3>Programação</h3>
          <Tags items={["Python", "Java", "C", "Lógica de Programação", "POO"]} />
        </article>
        <article className="card">
          <div className="card-head"><span className="mono card-code">HAB-03</span></div>
          <h3>Redes</h3>
          <Tags items={["Redes de Computadores", "Cisco Packet Tracer"]} />
        </article>
        <article className="card">
          <div className="card-head"><span className="mono card-code">HAB-04</span></div>
          <h3>Ferramentas</h3>
          <Tags items={["Git", "GitHub", "VSCode", "VirtualBox", "Vercel"]} />
        </article>
        <article className="card">
          <div className="card-head"><span className="mono card-code">HAB-05</span></div>
          <h3>Banco de Dados</h3>
          <Tags items={["SQL", "MySQL"]} />
        </article>
      </div>
    </section>
  );
}

function Project({ code, name, tech, href, label, children }) {
  const content = (
    <>
      <div className="card-head">
        <span className="mono card-code">{code}</span>

        {label && (
          <span className="mono link-out">
            {label} {href && "→"}
          </span>
        )}
      </div>

      <h3>{name}</h3>
      <p>{children}</p>
      <span className="mono tech">{tech}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="card project" target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <article className="card project">
      {content}
    </article>
  );
}

function Projetos() {
  return (
    <section className="section wrap" id="projetos">
      <Heading code="03" title="Projetos" />

      <div className="grid">
        <Project
          code="PRJ-01"
          name="Sistema de Biblioteca"
          tech="Java · POO"
          href="https://github.com/NextCoffeeJ/sistema_biblioteca"
          label="ver repositório"
        >
          Sistema de biblioteca desenvolvido em Java, aplicando classes e objetos,
          encapsulamento, herança e polimorfismo.
        </Project>

        <Project
          code="PRJ-02"
          name="Next Car"
          tech="Java · Spring Boot · MySQL · Postman"
          href="https://github.com/NextCar-Project/projeto-next-car"
          label="ver repositório"
        >
          Sistema para gerenciamento e venda de carros seminovos, desenvolvido
          com arquitetura moderna, padrões de projeto e testes automatizados.
        </Project>

        <Project
          code="PRJ-03"
          name="Chat UDP"
          tech="Python · UDP · Redes de Computadores"
          href="https://github.com/marcosdalysonsb/Atividade_Redes_Chat"
          label="ver repositório"
        >
          Chat desenvolvido com UDP, com confirmação de entrega, simulação de perda
          de pacotes e retransmissão manual de mensagens.
        </Project>

        <Project
          code="PRJ-04"
          name="Jogo de Dados"
          tech="JavaScript · HTML · CSS"
          href="https://programacao-web-mobile-rxnn.vercel.app/?classId=987468b2-1d5e-46b6-bc38-d45c727a0ad1&assignmentId=944506f4-6f06-444e-923e-5a520235c2e2&submissionId=637bf7ea-98b0-f32c-4aad-2503814a45b6"
          label="jogar"
        >
          Jogo interativo desenvolvido com JavaScript, utilizando lógica de programação
          e geração de resultados aleatórios.
        </Project>

        <Project
          code="PRJ-05"
          name="Extrator de PDF — 5º CTA"
          tech="Python"
          label="projeto acadêmico"
        >
          Projeto acadêmico desenvolvido em Python para o 5º CTA do Exército
          Brasileiro, voltado à leitura e extração de dados em arquivos PDF,
          com uma interface para facilitar a utilização do sistema.
        </Project>

        <Project
          code="PRJ-06"
          name="Andador Inteligente"
          tech="Python · Raspberry Pi · Flask · SQLite · YOLO · GPS · MPU6050 · Telegram"
          label="projeto acadêmico"
        >
          Sistema desenvolvido para monitoramento e segurança do usuário, integrando
          sensores, câmera, GPS e visão computacional para identificação de quedas
          e acompanhamento em tempo real.
        </Project>

        <Project
          code="PRJ-07"
          name="Next Fit — Sistema de Academia"
          tech="SQL · MER · DER · Modelagem de Dados"
          label="projeto acadêmico"
        >
          Projeto de modelagem de banco de dados para uma academia, estruturando
          informações de alunos, planos, instrutores, treinos e pagamentos, com
          definição de relacionamentos, chaves e organização das tabelas.
        </Project>



      </div>
    </section>
  );
}

function Extracurriculares() {
  return (
    <section className="section wrap" id="extracurriculares">
      <Heading code="04" title="Extracurriculares" />

      <div className="grid">
        <article className="card">
          <div className="card-head">
            <span className="mono card-code">EXT-01</span>
          </div>
          <h3>Palestra - Lógica de Programação</h3>
          <p>
            Participação na Jornada de Tecnologia UNICAP 2026, com foco nos fundamentos necessários para o desenvolvimento de boas práticas de programação.
          </p>
        </article>

        <article className="card">
          <div className="card-head">
            <span className="mono card-code">EXT-02</span>
          </div>
          <h3>Minicurso Introdução à Linguagem C</h3>
          <p>
            Participação em minicurso sobre os fundamentos e conceitos básicos da linguagem C, durante a Jornada de Tecnologia UNICAP 2026.
          </p>
        </article>

        <article className="card">
          <div className="card-head">
            <span className="mono card-code">EXT-03</span>
          </div>
          <h3>Palestra - Pré-programação</h3>
          <p>
            Participação em palestra sobre estruturação do raciocínio lógico e planejamento de soluções antes da implementação do código.
          </p>
        </article>
      </div>
    </section>
  );
}

function Contact({ label, value, href }) {
  return (
    <a href={href} className="contact-row" target="_blank" rel="noreferrer">
      <span className="mono label">{label}</span>
      <span>{value}</span>
      <span className="arrow">↗</span>
    </a>
  );
}

function Contato() {
  return (
    <section className="section wrap" id="contato">
      <Heading code="05" title="Contato" />
      <div className="contact-list">
        <Contact label="🐙 GitHub" value="github.com/marcosdalysonsb" href="https://github.com/marcosdalysonsb" />
        <Contact label="💼 LinkedIn" value="https://www.linkedin.com/in/marcos-dalyson" href="https://www.linkedin.com/in/marcos-dalyson-9457373b3/" />
        <Contact label="📧 E-mail" value="marcosdalyson@gmail.com" href="mailto:marcosdalyson@gmail.com" />
      </div>

    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="mono">Marcos Dalyson · Ciência da Computação</span>
        <span className="mono">© 2026 · <a href="#inicio">Voltar ao início ↑</a></span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experiencia />
        <Habilidades />
        <Projetos />
        <Extracurriculares />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
