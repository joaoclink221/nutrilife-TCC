import './agenda.scss';
import { Link } from 'react-router-dom';
import Header2 from "../../components/header2/Header2.jsx"
import ModalConsulta from "../../components/modais/modalDeConsulta/ModalConsulta.jsx"
import { useState, useEffect } from 'react';
import axios from "axios"
import {FilePenLine, Trash} from "lucide-react"
export default function Agenda() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consultasList, setConsultasList] = useState([]);
  const [erro, setErro] = useState(null);
  const [consultaEditando, setConsultaEditando] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5010/consultas")
      .then(Response => {
        setConsultasList(Response.data)
        setErro(null)
      })
      .catch(error => {
        console.error("erro ao buscar consultas:", error);

        if(consultasList.length == 0){setErro("nenhuma consulta encontrada")}
        else {setErro("erro ao buscar consulta. tente novamente mais tarde")}
        
      });
  }, [consultasList]);


  const excluirConsulta = async (id) =>{
    try {
      const resposta = await axios.delete(`http://localhost:5010/excluirConsultas/${id}`);
      alert(resposta.data.message);
      setConsultasList(consultasList.filter((consulta) => consulta.id_consulta !==id));
    } catch (erro) {
      alert ("Erro ao excluir consulta: " + erro.message);
    }
  }


  const editarConsulta = (consulta) =>{
    setConsultaEditando(consulta);
    setIsModalOpen(true)
  }
  return (
    <div className='odin'>
      <Header2 />
      <div className='pt-2'>
        <div className='pre-Modal'>
          <h2>Agendamentos</h2>
          <Link className='link'>
            <button className='agendamento' onClick={() => setIsModalOpen(true)}>
              Novo Agendamento
            </button>
          </Link>
          <ModalConsulta isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} consultaEditando={consultaEditando}/>
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

      {erro && <p style={{ color: 'red' }}>{erro}</p>}


      {consultasList.length > 0 ? (
        <table className="table table-hover">
          <thead>
            <tr className='tren'>
              <th scope='col'>ID</th>
              <th scope='col'>Paciente</th>
              <th scope='col'>Serviço</th>
              <th scope='col'>Data</th>
              <th scope='col'>Valor</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {consultasList.map((consulta, index) => (
              <tr key={index} className='tren'>
                <td scope='col'>{consulta.id_consulta}</td>
                <td scope='col'>{consulta.nome_do_paciente}</td>
                <td scope='col'>{consulta.tipo_consulta}</td>
                <td scope='col'>{new Date(consulta.data_consulta).toLocaleDateString()}
                </td>
                <td scope='col' className='col-buttons'>R${consulta.valor}</td>
                <td scope='col' className='col-buttons'>
                  <button onClick={() => editarConsulta(consulta)} className='bnt-editar'>
                    <FilePenLine/>
                    </button>

                    <button onClick={() => excluirConsulta(consulta.id_consulta)} className='btn-excluir'>
                      <Trash/>
                    </button>
                </td>
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