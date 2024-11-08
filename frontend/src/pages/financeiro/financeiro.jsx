import './Financeiro.scss';
import Header2 from "../../components/header2/Header2.jsx"
import {ArrowUp} from "lucide-react"

const Financeiro = () => {
  return (
    <div className='vô-financeiro'>
      <Header2 />
      <div className='lateral-direita'>
        <div className='perfil'>
        </div>
        <div className='botoes'>

        </div>

      </div>

      <div className="pai-financeiro">
        <h2>Financeiro</h2>
        <h1>Setembro</h1>
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
              <tr className='tren'>
                <td scope='col'>positivo</td>
                <td scope='col'>conta de luz</td>
                <td scope='col'>800,9</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='lateral-direita'>
        <div className='perfil'>
        
        </div>
        <div className='botoes'>

        </div>

      </div>

        <div className='tabela2'>
          <table className="tabela3">
            <thead>
              <tr className='tren1'>
                <th scope='col'>Receita do mês</th>
                <th scope='col' className='col-buttons'></th>
              </tr>
              <div className='circle'>
              <ArrowUp className="icon"/>
              </div>
            </thead>

            <tbody>
              <tr className='tren'>
                <td scope='col'>800,90</td>
                
              </tr>
            </tbody>
          </table>
        </div>

        <div className='tabela2'>
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