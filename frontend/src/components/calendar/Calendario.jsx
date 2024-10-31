import "./Calendar.scss"
import {Link} from "react-router-dom"
const Calendario = () => {
    return (
        <div className="cabe">
            <Link to="/" className="buttom2">
            <button className="buttom">
                <p className="text">inicio</p>
                <span className="gradient-underline"></span>
            </button>
            </Link>
            <Link to="/financeiro" className="buttom2">
            <button className="buttom">
                <p className="text">finaceiro</p>
                <span className="gradient-underline"></span>
            </button>
            </Link>
            <Link to="/mensagem" className="buttom2">
            <button className="buttom">
                <p className="text">Menssagem</p>
                <span className="gradient-underline"></span>
            </button>
            </Link>
            <Link to="/agenda" className="buttom2">
            <button className="buttom">
                <p className="text">Agendamento</p>
                <span className="gradient-underline"></span>
            </button>
            </Link>
            <Link to="/pacientes" className="buttom2">
            <button className="buttom">
                <p className="text">Pacientes</p>
                <span className="gradient-underline"></span>
            </button>
            </Link>
        </div>
    )
}

export default Calendario
