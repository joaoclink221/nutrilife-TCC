import * as db from "../repository/consultasRepository.js";
import { Router } from "express";
import { autenticar } from "../utils/jwt.js";

const endpoints = Router();

// consultas

endpoints.post("/CadastroConsulta/", autenticar, async (req, resp) => {
  try {
    const { nome_do_paciente, data_consulta, tipo_consulta, valor } = req.body;

    const verificaCadastro = await db.verificarCadastroConsulta(nome_do_paciente, data_consulta, tipo_consulta, valor);

    if (!verificaCadastro.valid) {
      return resp.status(400).send({
        message: verificaCadastro.message,
      });
    }

    const consultaId = await db.cadastrarConsulta({
      nome_do_paciente,
      data_consulta,
      tipo_consulta,
      valor,
    });

    return resp.status(201).send({
      message: "Cadastro bem sucedido",
      id_consulta: consultaId,
    });
  } catch (err) {
    resp.status(500).send({
      erro: `Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. ${err.message}`,
    });
  }
});

endpoints.get("/consultas/", async (req, resp) => {
  try {
    const consulta = await db.listarConsulta();

    if (consulta.length === 0) {
      return resp.status(404).send({
        message: "Nenhuma consulta encontrada.",
      });
    }

    return resp.status(200).send(consulta);
  } catch (err) {
    console.error("Erro ao listar consultas:", err);
    resp.status(500).send({
      erro: `Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. ${err.message}`,
    });
  }
});

endpoints.delete("/excluirConsultas/:id/", async (req, resp) => {
  try {
    const { id } = req.params;
    const resultado = await db.excluirConsulta(id);
    return resp.status(200).send({ message: resultado.message });
  } catch (err) {
    return resp.status(500).send({
      erro: `Erro ao excluir consulta: ${err.message}`,
    });
  }
});

endpoints.put("/atualizarConsulta/:id/", async (req, resp) => {
  try {
    const { id } = req.params;
    const { nome_do_paciente, data_consulta, tipo_consulta, valor } = req.body;

    const resultado = await db.atualizarConsultas(id, {
      nome_do_paciente,
      data_consulta,
      tipo_consulta,
      valor,
    });

    return resp.status(200).send({ message: resultado.message });
  } catch (err) {
    return resp.status(500).send({
      erro: `Erro ao atualizar consulta: ${err.message}`,
    });
  }
});

export default endpoints;
