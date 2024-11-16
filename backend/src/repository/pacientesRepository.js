import con from "./connection.js";

export async function cadastrarPaciente(paciente) {
  const comando = `
  INSERT INTO tb_cadastro_paciente (
    nome,
    data_nascimento,
    genero,
    telefone,
    email,
    cintura,
    quadril,
    peso,
    altura,
    descricao
) 
VALUES (
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
); `;

  const resposta = await con.query(comando, [
    paciente.nome,
    paciente.data_nascimento,
    paciente.genero,
    paciente.telefone,
    paciente.email,
    paciente.cintura,
    paciente.quadril,
    paciente.peso,
    paciente.altura,
    paciente.Descrição,
  ]);
  let info = resposta[0];
  return info.insertId;
}



export async function listarPacientes() {
  const comando = `
  SELECT * FROM tb_cadastro_paciente;
  `;

  const [linhas] = await con.query(comando);
  return linhas;
}

export async function verificarCadastroPaciente(
  nome,
  data_nascimento,
  genero,
  email,
  telefone,
  cintura,
  quadril,
  peso,
  altura,
  Descricao
) {
  const comando = `SELECT COUNT(*) as count FROM tb_cadastro_paciente WHERE email = ?`;

  const [linhas] = await con.query(comando, [email]);

  if (linhas[0].count > 0) {
    return false;
  }

  if (
    !nome ||
    !data_nascimento ||
    !genero ||
    !telefone ||
    !cintura ||
    !quadril ||
    !peso ||
    !altura ||
    !Descricao
  ) {
    return false;
  }

  return true;
}


export async function atualizarPaciente(id_paciente, { nome, data_nascimento, genero, telefone, email, cintura, quadril, peso, altura, tipo_dieta, data_inicio, data_fim, Descricao
}) {
  try{
    const comando = `
    UPDATE tb_cadastro_paciente
SET nome = ?, data_nascimento = ?, genero = ?, telefone = ?, email = ?, cintura = ?, quadril = ?, peso = ?, altura = ?, tipo_dieta = ?, data_inicio = ?, data_fim = ?, Descricao = ?
WHERE id_paciente = ?`;

const [resultado] = await con.query(comando, [nome, data_nascimento, genero, telefone, email, cintura, quadril, peso, altura, tipo_dieta, data_inicio, data_fim, Descricao,id_paciente])

if(resultado.affectedRows >0){
  return { message: "paciente atualizado com sucesso!"};
} else{
  return{message: "paciente nn encontrado"}
}
  } catch (err) {
    throw new Error("erro ao atualizar paciente: " + err.message)
  }
}


export async function excluirPaciente(id_paciente){
  try{
    const comando = `delete from tb_cadastro_paciente where id_paciente = ?`;
    const [resultado] = await con.query(comando, [id_paciente])
    if (resultado.affectedRows > 0) {
      return { message: "paciente excluído com sucesso!" };
    } else {
      return { message: "Paciente não encontrado." };
    }
  } catch (err) {
    throw new Error("Erro ao excluir paciente: " + err.message);
  }
}