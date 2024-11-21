import con from "./connection.js";
import Crypto from "crypto-js";

export async function inserirUsuario(pessoa) {
  let hash = Crypto.SHA256(pessoa.senha).toString();

  const comando = `
      insert into tb_login( email, senha)
        values(?, ?);
  `;

  
  let resposta = await con.query(comando, [pessoa.email, hash]);
  let info = resposta[0];

  return info.insertId;
}

export async function verificarLogin(nutri) {
  const comando = `
    SELECT email, senha
    FROM tb_login
    WHERE email = ? AND senha = ?;
  `;
  const hash = Crypto.SHA256(nutri.senha).toString();
  console.log("Hash gerado:", hash);

  try {
    const [linhas] = await con.query(comando, [nutri.email, hash]);

    return linhas.length > 0;
  } catch (err) {
    console.error("Erro ao verificar login:", err);
    throw new Error("Erro ao processar o login.");
  }
}
