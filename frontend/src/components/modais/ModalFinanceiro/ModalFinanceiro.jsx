import axios from "axios";
import "./ModalFinanceiro.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModalFinanceiro = ({ isOpen, onClose }) => {
  const [tipoDespesa, setTipoDespesa] = useState(false);
  const [nomeDespesa, setNomeDespesa] = useState("");
  const [valor, setValor] = useState();
  const [mensagem, setMensagem] = useState("");
  const [token, setToken] = useState(null)
  const Navigate = useNavigate()
  useEffect(() => {
    let token = localStorage.getItem('TOKEN')
    setToken(token)

    if (token === null) {
      Navigate(`/`)
    }
  }, [])
  if (!isOpen) return null;

  const register = async (event) => {
    event.preventDefault();

    try {
      const dados = {
        situacao: Boolean(tipoDespesa),
        ds_despesa: nomeDespesa,
        valor: parseFloat(valor)
      }

      if (tipoDespesa === null || !nomeDespesa || !valor) {
        setMensagem("todos os campos são obrigatórios.")
        return;
      }

      const resposta = await axios.post(`http://localhost:5010/cadastroDespesa?x-access-token=${token}`, dados);
      setMensagem(`consulta registrada com sucesso`)


      setTipoDespesa("");
      setNomeDespesa("");
      setValor("");

    } catch (erro) {
      console.error("Erro ao registrar conta:", erro.response?.data);
      setMensagem(erro.response?.data?.erro || "Erro ao conectar com o servidor.");
    }
  }
  return (
    <div className="overlay-container">
      <div className="popup-box">
        <button className="btn-close" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={register} id="finance-form">
          <div className="section-primary">
            <h1>Financeiro</h1>
            <div className="primary-group">

              <div className="input-wrapper">
                <label htmlFor="situacao">tipo de despesa</label>
                <select className="input-field" onChange={(e) => setTipoDespesa(e.target.value === 'true')}>
                  <option value=''>tipo</option>
                  <option value='true'>ganho</option>
                  <option value='false'>gasto</option>
                </select>
              </div>

              <div className="input-wrapper">
                <label htmlFor="tipo_despesa">Nome da despesa</label>
                <input type="text" id="tipo_despesa" className="input-field" onChange={(e) => setNomeDespesa(e.target.value)} />
              </div>

              <div className="input-wrapper">
                <label htmlFor="valor">Valor</label>
                <input type="number" id="valor" className="input-field" step="0.01" onChange={(e) => setValor(e.target.value)} />
              </div>
              <button type="submit" className="hollow">Salvar</button>
            </div>
            {mensagem && <p>{mensagem}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalFinanceiro;
