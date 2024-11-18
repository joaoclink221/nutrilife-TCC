import * as db from "../repository/loginRepository.js";

import { Router } from "express";
const endpoints = Router();


//verifica o login
endpoints.post("/login", async (req, resp) => {
  try {
    const { email, senha } = req.body;

    const uservalido = await db.verificarLogin(email, senha);

    if (uservalido) {
      resp.send({
        message: "login feito com sucesso",
      });
    } else {
      resp.status(400).send({
        message: "usuário ou senha incorreto.",
      });
    }
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

export default endpoints;