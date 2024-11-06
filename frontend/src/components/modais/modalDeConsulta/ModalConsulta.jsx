import "./ModalConsulta.scss"

const ModalConsulta = ({isOpen, onClose}) => {
  if(!isOpen) return null;
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
              <select id="gender" className="dropdown-select">
                <option value="female">Presencial</option>
                <option value="male">Online</option>
              </select>
            </div>
            <div className="input-wrapper">
              <label htmlFor="name">Valor da consulta</label>
              <input type="number" className="input-field" />
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