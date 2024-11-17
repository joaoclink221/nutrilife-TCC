import "./ModalFinanceiro.scss";
import { useState } from "react";
const ModalFinanceiro = ({ isOpen = true, onClose }) => {
  const [situacao, setSituacao] = useState()
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
                <label htmlFor="situacao">tipo de despesa</label>
                <select className="input-field" onChange={(e) => {(e.target.value)}}>
                  <option value=''>tipo</option>
                  <option value={true}>ganho</option>
                  <option value={false}>gasto</option>
                </select>
              </div>
              
              <div className="input-wrapper">
                <label htmlFor="tipo_despesa">Nome da despesa</label>
                <input type="text" id="tipo_despesa" className="input-field" />
              </div>
              
              <div className="input-wrapper">
                <label htmlFor="valor">Valor</label>
                <input type="number" id="valor" className="input-field" step="0.01" />
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
