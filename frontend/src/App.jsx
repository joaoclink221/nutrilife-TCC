import './app.scss';
import { Link } from "react-router-dom"
import React from 'react'

export const App = () => {

  return (
    <div className='pai'>
      <header className='filho'>
        <img src="/src/assets/image/image.png" alt="" />
        <button className='inicio'>Início</button>
        <button className='artigos'>Artigos</button>
        <button className='sobre'>Sobre</button>
        <button className='contato'>Contato</button>
        <button className='ajuda'>Ajuda</button>
        <Link to="/login"> <button className='login'>Login</button></Link>
      </header>

      <div className='welcome'>
        <h1 className='titulo1'>Bem-vindo!</h1>
        <p className='text'>A Nutri Life está pronta para atender você!
        </p>
      </div>

      <div className='section2'>

        <h1 className='titulo2'>A NUTRI LIFE</h1>

        <div className='Cards'>
          <div className='card1'><p>Ajudará você a tornar seu estilo de vida mais saudável</p></div>

          <div className='card2'> <p>Entender melhor sobre principais assuntos sobre nutrição</p></div>

          <div className='card3'><p>Aumento de energia e vitalidade tornando vida mais longa</p></div>

          <div className='card4'><p>Consultas e exames pensados em seu bem-estar, por um preço acessível</p></div>
        </div>
      </div>

      <div className='section3'>
        <img src="/src/assets/image/image2.jpg" alt="image2" />
        <h1 className='titulo3'>Transforme Sua Vida com Nutrição Saudável</h1>
        <p className='texto'>Agende sua consulta, exames, obtenha seus resultados e seja acompanhado em sua dieta personalizada <br />
          Acompanhe relatórios, com recomendações e sugestões </p>

        <button className='agendar'>Agendar Consulta</button>
      </div>

      <div className='section4'>
        <img src="\src\assets\image\Inserir um título.png" alt="livro" />
        <h1 className='titulo4'>OBTENHA O LIVRO ESCRITO POR CRISTINA MIRANDA</h1>
        <p className='texto4'>Baseado em Trabalho de Conclusão de Curso, editado e melhorado, Cristina Miranda disserta sobre o problema causado pelas redes sociais em relação as redes sociais, com suas dietas mirabolantes sem entender os conceitos base da nutrição. </p>

        
      </div>

      <div className='section5'>

        <h1 className='titulo5'>UM POUCO SOBRE MIM</h1>
        <p className='texto5'>
        Sou nutricionista formada pela Universidade de Harvard e mestre em Nutrição Esportiva pela Universidade de Oxford. Durante meus estudos, aprofundei meu conhecimento em nutrição clínica e esportiva, com foco em dietas personalizadas e desempenho atlético. Continuo me atualizando constantemente para oferecer o melhor suporte a meus clientes na busca por saúde e bem-estar.
        </p>
        <img src="\src\assets\image\nutricionista.jpg" alt="nutri" />
      </div>

      <div className='section6'>
        <h1>DÚVIDAS FREQUNTES</h1>

        <div className='blocos'>
          <div className='bc1'><h3>duvida</h3>
          <p>resposta</p>
          </div>

          <div className='bc2'><h3>duvida</h3>
          <p>resposta</p>
          </div>

          <div className='bc1'><h3>duvida</h3>
          <p>resposta</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}


export default App



