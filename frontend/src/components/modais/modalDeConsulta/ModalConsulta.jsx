import { useState } from "react";
import "./ModalConsulta.scss"

function ModalConsulta ({isOpen, onClose}){
  const [nomePaciente, setNomePaciente]  = useState("")
  const [valorConsulta, setValorConsulta]  = useState("")
  const [tipoConsulta, setTipoConsulta]  = useState("")
  const [dataConsulta, setDataConsulta]  = useState("")
  if(!isOpen) return null;

  const handleSubmit = (event) =>{
    event.preventDefault();
    const consultaData = {
      nomePaciente,
      valorConsulta,
      tipoConsulta,
      dataConsulta
    }
  }
  return (
    <div>
  <div className="overlay-container">
    <div className="popup-box">
      <button className="btn-close" onClick={onClose}>
        &times;
      </button>
      <form action="" id="user-form">
        <div className="section-primary">
          <h1>Agendamento de consulta</h1>
          <div className="primary-group">
            <div className="input-wrapper">
              <label htmlFor="name">Nome completo do paciente</label>
              <input type="text" className="input-field" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="date">Data e hora da consulta</label>
              <input type="date" className="date-picker" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="gender">Tipo de Consulta</label>
              <input type="text" className="input-field" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="name">Valor da consulta</label>
              <input type="number" className="input-field" step="0.01"/>
            </div>

            <button className="hollow">Salvar</button>
          </div>
        </div>
        
      </form>
    </div>
  </div>
</div>
  )
}

export default ModalConsulta
