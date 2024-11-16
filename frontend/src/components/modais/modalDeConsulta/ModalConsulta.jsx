import { useState, useEffect } from "react";
import "./ModalConsulta.scss";
import axios from "axios";


function ModalConsulta({ isOpen, onClose, consultaEditando }) {
  const [nomePaciente, setNomePaciente] = useState("");
  const [valorConsulta, setValorConsulta] = useState();
  const [tipoConsulta, setTipoConsulta] = useState("");
  const [dataConsulta, setDataConsulta] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() =>{
    if(consultaEditando){
      setNomePaciente(consultaEditando.nome_do_paciente);
      setValorConsulta(consultaEditando.valor);
      setTipoConsulta(consultaEditando.tipo_consulta);
      setDataConsulta(consultaEditando.data_consulta.slice(0, 16));
    } else{
      setNomePaciente("");
      setValorConsulta("");
      setTipoConsulta("");
      setDataConsulta("");
    }
  }, [consultaEditando, isOpen])

  if (!isOpen) return null;

  const register = async (event) => {
    event.preventDefault();
  
    if (!nomePaciente || !dataConsulta || !tipoConsulta || !valorConsulta) {
      setMensagem("Todos os campos são obrigatórios.");
      return;
    }
  
    try {
      
      const dados = {
        nome_do_paciente: nomePaciente,
        data_consulta: dataConsulta,
        tipo_consulta: tipoConsulta,
        valor: parseFloat(valorConsulta), 
      };

      if(consultaEditando){
        console.log(consultaEditando)
        const resposta = await axios.put(`http://localhost:5010/AtualizarConsulta/${consultaEditando.id_consulta}`, dados)
        setMensagem(`consulta editada com sucesso`)
      } else{
        console.log(dataConsulta);
        
        const resposta = await axios.post("http://localhost:5010/CadastroConsulta", dados);
        setMensagem(`Consulta registrada com sucesso!`);
        setNomePaciente("");
        setDataConsulta("");
        setTipoConsulta("");
        setValorConsulta("");
      }
  
      console.log("Dados enviados:", dados);
  
      
      
    } catch (erro) {
      console.error("Erro ao registrar consulta:", erro.response?.data);
      setMensagem(erro.response?.data?.erro || "Erro ao conectar com o servidor.");
    }
  };
  

  return (
    <div>
      <div className="overlay-container">
        <div className="popup-box">
          <button className="btn-close" onClick={onClose}>
            &times;
          </button>
          <form onSubmit={register} id="user-form">
            <div className="section-primary">
              <h1>{consultaEditando ? "Editar Consulta" : "Agendamento de Consulta"}</h1>
              <div className="primary-group">
                <div className="input-wrapper">
                  <label htmlFor="name">Nome completo do paciente</label>
                  <input
                    type="text"
                    className="input-field"
                    value={nomePaciente}
                    onChange={(e) => setNomePaciente(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="date">Data e hora da consulta</label>
                  <input
                    type="datetime-local"
                    className="date-picker"
                    value={dataConsulta}
                    onChange={(e) => setDataConsulta(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="gender">Tipo de Consulta</label>
                  <input
                    type="text"
                    className="input-field"
                    value={tipoConsulta}
                    onChange={(e) => setTipoConsulta(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="name">Valor da consulta</label>
                  <input
                    type="number"
                    className="input-field"
                    step="0.01"
                    value={valorConsulta}
                    onChange={(e) => setValorConsulta(parseFloat(e.target.value))}
                  />
                </div>
                <button className="hollow" type="submit">
                {consultaEditando ? "Atualizar" : "Salvar"}
                </button>
              </div>
              {mensagem && <p>{mensagem}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalConsulta;
