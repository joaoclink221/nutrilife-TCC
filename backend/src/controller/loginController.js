import * as db from "../repository/loginRepository.js";
import { gerarToken } from "../utils/jwt.js";
import { Router } from "express";
const endpoints = Router();

endpoints.post('/usuario/', async (req, resp) => {
  try {
      let pessoa = req.body;

      let id = await db.inserirUsuario(pessoa);

      resp.send({
          novoId: id
      })
  }
  catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})


//verifica o login
endpoints.post("/login/", async (req, resp) => {
  try {
    let nutri = req.body;

    let usuario = await db.verificarLogin(nutri);

    if (usuario == null) {
        resp.send({ erro: "Usuário ou senha incorreto(s)" })
    } else {
        let token = gerarToken(usuario);
        resp.send({
            "usuario": usuario,
            "token": token
        })
    }
}
catch (err) {
    resp.status(400).send({
        erro: err.message
    })
}
});

export default endpoints;