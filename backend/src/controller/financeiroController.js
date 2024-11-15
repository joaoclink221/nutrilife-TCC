import * as db from "../repository/financeiroRepository.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post("/financeiro", async (req, resp) => {
  try {
    const { situacao, tipo_despesa, valor, receita_mes, gasto, lucro } =
      req.body;

    const uservalido = await db.verificarFinanceiro(
      situacao,
      tipo_despesa,
      valor,
      receita_mes,
      gasto,
      lucro
    );

    if (uservalido) {
      resp.send({
        message: "Valores feitos",
      });
    } else {
      resp.status(400).send({
        message: "valores não preenchidos.",
      });
    }
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

export default endpoints;