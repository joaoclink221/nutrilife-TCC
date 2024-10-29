import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Agenda from './pages/agenda/agenda.jsx'
import Inicio from './pages/inicio/inicio.jsx'
import Login from './pages/login/Login.jsx'
import Financeiro from './pages/financeiro/financeiro.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<App />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/início' element = {<Inicio />}/>
        <Route path='/finaceiro' element = {<Financeiro />}/>
        <Route path='/agenda' element = {<Agenda />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
