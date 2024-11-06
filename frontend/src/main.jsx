import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Agenda from './pages/agenda/agenda.jsx'
import Inicio from './pages/inicio/inicio.jsx'
import Login from './pages/login/Login.jsx'
import Pacientes from './pages/pacientes/pacientes.jsx'
import Financeiro from './pages/financeiro/financeiro.jsx'
import ModalConsulta from './components/modais/modalDeConsulta/ModalConsulta.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/início' element={<Inicio />} />
        <Route path='/financeiro' element={<Financeiro />} />
        <Route path='/consulta' element={<ModalConsulta />} />
        <Route path='/pacientes' element={< Pacientes />} />
        <Route path='/agenda' element={<Agenda />} />
      </Routes>
    </Router>
  </StrictMode>,
)
