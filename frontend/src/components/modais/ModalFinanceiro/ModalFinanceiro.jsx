import "./ModalFinanceiro.scss";

const ModalFinanceiro = ({ isOpen = true, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="overlay-container">
      <div className="popup-box">
        <button className="btn-close" onClick={onClose}>
          &times;
        </button>
        <form action="" id="finance-form">
          <div className="section-primary">
            <h1>Financeiro</h1>
            <div className="primary-group">
              
              <div className="input-wrapper">
                <label htmlFor="situacao">Situação</label>
                <input type="checkbox" id="situacao" className="checkbox-field" />
              </div>
              
              <div className="input-wrapper">
                <label htmlFor="tipo_despesa">Tipo de Despesa</label>
                <input type="text" id="tipo_despesa" className="input-field" />
              </div>
              
              <div className="input-wrapper">
                <label htmlFor="valor">Valor</label>
                <input type="number" id="valor" className="input-field" step="0.01" />
              </div>
              
              <div className="input-wrapper">
                <label htmlFor="receita_mes">Receita do Mês</label>
                <input type="number" id="receita_mes" className="input-field" step="0.01" />
              </div>
              
              <div className="input-wrapper">
                <label htmlFor="gasto">Gasto</label>
                <input type="number" id="gasto" className="input-field" step="0.01" />
              </div>
              
              <div className="input-wrapper">
                <label htmlFor="lucro">Lucro</label>
                <input type="number" id="lucro" className="input-field" step="0.01" />
              </div>

              <button type="submit" className="hollow">Salvar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalFinanceiro;
