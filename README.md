create database bd_nutrilife;

use bd_nutrilife;

create table tb_login(
email                varchar(200),
senha                varchar(20)
);

create table tb_cadastro_paciente(
id_paciente                   INT AUTO_INCREMENT PRIMARY KEY,
nome                 varchar(200) not null, 
data_nascimento      DATE not null,
genero               varchar(200) not null,
telefone             varchar(20) not null,
email                varchar(200) not null,
situaçao          varchar(220) not null,
cintura             decimal(10,2) not null,
quadril             decimal(10,2) not null,
peso                decimal(10,2) not null,
altura              decimal(10,2) not null, 
Descrição           text  not null
);

create table tb_consultas(
id_consulta          INT AUTO_INCREMENT PRIMARY KEY,
nome_do_paciente           int not null,
data_consulta        DATETIME,
tipo_consulta        varchar(200) not null,
valor           decimal(10,2),
);



create table tb_financeiro(
id_despesa           INT AUTO_INCREMENT PRIMARY KEY,
situacao            boolean,
tipo_despesa        text,
valor                decimal(5,2),
receita_mes            decimal(5,2),
gasto                decimal(5,2),
lucro                decimal(5,2)
);


endpoints.get("/Paciente/:id", async (req, resp) => {
  try {
    // Recupera o id_paciente da URL
    const { id } = req.params;

    // Valida o ID
    if (!id) {
      return resp.status(400).send({
        message: "ID do paciente não fornecido."
      });
    }

    // Faz o SELECT no banco de dados com base no id_paciente
    const paciente = await db.buscarPacientePorId(id);

    // Se o paciente não for encontrado
    if (!paciente) {
      return resp.status(404).send({
        message: "Paciente não encontrado."
      });
    }

    // Retorna os dados do paciente encontrado
    return resp.status(200).send({
      message: "Paciente encontrado com sucesso.",
      paciente
    });
  } catch (err) {
    console.error("Erro ao buscar paciente:", err);
    resp.status(500).send({
      erro: `Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. ${err.message}`
    });
  }
});



endpoints.get("/Pacientes", async (req, resp) => {
  try {
    const pacientes = await db.listarTodosPacientes();

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
