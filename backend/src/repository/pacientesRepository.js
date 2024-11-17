import con from "./connection.js";

export async function cadastrarPaciente(paciente) {
  console.log("Iniciando cadastro de paciente...");
  console.log("Dados recebidos para cadastro:", paciente);

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
      tipo_dieta,
      data_inicio,
      data_fim,
      Descricao
    ) 
    VALUES (
      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
    );`;

  console.log("Comando SQL preparado:", comando);

  try {
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
      paciente.tipo_dieta,    
      paciente.data_inicio,   
      paciente.data_fim,      
      paciente.Descricao     
    ]);

    console.log("Resposta do banco de dados:", resposta);
    let info = resposta[0];
    console.log("ID inserido:", info.insertId);

    return info.insertId;
  } catch (erro) {
    console.error("Erro ao executar o comando SQL:", erro);
    throw erro;
  }
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
  
  if (
    !nome ||
    !data_nascimento ||
    !genero ||
    !email ||
    !telefone ||
    !cintura ||
    !quadril ||
    !peso ||
    !altura ||
    !Descricao
  ) {
    return false;
  }

  
  const comando = `
      SELECT COUNT(*) as count 
      FROM tb_cadastro_paciente 
      WHERE nome = ? 
        AND data_nascimento = ? 
        AND email = ?;
  `;
  const [linhas] = await con.query(comando, [nome, data_nascimento, email]);

  if (linhas[0].count > 0) {
    return false;
  }

  
  return true;
}

export async function atualizarPaciente(
  id_paciente,
  {
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
  }
) {
  try {
    const comando = `
    UPDATE tb_cadastro_paciente
SET nome = ?, data_nascimento = ?, genero = ?, telefone = ?, email = ?, cintura = ?, quadril = ?, peso = ?, altura = ?, tipo_dieta = ?, data_inicio = ?, data_fim = ?, Descricao = ?
WHERE id_paciente = ?`;

    const [resultado] = await con.query(comando, [
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
      id_paciente,
    ]);

    if (resultado.affectedRows > 0) {
      return { message: "paciente atualizado com sucesso!" };
    } else {
      return { message: "paciente nn encontrado" };
    }
  } catch (err) {
    throw new Error("erro ao atualizar paciente: " + err.message);
  }
}

export async function excluirPaciente(id_paciente) {
  try {
    const comando = `delete from tb_cadastro_paciente where id_paciente = ?`;
    const [resultado] = await con.query(comando, [id_paciente]);
    if (resultado.affectedRows > 0) {
      return { message: "paciente excluído com sucesso!" };
    } else {
      return { message: "Paciente não encontrado." };
    }
  } catch (err) {
    throw new Error("Erro ao excluir paciente: " + err.message);
  }
}
