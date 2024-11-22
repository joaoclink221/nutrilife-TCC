import "./login.scss";
import { Link } from "react-router-dom";
import { UserRound, KeySquare } from "lucide-react"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const logar = async (e) => {
    e.preventDefault();
    try {
      const resposta = await axios.post("http://localhost:5010/login/", {

        email: email,
        senha: senha,

      });

      if(resposta.data.token){
        localStorage.setItem("TOKEN", resposta.data.token);
        setMensagem(resposta.data.message);

        setTimeout(() => {
          navigate("/inicio");
        }, 2000);
      } else {
        setMensagem('Falha no login, tente novamente.');
      }
      
      
    } catch (err) {
      if (err.response) {
        setMensagem(err.response.data.message);
      } else {
        setMensagem("erro na conexão do servidor");
      }
    }
  }

  return (
    <div className="zeus">
      <Link to="/" className="back-button">
        Voltar
      </Link>
      <div className="wrapper">
        <form onSubmit={logar}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="Email" autoComplete="true" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <UserRound className="icon" />

          </div>
          <div className="input-box">
            <input type="password" autoComplete="true" placeholder="Password" required value={senha} onChange={(e) => setSenha(e.target.value)} />
            <KeySquare className="icon" />
          </div>
          <button type="submit">Login</button>

          {mensagem && <p className="login-sucesso"> {mensagem}</p>}

        </form>
      </div>
    </div>
  )
}
