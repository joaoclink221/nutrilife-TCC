import './agenda.scss';
import { Link } from 'react-router-dom';
import Calendario from "../../components/calendar/Calendario.jsx"
export default function Agenda() {
  return (
    <div className='odin'>
      <Calendario />
      <div className='pt-2'>
        <div className='pre-Modal'>
          <h2>Agendamento</h2>
          <Link className='link'>
            <button className='agendamento'>
              Novo Agendamento
            </button>
          </Link>
        </div>
        <div className='filter'>
          <input id='startDate'
            className="form-control"
            type="date" />
          <span>até</span>
          <input id='endDate'
            className="form-control"
            type="date" />

          <button className='filter2'>
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