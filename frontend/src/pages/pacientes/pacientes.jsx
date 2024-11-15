import Header2 from "../../components/header2/Header2.jsx"
import "./pacientes.scss"
import ModalPaciente from "../../components/modais/modalCadastro/ModalPaciente"
import { UserRoundPlus } from "lucide-react"
import { useState, useEffect } from 'react';
import axios from "axios"
function Pacientes() {
  const [isModalOpen,  setIsModalOpen] = useState(false);
  const [pacientes, setPacientes] = useState([])
  const [erro, setErro] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:5010/")
      .then(Response => {
        setPacientes(Response.data)
        setErro(null)
      })
      .catch(error => {
        console.error("erro ao buscar consultas:", error);
        setErro("erro ao buscar consulta. tente novamente mais tarde")
      });
  }, []);
  return (
    <div>
      <Header2 />
      <div className="freya">
        <h1>Pacientes</h1>
        <div className="add">
          <button className="addUser" onClick={() => setIsModalOpen(true)}><UserRoundPlus className="icon-user"/> Adicionar Paciente</button>
          <ModalPaciente isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
          <select name="filter" id="filtro">
            <option value="">Todos</option>
            <option value="">Comum</option>
            <option value="">Sério</option>
            <option value="">Grave</option>
            <option value="">Urgente</option>
          </select>
        </div>
      </div>

      {erro && <p style = {{color:'red'}}>{erro}</p>}


      { pacientes.length >0 ?(<table className="table table-hover">
        <thead>
          <tr className='tren'>
            <th scope='col'>ID</th>
            <th scope='col'>Nome</th>
            <th scope='col'>Data de nascimento</th>
            <th scope='col'>Genero</th>
            <th scope='col'>telefone</th>
            <th scope='col'>Email</th>
            <th scope='col'>Situação</th>
            <th scope='col' className='col-buttons'></th>
          </tr>
        </thead>
        <tbody>

        {pacientes.map((pacientes, index) => (
              <tr key={index} className='tren'>
                <td scope='col'>{pacientes.id_paciente}</td>
                <td scope='col'>{pacientes.nome}</td>
                <td scope='col'>{pacientes.data_nascimento}</td>
                <td scope='col'>{pacientes.genero}</td>
                <td scope='col'>{pacientes.telefone}</td>
                <td scope='col'>{pacientes.email}</td>
                <td scope='col'>{pacientes.situacao}</td>
                <td scope='col' className='col-buttons'>{pacientes.valor}</td>
              </tr>
            ))}
        </tbody>
      </table>): (
        !erro && <p>Nenhuma consulta encontrada.</p>
      )}
    </div>
  )
}

export default Pacientes
