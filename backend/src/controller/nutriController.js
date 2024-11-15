import * as db from "../repository/nutriRepository.js";

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
        message: "usuário ou senhas incorreto.",
      });
    }
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});





//cadastra pacientes
endpoints.post("/CadastroPaciente", async (req, resp) => {
  try {
    const {nome, data_nascimento, genero, email, telefone, situacao, cintura, quadril, peso, altura, descricao} = req.body;

    const userValido = await db.verificarCadastroPaciente(nome, data_nascimento, genero, email, telefone, situacao, cintura, quadril, peso, altura, descricao);

    if(!userValido){
      return resp.status(400).send({
        message: "Erro no cadastro: O email já está cadastrado ou algum dado está incorreto."
      })
    }
    const pacienteId = await db.cadastrarPaciente({nome, data_nascimento, genero, email, telefone, situacao, cintura, quadril, peso, altura, descricao});

    return resp.status(201).send({
      message: "Cadastro bem sucedido",
      id_paciente: pacienteId
    })
  } catch (err) {
    console.error("Erro no cadastro:", err);
    resp.status(500).send({
      erro: `Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. ${err.message}`
    });
  }
});




//mostra todos os pacientes
endpoints.get("/listaPaciente", async (req, resp) => {
  try {
    const pacientes = await db.listarPacientes();

    if (pacientes.length === 0) {
      return resp.status(404).send({
        message: "Nenhum paciente encontrado."
      });
    }

    
    return resp.status(200).send({
      message: "Pacientes encontrados com sucesso.",
      pacientes
    });
  } catch (err) {
    console.error("Erro ao listar pacientes:", err);
    resp.status(500).send({
      erro: `Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. ${err.message}`
    });
  }
});





endpoints.post("/CadastroConsulta", async (req, resp) => {
  try {


    const { nome_do_paciente, data_consulta, tipo_consulta, valor } = req.body;


    const verificaCadastro = await db.verificarCadastroConsulta(nome_do_paciente, data_consulta, tipo_consulta, valor);

    if (!verificaCadastro.valid) {
      
      return resp.status(400).send({
        message: verificaCadastro.message
      });
    }

    const consultaId = await db.cadastrarConsulta({ nome_do_paciente, data_consulta, tipo_consulta, valor });

    
    return resp.status(201).send({
      message: "Cadastro bem sucedido",
      id_consulta: consultaId
    });

  } catch (err) {
    resp.status(500).send({
      erro: `Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. ${err.message}`
    });
  }
});









endpoints.get("/consultas", async (req, resp) => {
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
      erro: `Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. ${err.message}`
    });
  }
});





endpoints.delete("/excluirConsultas/:id", async (req,resp) =>{
  try {
    const{id} = req.params
    const resultado = await db.excluirConsulta(id)
    return resp.status(200).send({ message: resultado.message})
  } catch (err) {
    return resp.status(500).send({ erro: `Erro ao excluir consulta: ${err.message}` })
  }
})





endpoints.put("/atualizarConsulta/:id", async (req,resp) =>{
  try {
    const { id } = req.params;
    const { nome_do_paciente, data_consulta, tipo_consulta, valor } = req.body;

    const resultado = await db.atualizarConsultas(id,{ nome_do_paciente, data_consulta, tipo_consulta, valor })

    return resp.status(200).send({ message: resultado.message });
  } catch (err) {
    return resp.status(500).send({ erro: `Erro ao atualizar consulta: ${err.message}` });
  }
})



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
