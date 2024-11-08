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

      <div className='Cards'>
        <h1 className='titulo2'>A NUTRI LIFE</h1>

        <div className='card1'><p>Ajudará você a tornar seu estilo de vida mais saudável</p></div>

        <div className='card2'> <p>Entender melhor sobre principais assuntos sobre nutrição</p></div>

        <div className='card3'><p>Aumento de energia e vitalidade tornando sau vida mais longa</p></div>

        <div className='card4'><p>Conultas e exames pensados em seu bem-estar, por um preço acessível</p></div>
      </div>

    </div>
  )
}


export default App



