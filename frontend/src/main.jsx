import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Início from './pages/início/inicio.jsx';
import Login from './compoents/login/login.jsx';
import Financeiro from './pages/financeiro/financeiro.jsx';
import Agenda from './pages/agenda/agenda.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<App />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/início' element = {<Início />}/>
        <Route path='/finaceiro' element = {<Financeiro />}/>
        <Route path='/agenda' element = {<Agenda />}/>

      </Routes>
    </Router>
  </StrictMode>,
)
