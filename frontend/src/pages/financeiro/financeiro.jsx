import './Financeiro.scss';
import Header2 from "../../components/header2/Header2.jsx"
import { ArrowDown, HandCoins, ThumbsUp, ThumbsDown, PlusIcon, ArrowUp, Trash } from "lucide-react"
import ModalFinanceiro from '../../components/modais/ModalFinanceiro/ModalFinanceiro.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Financeiro() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [despesasList, setDespesasList] = useState([])
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5010/listarDespesas")
      .then(response => {
        setDespesasList(response.data)
        setErro(null)
      })
      .catch(error => {
        console.error("erro ao buscar conta:", error);
        if (despesasList.length == 0) { setErro("nenhuma despesa encontrada") }
        else { setErro("erro ao buscar despesa. tente novamente mais tarde") }
      })
  }, [])

  const excluiDespesa = async (id) => {
    try {
      const resposta = await axios.delete(`http://localhost:5010/excluirDespesas/${id}`);
      alert(resposta.data.message);
      setDespesasList(despesasList.filter((despesa) => despesa.id_despesa !== id))
    } catch (erro) {
      alert("Erro ao excluir consulta: " + erro.message);
    }
  }
  return (
    <div className='vô-financeiro'>
      <Header2 />

      <div className="pai-financeiro">

        <button className='circleModal' onClick={() => setIsModalOpen(true)}>
          <PlusIcon className="iconM" />
        </button>

        <ModalFinanceiro isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <div className='tabela'>
          <table className="table table hover">
            <thead>
              <tr className='tren1'>
                <th scope='col'>situação</th>
                <th scope='col'>categoria</th>
                <th scope='col'>valor</th>
                <th scope='col' className='col-buttons'></th>
              </tr>
            </thead>
            <tbody>
              {despesasList.map((despesa, index) => (
                <tr key={index} className='tren'>
                  <td scope='col'>{despesa.situacao ? <ThumbsUp /> : <ThumbsDown />}</td>
                  <td scope='col'>{despesa.ds_despesa}</td>
                  <td scope='col'>{despesa.valor}</td>
                  <td scope="col">
                    <button onClick={() => excluiDespesa(despesa.id_despesa)} className='btn-excluir'>
                      <Trash />
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        <div className='botton'>

        </div>

        <div className='tabela2'>

          <div className='circle'>
            <ArrowUp className="icon" />
          </div>

          <table className="tabela3">
            <thead>
              <tr className='tren1'>
                <th scope='col'>Receita do mês</th>
                <th scope='col' className='col-buttons'></th>
              </tr>
            </thead>

            <tbody>
              <tr className='tren'>
                <td scope='col'>800,90</td>

              </tr>
            </tbody>
          </table>
        </div>

        <div className='tabela2'>
          <div className='circle2'>
            <ArrowDown className="icon" />
          </div>
          <table className="tabela3">
            <thead>
              <tr className='tren1'>
                <th scope='col'>Dispesas</th>
                <th scope='col' className='col-buttons'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='tren'>
                <td scope='col'>800,90</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='tabela2'>
          <div className='circle3'>
            <HandCoins className="icon" />
          </div>
          <table className="tabela3">
            <thead>
              <tr className='tren1'>
                <th scope='col'>Lucro</th>
                <th scope='col' className='col-buttons'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='tren'>
                <td scope='col'>800,90</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>

    </div>
  )
}

export default Financeiro