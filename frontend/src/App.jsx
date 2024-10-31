import './app.scss';

const Header = () => (
  <div className='header'>
    <img src="./assets/images/logo.png" alt="Logo da NutriLife" />
    <div className='buttons'>
      {['Artigos', 'Início', 'Sobre', 'Contato', 'Ajuda'].map(label => (
        <button key={label}>{label}</button>
      ))}
        
     <a href="/Login"> Login</a>

    </div>
  </div>
);

const WelcomeSection = () => (
  <section className='welcome'>
    <h1>Bem-Vindo!</h1>
    <h3>A NUTRILIFE está pronta para atender você!</h3>
  </section>
);

const InfoCards = () => {
  const info = [
    "Ajudará você a tornar seu estilo de vida mais saudável",
    "Você terá acesso a artigos sobre nutrição",
    "Aumento de energia e vitalidade",
    "Consultas e exames acessíveis"
  ];

  return (
    <div className='cards'>
      {info.map((text, index) => (
        <div key={index}>
          <h2>{text}</h2>
        </div>
      ))}
    </div>
  );
};

const CallToAction = () => (
  <section className='cta'>
    <h1>Transforme Sua Vida com Nutrição Saudável</h1>
    <p>Agende sua consulta, exames, obtenha seus resultados e seja acompanhado em sua dieta personalizada.</p>
    <p>Acompanhe relatórios, com recomendações e sugestões.</p>
    <button>Agendar Consulta</button>
  </section>
);

const AboutMe = () => (
  <section className='about'>
    <h1>UM POUCO SOBRE MIM</h1>
    <p>Sou nutricionista formada pela Universidade de Harvard e mestre em Nutrição Esportiva pela Universidade de Oxford...</p>
    <img src="" alt="Foto do Nutricionista" />
  </section>
);

const EbookSection = () => (
  <section className='ebook'>
    <h1>OBTENHA O LIVRO ESCRITO POR CRISTINA MIRANDA</h1>
    <p>Baseado em Trabalho de Conclusão de Curso, Cristina Miranda disserta sobre o problema causado pelas redes sociais...</p>
    <button>Obter E-book</button>
  </section>
);

const FAQSection = () => (
  <section className='faq'>
    <h1>DUVIDAS FREQUENTES</h1>
    {/* Conteúdo das dúvidas frequentes */}
  </section>
);

const App = () => (
  <div className="App">
    <Header />
    <WelcomeSection />
    <section className='info'>
      <h1>A NUTRI LIFE</h1>
      <InfoCards />
    </section>
    <CallToAction />
    <AboutMe />
    <EbookSection />
    <FAQSection />
  </div>
);

export default App;