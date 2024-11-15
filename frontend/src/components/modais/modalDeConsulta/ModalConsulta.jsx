import { useState } from "react";
import "./ModalConsulta.scss";
import axios from "axios";


function ModalConsulta({ isOpen, onClose }) {
  const [nomePaciente, setNomePaciente] = useState("");
  const [valorConsulta, setValorConsulta] = useState();
  const [tipoConsulta, setTipoConsulta] = useState("");
  const [dataConsulta, setDataConsulta] = useState("");
  const [mensagem, setMensagem] = useState("");

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
  
      console.log("Dados enviados:", dados);
  
      const resposta = await axios.post("http://localhost:5010/CadastroConsulta", dados);
  
      setMensagem(`Consulta registrada com sucesso! ID: ${resposta.data}`);
      setNomePaciente("");
      setDataConsulta("");
      setTipoConsulta("");
      setValorConsulta("");
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
              <h1>Agendamento de consulta</h1>
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
                  Salvar
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
