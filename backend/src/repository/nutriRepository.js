import con from "./connection.js";

export async function verificarLogin(email, senha) {
  const comando = `
    select  email, senha
    from tb_login
    where email = ? AND  senha = ?;
    `;

  const [linhas] = await con.query(comando, [email, senha]);

  return linhas.length > 0;
}

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

//cadastrar consulta
export async function cadastrarConsulta(consulta) {
  const comando = `
  INSERT INTO tb_consultas (
nome_do_paciente,
data_consulta,
tipo_consulta,
valor
) 
VALUES (
    ?, ?, ?, ?
); `;

  const resposta = await con.query(comando, [
    consulta.nome_do_paciente,
    consulta.data_consulta,
    consulta.tipo_consulta,
    consulta.valor
  ]);
  let info = resposta[0];
  return info.insertId;
}


export async function listarConsulta() {
  const comando = `
  SELECT * FROM tb_consultas;
  `;

  const [linhas] = await con.query(comando);
  return linhas;
}

export async function verificarConsultas(
  data_consulta,
  tipo_consulta,
  observacao
) {
  const comando = `
    select  data_consulta, tipo_consulta, observacao
    from tb_consultas
    where data_consulta = ? AND  tipo_consulta = ? AND  observacao = ?;
    `;

  const [linhas] = await con.query(comando, [
    data_consulta,
    tipo_consulta,
    observacao,
  ]);

  return linhas.length > 0;
}

export async function verificarMedidasCorporais(
  cintura,
  quadril,
  peso,
  altura,
  data_medida
) {
  const comando = `
    select  cintura, quadril, peso, altura, data_medida
    from tb_medidas_corporais
    where cintura = ? AND  quadril = ? AND  peso = ? AND  altura = ? AND  data_medida = ?;
    `;

  const [linhas] = await con.query(comando, [
    cintura,
    quadril,
    peso,
    altura,
    data_medida,
  ]);

  return linhas.length > 0;
}

export async function verificarFinanceiro(
  situacao,
  tipo_despesa,
  valor,
  receita_mes,
  gasto,
  lucro
) {
  const comando = `
    select  situacao, tipo_despesa, valor, receita_mes, gasto, lucro
    from tb_financeiro
    where situacao = ? AND  tipo_despesa = ? AND  valor = ? AND  receita_mes = ? AND  gasto = ? AND  lucro = ?;
    `;

  const [linhas] = await con.query(comando, [
    situacao,
    tipo_despesa,
    valor,
    receita_mes,
    gasto,
    lucro,
  ]);

  return linhas.length > 0;
}
