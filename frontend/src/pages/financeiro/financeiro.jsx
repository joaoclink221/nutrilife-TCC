import './Financeiro.scss';
import Header2 from "../../components/header2/Header2.jsx"
import { ArrowDown, HandCoins, ThumbsUp, ThumbsDown, PlusIcon, ArrowUp, Trash } from "lucide-react"
import ModalFinanceiro from '../../components/modais/ModalFinanceiro/ModalFinanceiro.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Financeiro() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [despesasList, setDespesasList] = useState([])
  const [totalReceitas, setTotalReceitas] = useState(0);
  const [totalDespesas, setTotalDespesas] = useState(0);
  const [lucro, setLucro] = useState(0);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5010/listarDespesas")
      .then(response => {
        const data = response.data
        setDespesasList(data)
        const receita = data
        .filter((item) => item.situacao === true)
        .reduce((acumulador, item)=> acumulador + item.valor, 0)

        const despesa = data
        .filter((item) => item.situacao === false)
        .reduce((acumulador, item)=> acumulador + item.valor, 0)

        setTotalReceitas(receita)
        setTotalDespesas(despesa)
        setLucro(receita - despesa)
        setErro(null)
      })
      .catch(error => {
        console.error("erro ao buscar conta:", error);
        if (despesasList.length == 0) { setErro("nenhuma despesa encontrada") }
        else { setErro("erro ao buscar despesa. tente novamente mais tarde") }
      })
  }, [despesasList, isModalOpen])

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

      <button className='circleModal' onClick={() => setIsModalOpen(true)}>
          <PlusIcon className="iconM" />
        </button>

      <div className="pai-financeiro">
        <ModalFinanceiro isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        <div className='tabela'>
          {despesasList.length > 0 ? (
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
          ) : (
            !erro && <p>Nenhuma conta encontrada.</p>
          )}

        </div>

        <div className='botton'>

        </div>
        <div className='valores'>
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
                    <td scope='col'>{totalReceitas}</td>

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
                    <td scope='col'>{totalDespesas}</td>
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
                    <td scope='col'>{lucro}</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>


      </div>

    </div>
  )
}

export default Financeiro