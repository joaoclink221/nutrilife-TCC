import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='header'>
    <img src="./assets/images/logo.png" alt="Logo da NutriLife" />
    <div className='buttons'>
      {['Artigos', 'Início', 'Sobre', 'Contato', 'Ajuda'].map(label => (
        <button key={label}>{label}</button>
      ))}
      <Link to="/login">
        <button className='Login-button'>Login</button>
      </Link>
    </div>
  </div>
);

export default Header;