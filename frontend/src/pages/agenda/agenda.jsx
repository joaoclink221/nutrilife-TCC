import './agenda.scss';
import { Link } from 'react-router-dom';
import Header2 from "../../components/calendar/Calendario.jsx"
import ModalConsulta from "../../components/modais/modalDeConsulta/ModalConsulta.jsx" 
import { useState } from 'react';
export default function Agenda() {
  const [isModalOpen,  setIsModalOpen] = useState(false);
  return (
    <div className='odin'>
      <Header2 />
      <div className='pt-2'>
        <div className='pre-Modal'>
          <h2>Agendamento</h2>
          <Link className='link'>
            <button className='agendamento' onClick={() => setIsModalOpen(true)}>
              Novo Agendamento
            </button>
          </Link>
          <ModalConsulta isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </div>
        <div className='filter'>
          <input id='startDate'
            className="form-control"
            type="date" />
          <span>até</span>
          <input id='endDate'
            className="form-control"
            type="date" />

          <button className='hollow'>
            Fitrar
          </button>
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr className='tren'>
            <th scope='col'>Paciente</th>
            <th scope='col'>serviço</th>
            <th scope='col'>Data/Hora</th>
            <th scope='col'>valor</th>
            <th scope='col' className='col-buttons'></th>
          </tr>
        </thead>
        <tbody>
          <tr className='tren'>
            <td scope='col'>João</td>
            <td scope='col'>Consulta</td>
            <td scope='col'>01-11-2024 16:00h</td>
            <td scope='col' className='col-buttons'>R$300</td>
            <td scope='col'>XX XX</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}