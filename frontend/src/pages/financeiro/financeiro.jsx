import './Financeiro.scss';
import Header2 from "../../components/header2/Header2.jsx"
const Financeiro = () => {
  return (
    <div className="pai-financeiro">
      <div className='lateral-esquerda'>
        <Header2 />
      </div>
      <div>
        <Link to="/" className="back-button">
          Financeiro
        </Link>

      </div>
    </div>
  )
}

export default Financeiro