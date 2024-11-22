import Header2 from "../../components/header2/Header2.jsx"
import "./pacientes.scss"
import ModalPaciente from "../../components/modais/modalCadastro/ModalPaciente"
import { UserRoundPlus, FilePenLine, Trash } from "lucide-react"
import { useState, useEffect } from 'react';
import axios from "axios"
 export default function Pacientes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pacientesList, setPacientesList] = useState([])
  const [erro, setErro] = useState(null)
  const [pacienteEditando, setPacienteEditando] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:5010/listaPaciente")
      .then(Response => {
        setPacientesList(Response.data)
        setErro(null)
      })
      .catch(error => {
        console.error("erro ao buscar pacientes:", error);
        if (pacientesList.length == 0) { setErro("nenhum paciente encontrado") }
        else { setErro("erro ao buscar paciente. tente novamente mais tarde") }
      });
  }, [pacientesList]);

  const excluirPaciente = async (id) => {
    try {
      const resposta = await axios.delete(`http://localhost:5010/excluirPaciente/${id}`);
      alert(resposta.data.message);
      setPacientesList(pacientesList.filter((paciente) => paciente.id_paciente !== id));
    } catch (erro) {
      alert("Erro ao excluir Paciente: " + erro.message);
    }
  }


  const editarPaciente = (paciente) => {
    setPacienteEditando(paciente);
    setIsModalOpen(true)
  }
    return (
      <div>
        <Header2 />
        <div className="freya">
          <h1>Pacientes</h1>
          <div className="add">
            <button className="addUser" onClick={() => setIsModalOpen(true)}><UserRoundPlus className="icon-user" /> Adicionar Paciente</button>
            <ModalPaciente isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} pacienteEditando={pacienteEditando} />
          </div>
        </div>

        {erro && <p style={{ color: 'red' }}>{erro}</p>}


        {pacientesList.length > 0 ? (
          <table className="table table-hover">
          <thead>
            <tr className='tren'>
              <th scope='col'>ID</th>
              <th scope='col'>Nome</th>
              <th scope='col'>Data de nascimento</th>
              <th scope='col'>sexo</th>
              <th scope='col'>telefone</th>
              <th scope='col'>Email</th>
              <th scope='col' className='col-buttons'></th>
            </tr>
          </thead>
          <tbody>

            {pacientesList.map((paciente, index) => (
              <tr key={index} className='tren'>
                <td scope='col'>{paciente.id_paciente}</td>
                <td scope='col'>{paciente.nome}</td>
                <td scope='col'>{new Date(paciente.data_nascimento).toLocaleDateString()}</td>
                <td scope='col'>{paciente.genero}</td>
                <td scope='col'>{paciente.telefone}</td>
                <td scope='col'>{paciente.email}</td>
                <td scope='col' className='col-buttons'>
                  <button onClick={() => editarPaciente(paciente)} className='bnt-editar'>
                    <FilePenLine />
                  </button>

                  <button onClick={() => excluirPaciente(paciente.id_paciente)} className='btn-excluir'>
                    <Trash />
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>) : (
          !erro && <p>Nenhum paciente encontrado.</p>
        )}
      </div>
    )
  }



