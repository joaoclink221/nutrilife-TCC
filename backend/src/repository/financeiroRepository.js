import con from "./connection.js";

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