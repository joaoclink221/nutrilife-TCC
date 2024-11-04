
import e from 'cors'
import nutriController from "./src/controller/nutriController.js"


export default function adiconarRotas(servidor){
    servidor.use(nutriController)
}
