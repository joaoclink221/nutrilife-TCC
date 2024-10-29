import './agenda.css';
import Calendario from '../../components/calendar/Calendario';
import { House, CircleDollarSign, Mail, Calendar, ClipboardList } from "lucide-react";

export default function Agenda() {
  return (
    <div className="container">
      
      <aside className="sidebar">
        <div className="menu-icons">
          <button className="icon"><House className='min'/></button>
          <button className="icon"><CircleDollarSign className='min'/></button>
          <button className="icon"><Mail className='min'/></button>
          <button className="icon"><Calendar className='min'/></button>
          <button className="icon"><ClipboardList className='mind'/></button>
        </div>
      </aside>

      <button className="sidebar-button">Agenda</button>
      
      <div className="color-code">
        <h3>Código de cores</h3>
        <div className="color-item">
          <span className="dot green-dot"></span> Acompanhamento
        </div>
        <div className="color-item">
          <span className="dot red-dot"></span> Resultados de exames
        </div>
        <div className="color-item">
          <span className="dot blue-dot"></span> Consulta
        </div>
      </div>
      
      <main className="main-content">
        <header className="header">
          <div className="user-info">
            <span className="user-name">Christina Miranda</span>
            <span className="user-company">NUTRI LIFE</span>
            <div className="user-avatar">
              <img src="user-avatar.png" alt="User Avatar" />
            </div>
          </div>
        </header>

        <Calendario />
      </main>
    </div>
  )
}