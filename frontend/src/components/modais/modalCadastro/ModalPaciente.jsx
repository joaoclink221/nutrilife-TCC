import "./ModalPaciente.scss"
const ModalPaciente = ({isOpen, onClose}) => {
    
if(!isOpen) return null;
    return (
        <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <form action="" id="formulario">
          <div className="Dados-iniciais">
            <h1>Dados Iniciais</h1>
            <div className="heimdal">
              <div className="sla">
                <label htmlFor="name">Nome</label>
                <input type="text" className="mimir" />
              </div>
              <div className="sla">
                <label htmlFor="date">Data de Nascimento</label>
                <input type="date" className="loki" />
              </div>
              <div className="sla">
                <label htmlFor="gender">Sexo</label>
                <select id="gender">
                  <option value="female">Feminino</option>
                  <option value="male">Masculino</option>
                </select>
              </div>
            </div>
          </div>

          <hr />

          <div className="Dados-da-Paciente">
            <h1>Informações</h1>
            <div className="control">
              <div className="info-dieta">
                <div className="sla">
                  <label>Cintura</label>
                  <input type="text" className="noname" />
                </div>
                <div className="sla">
                  <label>Quadril</label>
                  <input type="text" className="noname" />
                </div>
                <div className="sla">
                  <label>Altura</label>
                  <input type="text" className="noname" />
                </div>
                <div className="sla">
                  <label>Peso</label>
                  <input type="text" className="noname" />
                </div>
              </div>

              <div className="info-dieta">
                <div className="sla">
                  <label>Tipo de dieta</label>
                  <input type="text" className="noname" />
                </div>
                <div className="sla">
                  <label>Data de Início</label>
                  <input type="date" className="loki" />
                </div>
                <div className="sla">
                  <label>Conclusão</label>
                  <input type="date" className="loki" />
                </div>
              </div>
            </div>

            <div className="atlas">
              <div className="nem">
                <h1>Descrição do Paciente</h1>
                <textarea className="description" />
              </div>
              <div className="mid">
                <button className="bnt">Salvar</button>
                <button className="bnt">Excluir</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalPaciente;
