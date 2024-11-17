import * as db from "../repository/pacientesRepository.js";

import { Router } from "express";
const endpoints = Router();

//cadastra pacientes
endpoints.post("/CadastroPaciente", async (req, resp) => {
  try {
    const {
      nome,
      data_nascimento,
      genero,
      email,
      telefone,
      cintura,
      quadril,
      peso,
      altura,
      tipo_dieta,
      data_inicio,
      data_fim,
      Descricao,
    } = req.body;

    const userValido = await db.verificarCadastroPaciente(
      nome,
      data_nascimento,
      genero,
      email,
      telefone,
      cintura,
      quadril,
      peso,
      altura,
      tipo_dieta,
      data_inicio,
      data_fim,
      Descricao
    );

    if (!userValido) {
      return resp.status(400).send({
        message:
          "Erro no cadastro: O email já está cadastrado ou algum dado está incorreto.",
      });
    }
    const pacienteId = await db.cadastrarPaciente({
      nome,
      data_nascimento,
      genero,
      email,
      telefone,
      cintura,
      quadril,
      peso,
      altura,
      tipo_dieta,
      data_inicio,
      data_fim,
      Descricao,
    });

    return resp.status(201).send({
      message: "Cadastro bem sucedido",
      id_paciente: pacienteId,
    });
  } catch (err) {
    console.error("Erro no cadastro:", err);
    resp.status(500).send({
      erro: `Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. ${err.message}`,
    });
  }
});

//mostra todos os pacientes
endpoints.get("/listaPaciente", async (req, resp) => {
  try {
    const pacientes = await db.listarPacientes();

    if (pacientes.length === 0) {
      return resp.status(404).send({
        message: "Nenhum paciente encontrado.",
      });
    }

    return resp.status(200).send({
      message: "Pacientes encontrados com sucesso.",
      pacientes,
    });
  } catch (err) {
    console.error("Erro ao listar pacientes:", err);
    resp.status(500).send({
      erro: `Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. ${err.message}`,
    });
  }
});

endpoints.delete("/excluirPaciente/:id", async (req, resp) => {
  try {
    const { id } = req.params;
    const resultado = await db.excluirPaciente(id);
    return resp.status(200).send({ message: resultado.message });
  } catch (err) {
    return resp
      .status(500)
      .send({ erro: `Erro ao excluir paciente: ${err.message}` });
  }
});

endpoints.put("/atualizarPaciente/:id", async (req, resp) => {
  try {
    const { id } = req.params;
    const {
      nome,
      data_nascimento,
      genero,
      telefone,
      email,
      cintura,
      quadril,
      peso,
      altura,
      tipo_dieta,
      data_inicio,
      data_fim,
      Descricao,
    } = req.body;

    const resultado = await db.atualizarPaciente(id, {
      nome,
      data_nascimento,
      genero,
      telefone,
      email,
      cintura,
      quadril,
      peso,
      altura,
      tipo_dieta,
      data_inicio,
      data_fim,
      Descricao,
    });
    return resp.status(200).send({ message: resultado.message });
  } catch (err) {
    return resp
      .status(500)
      .send({ erro: `Erro ao atualizar paciente: ${err.message}` });
  }
});

export default endpoints;
