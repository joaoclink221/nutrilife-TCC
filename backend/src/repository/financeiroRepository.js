import con from "./connection.js";

export async function cadastrarDespesa(situacao, ds_despesa, valor){
  const comando = `insert into tb_financeiro ( situacao, ds_despesa, valor)
  values(?,?,?)`
  try {
    const resposta = await con.query(comando, [
      situacao, ds_despesa, valor
    ])
    let info = resposta[0]
    return info.insertId
  } catch (erro) {
    console.error("Erro ao executar o comando SQL:", erro);
    throw erro;
  }
}


export async function listarDespesas() {
  const comando = `
  SELECT * FROM tb_financeiro;
  `;

  const [linhas] = await con.query(comando)
  return linhas
}



export async function verificarCadastroDespesa(situacao, ds_despesa, valor) {

  if(!situacao|| !ds_despesa|| !valor){
    return false;
  }
  const comando = `
    select COUNT(*) as count situacao, ds_despesa, valor
    from tb_financeiro
    where situacao = ? AND  ds_despesa = ? AND  valor = ? 
    `;

    const [linhas] = await con.query(comando, [situacao, ds_despesa, valor]);

    if(linhas[0].count >0){
      return false;
    }
    return true;
}

export async function excluirConta(id_despesa){
  try{
    const comando  = `delete from tb_financeiro where id_despesa = ?`;
    const [resultado] = await con.query(comando, [id_despesa]);
    if(resultado.affectedRows > 0){
      return { message: "despesa excluída com sucesso!" };
    } else {
      return { message: "despesa não encontrado." };
    }
  } catch (err) {
    throw new Error("Erro ao excluir paciente: " + err.message);
  }
}