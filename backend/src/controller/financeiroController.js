import * as db from "../repository/financeiroRepository.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post("/cadastroDespesa", async (req, resp) => {
  try {
    const { situacao, ds_despesa, valor } = req.body;
    const despesaId = await db.cadastrarDespesa({
      situacao,
      ds_despesa,
      valor,
    });
    

    return resp.status(201).send({
      message: "Cadastro bem sucedido",
      id_despesa: despesaId,
    });
  } catch (err) {
    resp.status(500).send({
      erro: `Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. ${err.message}`,
    });
  }
});

endpoints.get("/listarDespesas", async (req, resp) => {
  try {
    const despesa = await db.listarDespesasGeral();

    if (despesa.length === 0) {
      return resp.status(404).send({
        message: "Nenhuma despesa encontrada.",
      });
    }

    return resp.status(200).send(despesa);
  } catch (err) {
    console.error("Erro ao listar despesas:", err);
    resp.status(500).send({
      erro: `Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. ${err.message}`,
    });
  }
});

endpoints.delete("/excluirDespesas/:id", async (req, resp) => {
  try {
    const { id } = req.params;
    const resultado = await db.excluirConta(id)
    return resp.status(200).send({ message: resultado.message})
  } catch (err) {
    return resp.status(500).send({erro: `Erro ao excluir conta: ${err.message}`})
  }
});


endpoints.get("/listarLucros", async (req,resp) =>{
  try {
    const lucros = await db.ListarLucros();
    return  resp.status(200).send(lucros);
  } catch (err) {
    console.error("Erro ao listar lucros:", err);
    resp.status(500).send({
      erro: `Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. ${err.message}`,
    });
  }
})

endpoints.get("/listarGastos", async (req,resp) =>{
  try {
    const gastos = await db.ListarGastos();
    return  resp.status(200).send(gastos);
  } catch (err) {
    console.error("Erro ao listar gastos:", err);
    resp.status(500).send({
      erro: `Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. ${err.message}`,
    });
  }
})

export default endpoints;
