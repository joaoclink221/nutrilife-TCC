import con from "./connection.js";

export async function cadastrarPaciente(paciente) {
  const comando = `
  INSERT INTO tb_cadastro_paciente (
    nome,
    data_nascimento,
    genero,
    telefone,
    email,
    situacao,
    cintura,
    quadril,
    peso,
    altura,
    descricao
) 
VALUES (
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
); `;

  const resposta = await con.query(comando, [
    paciente.nome,
    paciente.data_nascimento,
    paciente.genero,
    paciente.telefone,
    paciente.email,
    paciente.situaçao,
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
  situacao,
  cintura,
  quadril,
  peso,
  altura,
  descricao
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
    !situacao ||
    !cintura ||
    !quadril ||
    !peso ||
    !altura ||
    !descricao
  ) {
    return false;
  }

  return true;
}