import './Financeiro.scss';
import Header2 from "../../components/header2/Header2.jsx"
const Financeiro = () => {
  return (
    <div className='vô-financeiro'>
      <Header2 />
    <div className="pai-financeiro">
      <h2>Financeiro</h2>
      <h1>Setembor</h1>
      <div className='tabela'>
      <table className="table table-hover">
        <thead>
          <tr className='tren'>
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
      
    </div>
    </div>
  )
}

export default Financeiro