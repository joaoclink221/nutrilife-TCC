export const navigation = [
    {
      id: "0",
      title: "Inicio",
      url: "/inicio",
    },
    {
      id: "1",
      title: "Financeiro",
      url: "/financeiro",
    },
    {
      id: "3",
      title: "Agendamento",
      url: "/agenda",
    },
    {
      id: "4",
      title: "Pacientes",
      url: "/pacientes",
    },
    {
      id: "5",
      title: "Logout",
      url: "/",
      onclick: () => localStorage.removeItem('TOKEN'),
      onlyMobile: true,
    },
  ];

 
  
  export const LandingHeader =[
    {
      id: "0",
      title: "artigos",
      url: "#artigos",
    },
    {
      id: "1",
      title: "Inicio",
      url: "#inicio",
    },
    {
      id: "2",
      title: "Sobre",
      url: "#sobre",
    },
    {
      id: "3",
      title: "Contatos",
      url: "#contatos",
    },
    {
      id: "4",
      title: "Ajuda",
      url: "#ajuda",
    },
    {
      id: "5",
      title: "Entrar",
      url: "/login",
      onlyMobile: true,
    },
  ]
  

  export const Cards =[
    {
      id: "0",
      text: "Ajudará você a tornar seu estilo de vida mais saudável"
    },
    {
      id: "1",
      text: "Você terá acesso a artigos para entender melhor sobre principais assuntos sobre nutrição"
    },

    {
      id: "2",
      text: "Aumento de energia e vitalidade tornando sau vida mais longa"
    },

    {
      id: "3",
      text: "Cosnultas e exames pensados em seu bem_estar, por um preço acessível"
    }
  ]