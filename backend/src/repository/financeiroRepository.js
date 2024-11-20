import con from "./connection.js";

export async function cadastrarDespesa({situacao, ds_despesa, valor}){
  try {
    const comando = `insert into tb_financeiro ( situacao, ds_despesa, valor)
                                       values(?, ?, ?)`;
    const [resposta] = await con.query(comando, [
      situacao, ds_despesa, valor
    ])

    console.log(situacao);
   
    return resposta.insertId

  } catch (erro) {
    console.error("Erro ao executar o comando SQL:", erro);
    throw erro;
  }
}


export async function listarDespesasGeral() {
  const comando = `
  SELECT * FROM tb_financeiro;
  `;

  const [linhas] = await con.query(comando)
  
  return linhas
}



export async function verificarCadastroDespesa({situacao, ds_despesa, valor}) {

  if(!situacao|| !ds_despesa|| !valor){
    return false;
  }
  const comando = `
    select COUNT(*) as count situacao, ds_despesa, valor
    from tb_financeiro
    where situacao = ? AND  ds_despesa = ? AND  valor = ? 
    `;

    const [linhas] = await con.query(comando, [situacao, ds_despesa, valor]);

    console.log(linhas);
    

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

export async function ListarLucros(){
  try{
    const comando = `select situacao, valor from tb_financeiro where sitacao = true`
    const [resultado] = await con.query(comando)
    return [resultado]
  } catch (err){
    throw new Error("Erro ao buscar lucro " + err.message);
  }
}

export async function ListarGastos(){
  try{
    const comando = `select situacao, valor from tb_financeiro where sitacao = false`
    const [resultado] = await con.query(comando)
    return [resultado]
  } catch (err){
    throw new Error("Erro ao buscar lucro " + err.message);
  }
}


