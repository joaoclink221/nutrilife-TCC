import './app.scss';
import React from 'react'

export const App = () => {

  return (
    <div>
      <header>
        <img src="/assets/image/logo.svg" alt="logo-nutri" />

        <button className='inicio'>Início</button>
        <button className='artigos'>Artigos</button>
        <button className='sobre'>Sobre</button>
        <button className='contato'>Contato</button>
        <button className='ajuda'>Ajuda</button>
        <button className='Login'>Login</button>
      </header>

      <div className='welcome'>
        <h1>Bem-vindo!</h1>
        <p>A Nutri Life esttá prnta para atender você!
        </p>
      </div>

    
    </div>
  )
}


export default App



