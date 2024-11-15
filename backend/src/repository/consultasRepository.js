import con from "./connection.js";

export async function cadastrarConsulta({
  nome_do_paciente,
  data_consulta,
  tipo_consulta,
  valor,
}) {
  try {
    const comando = `
      INSERT INTO tb_consultas (nome_do_paciente, data_consulta, tipo_consulta, valor)
      VALUES (?, ?, ?, ?)
    `;

    const [result] = await con.query(comando, [
      nome_do_paciente,
      data_consulta,
      tipo_consulta,
      valor,
    ]);

    console.log("Consulta cadastrada com sucesso! ID:", result.insertId);

    return result.insertId;
  } catch (err) {
    throw new Error("Erro ao cadastrar consulta. Tente novamente mais tarde. 2");
  }
}

export async function verificarCadastroConsulta(
  nome_do_paciente,
  data_consulta,
  tipo_consulta,
  valor
) {
  try {
    if (!nome_do_paciente || !data_consulta || !tipo_consulta || !valor) {
      return { valid: false, message: "Todos os campos são obrigatórios." };
    }

    const comando = `SELECT COUNT(*) as count FROM tb_consultas WHERE nome_do_paciente = ? AND data_consulta = ?`;

    const [linhas] = await con.query(comando, [
      nome_do_paciente,
      data_consulta,
    ]);

    if (linhas[0].count > 0) {
      return {
        valid: false,
        message: "O paciente já tem uma consulta agendada para esta data.",
      };
    }

    return { valid: true };
  } catch (err) {
    return {
      valid: false,
      message: "Erro ao verificar consulta. Tente novamente mais tarde. verificar",
    };
  }
}



export async function listarConsulta() {
  const comando = `
  SELECT * FROM tb_consultas;
  `;

  const [linhas] = await con.query(comando);
  return linhas;
}


export async function atualizarConsultas(id_consulta, { nome_do_paciente, data_consulta, tipo_consulta, valor }){
  try {
    const comando = `
    update tb_consultas
    set nome_do_paciente = ?, data_consulta = ?, tipo_consulta = ?, valor = ?
    WHERE id_consulta = ?`;

    const [resultado] = await con.query(comando, [nome_do_paciente, data_consulta, tipo_consulta, valor, id_consulta])

    if(resultado.affectedRows > 0){
      return { message: "consulta atualizada com sucesso!"};
    } else{
      return{message: "consulta nn encontrada"}
    }

  } catch (err) {
    throw new Error("erro ao atualizar consulta: " + err.message)
  }
}





export async function excluirConsulta(id_consulta){
  try{
    const comando  = "delete from tb_consultas WHERE id_consulta = ?";
    const [resultado] = await con.query(comando, [id_consulta]);

    if (resultado.affectedRows > 0) {
      return { message: "Consulta excluída com sucesso!" };
    } else {
      return { message: "Consulta não encontrada." };
    }
  } catch (err) {
    throw new Error("Erro ao excluir consulta: " + err.message);
  }
}