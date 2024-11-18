import con from "./connection.js";

//login

export async function verificarLogin(email, senha) {
  const comando = `
    select  email, senha
    from tb_login
    where email = ? AND  senha = ?;
    `;

  const [linhas] = await con.query(comando, [email, senha]);

  return linhas.length > 0;
}