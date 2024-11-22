import './inicio.scss';
import { Link } from 'react-router-dom';
import { Calendar, Mail, ClipboardList, BadgeDollarSign } from "lucide-react"

const Inicio = () => {
  return (

    <div className='pai'>
      <div className='barra'>
        <img src="/src/assets/image/image.png" alt="" />

      </div>
      <div className='qq1'>
        <div className='q1'>
          <div className='quadro1'>
            <Link to='adm/agenda'>
              <button className='boo'>
                <Calendar />
                <h1>Agenda</h1>
              </button>
            </Link>
          </div>

          <div className='quadro1'>
            <Link to='' >
              <button className='boo'>
                <Mail />
                <h1>E-mail</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className='q1'>
          <div className='quadro1'>
            <Link to='adm/pacientes'>
              <button className='boo'>
                <ClipboardList />
                <h1>Paciente</h1>
              </button>
            </Link>
          </div>

          <div className='quadro1'>
            <Link to='adm/financeiro'>
              <button className='boo'>
                <BadgeDollarSign />
                <h1>Financeiro</h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Inicio
