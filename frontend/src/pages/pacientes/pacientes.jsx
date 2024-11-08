import Header2 from "../../components/header2/Header2.jsx"
import "./pacientes.scss"
import ModalPaciente from "../../components/modais/modalCadastro/ModalPaciente"
import { UserRoundPlus } from "lucide-react"
import { useState } from "react"
const Pacientes = () => {
  const [isModalOpen,  setIsModalOpen] = useState(false);
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
      <table className="table table-hover">
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
          <tr className='tren'>
            <td scope='col'>1</td>
            <td scope='col'>Joao Victor Rocha Dos Santos</td>
            <td scope='col'>Grave</td>
            <td scope='col'>XX XX</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Pacientes
