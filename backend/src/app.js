import "dotenv/config.js"
import express, { json } from 'express'
import cors from 'cors'
import adiconarRotas from "../rotas.js";


const servidor = express();
servidor.use(express.json())
servidor.use(cors())

adiconarRotas(servidor)

const PORT = process.env.PORT
servidor.listen(process.env.PORT, ()=>console.log(`subiu na ${PORT} (⌐■_■)`));