import e from 'cors'
import nutriController from "./src/controller/loginController.js"
import financeiroController from './src/controller/financeiroController.js'
import consultasController from './src/controller/consultasController.js'
import pacientesController from './src/controller/pacientesController.js'

export default function adiconarRotas(servidor){

    servidor.use(nutriController)
    servidor.use(financeiroController)
    servidor.use(consultasController)
    servidor.use(pacientesController)
}
