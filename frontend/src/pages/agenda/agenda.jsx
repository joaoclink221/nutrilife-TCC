import './agenda.scss';
import { Link } from 'react-router-dom';
import Header2 from "../../components/header2/Header2.jsx"
import ModalConsulta from "../../components/modais/modalDeConsulta/ModalConsulta.jsx"
import { useState, useEffect } from 'react';
import axios from "axios"
export default function Agenda() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consultas, setConsultas] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5010/consultas")
      .then(Response => {
        setConsultas(Response.data)
        setErro(null)
      })
      .catch(error => {
        console.error("erro ao buscar consultas:", error);
        setErro("erro ao buscar consulta. tente novamente mais tarde")
      });
  }, []);
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
          <ModalConsulta isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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

      {erro && <p style = {{color:'red'}}>{erro}</p>}

      
      {consultas.length > 0 ? (
        <table className="table table-hover">
          <thead>
            <tr className='tren'>
              <th scope='col'>Paciente</th>
              <th scope='col'>Serviço</th>
              <th scope='col'>Data/Hora</th>
              <th scope='col'>Valor</th>
            </tr>
          </thead>
          <tbody>
            {consultas.map((consulta, index) => (
              <tr key={index} className='tren'>
                <td scope='col'>{consulta.nome_do_paciente}</td>
                <td scope='col'>{consulta.tipo_consulta}</td>
                <td scope='col'>{consulta.data_consulta}</td>
                <td scope='col' className='col-buttons'>{consulta.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !erro && <p>Nenhuma consulta encontrada.</p>
      )}
    </div>
  )
}