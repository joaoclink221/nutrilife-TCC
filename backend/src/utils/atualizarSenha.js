import con from "./connection.js"; 
import CryptoJS from "crypto-js"; 

async function atualizarSenhas() {
  try {
    
    const [usuarios] = await con.query("SELECT email, senha FROM tb_login");

    
    for (const { email, senha } of usuarios) {
      const hash = CryptoJS.SHA256(senha).toString(CryptoJS.enc.Hex);
      await con.query("UPDATE tb_login SET senha = ? WHERE email = ?", [hash, email]);
      console.log(`Senha atualizada para o usuário: ${email}`);
    }

    console.log("Senhas atualizadas com sucesso!");
  } catch (err) {
    console.error("Erro ao atualizar as senhas:", err);
  } finally {
    con.end(); 
  }
}

atualizarSenhas();
