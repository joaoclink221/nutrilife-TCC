import * as db from "../repository/nutriRepository.js";

import { Router } from "express";
const endpoints = Router()

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
  
 

  endpoints.post("/CadastroPaciente", async (req, resp) => {
    try {
      const {nome, data_nascimento, sexo, email, telefone, info_saude, tipo_dieta, data_inicio, conclusao} = req.body;
  
      const uservalido = await db.verificarCadastroPaciente(nome, data_nascimento, sexo, email, telefone, info_saude, tipo_dieta, data_inicio, conclusao);
  
      if (uservalido) {
        resp.send({
          message: "Informações completas com sucesso",
        });
      } else {
        resp.status(400).send({
          message: "algo não está preenchido.",
        });
      }
    } catch (err) {
      resp.status(400).send({
        erro: err.message,
      });
    }
  });
  


  endpoints.post("/consultas", async (req, resp) => {
    try {
      const { data_consulta, tipo_consulta, observacao } = req.body;
  
      const uservalido = await db.verificarConsultas(data_consulta, tipo_consulta, observacao);
  
      if (uservalido) {
        resp.send({
          message: "consultas com sucesso",
        });
      } else {
        resp.status(400).send({
          message: "algo não está preenchido.",
        });
      }
    } catch (err) {
      resp.status(400).send({
        erro: err.message,
      });
    }
  });



  endpoints.post("/MedidasCorporais", async (req, resp) => {
    try {
      const {   cintura, quadril, peso, altura, data_medida} = req.body;
  
      const uservalido = await db.verificarMedidasCorporais(  cintura, quadril, peso, altura, data_medida);
  
      if (uservalido) {
        resp.send({
          message: "Medidas anotadas",
        });
      } else {
        resp.status(400).send({
          message: "algo não está preenchido.",
        });
      }
    } catch (err) {
      resp.status(400).send({
        erro: err.message,
      });
    }
  });



  endpoints.post("/financeiro", async (req, resp) => {
    try {
      const {situacao, tipo_despesa, valor, receita_mes, gasto, lucro} = req.body;
  
      const uservalido = await db.verificarFinanceiro(  situacao, tipo_despesa, valor, receita_mes, gasto, lucro);
  
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



  endpoints.post("/historicoConsultas", async (req, resp) => {
    try {
      const {detalhes_consulta,data_consulta} = req.body;
  
      const uservalido = await db.verificarHistoricoConsultas( detalhes_consulta,data_consulta);
  
      if (uservalido) {
        resp.send({
          message: "Historico feitos",
        });
      } else {
        resp.status(400).send({
          message: "historico não preenchidos.",
        });
      }
    } catch (err) {
      resp.status(400).send({
        erro: err.message,
      });
    }
  });

  export default endpoints;