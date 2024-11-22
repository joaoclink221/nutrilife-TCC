import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ModalPaciente.scss"
import axios from "axios";
const ModalPaciente = ({ isOpen, onClose, pacienteEditando }) => {
  const [nome, setNome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [sexo, setSexo] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [cintura, setCintura] = useState('')
  const [quadril, setQuadril] = useState('')
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [tipoDieta, setTipoDieta] = useState('')
  const [inicio, setInicio] = useState('')
  const [fim, setFim] = useState('')
  const [description, setDescritption] = useState('')
  const [mensagem, setMensagem] = useState("");
  const [token, setToken] = useState(null)
const Navigate = useNavigate()
useEffect(() => {
    let token = localStorage.getItem('TOKEN')
    setToken(token)

    if (token === null) {
      Navigate(`/`)
    }
  }, [])

  useEffect(() => {
    if (pacienteEditando) {
      setNome(pacienteEditando.nome)
      setDataNascimento(new Date(pacienteEditando.data_nacimento).toLocaleDateString())
      setSexo(pacienteEditando.genero)
      setTelefone(pacienteEditando.telefone)
      setEmail(pacienteEditando.email)
      setCintura(pacienteEditando.cintura)
      setQuadril(pacienteEditando.quadril)
      setAltura(pacienteEditando.altura)
      setPeso(pacienteEditando.peso)
      setTipoDieta(pacienteEditando.tipo_dieta)
      setInicio(pacienteEditando.data_inicio)
      setFim(pacienteEditando.data_fim)
      setDescritption(pacienteEditando.Descricao)
    } else {
      setNome("")
      setDataNascimento("")
      setSexo("")
      setTelefone("")
      setEmail("")
      setCintura("")
      setQuadril("")
      setAltura("")
      setPeso("")
      setTipoDieta("")
      setInicio("")
      setFim("")
      setDescritption("")
    }
  }, [pacienteEditando, isOpen])

  if (!isOpen) return null;

  const register = async (event) => {
    event.preventDefault();

    if (
      !nome ||
      !dataNascimento ||
      !sexo ||
      !telefone ||
      !email ||
      !cintura ||
      !quadril ||
      !altura ||
      !peso ||
      !tipoDieta ||
      !inicio ||
      !fim
    ) {
      setMensagem("Todos os campos são obrigatórios.");
      return;
    }

    try {
      const dados = {
        nome: nome,
        data_nascimento: dataNascimento,
        genero: sexo,
        telefone: telefone,
        email: email,
        cintura: parseFloat(cintura),
        quadril: parseFloat(quadril),
        altura: parseFloat(altura),
        peso: parseFloat(peso),
        tipo_dieta: tipoDieta,
        data_inicio: inicio,
        data_fim: fim,
        Descricao: description
      };

      if(pacienteEditando){
        console.log(pacienteEditando);
        const resposta = await axios.put(`http://localhost:5010/atualizarPaciente/${pacienteEditando.id_paciente}?x-access-token=${token}`,dados)
        alert(resposta.data.message);
        setMensagem(`ficha do paciente editada com sucesso`)
      } else{
        console.log(inicio);
        console.log(fim);

        const resposta = await axios.post(`http://localhost:5010/cadastropaciente?x-access-token=${token}`, dados)
        setMensagem(`paciente registrado com sucesso!`);
        alert(resposta.data.message);
        setNome("")
        setDataNascimento("")
        setSexo("")
        setTelefone("")
        setEmail("")
        setCintura("")
        setQuadril("")
        setAltura("")
        setPeso("")
        setTipoDieta("")
        setInicio("")
        setFim("")
        setDescritption("")
    } 
    console.log("Dados enviados:", dados);

  }catch (err) {
    console.error("Erro ao registrar Paciente:", err.response?.data);
    setMensagem(err.response?.data?.erro || "Erro ao conectar com o servidor.");
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={register} id="formulario">
          <div className="Dados-iniciais">
            <h1>{pacienteEditando ? "editando Dados inciais" : "dados iniciais"}</h1>
            <div className="heimdal">
              <div className="sla">
                <label htmlFor="name">Nome</label>
                <input type="text" className="mimir" value={nome} onChange={(e) => setNome(e.target.value)}/>
              </div>
              <div className="sla">
                <label htmlFor="date">Data de Nascimento</label>
                <input type="date" className="loki" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
              </div>
              <div className="sla">
                <label htmlFor="gender">Sexo</label>
                <input type="text" className="mimir" value={sexo} onChange={(e) => setSexo(e.target.value)}/>
              </div>
              <div className="sla">
                <label htmlFor="name">telefone</label>
                <input type="text" className="mimir" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
              </div>
              <div className="sla">
                <label htmlFor="name">Email</label>
                <input type="text" className="mimir" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
          </div>

          <hr />

          <div className="Dados-da-Paciente">
            <h1>{pacienteEditando ? "editando informações" : "Informações"}</h1>
            <div className="control">
              <div className="info-dieta">
                <div className="sla">
                  <label>Cintura</label>
                  <input type="text" className="noname" step="0.01" value={cintura} onChange={(e) => setCintura(e.target.value)}/>
                </div>
                <div className="sla">
                  <label>Quadril</label>
                  <input type="text" className="noname" step="0.01" value={quadril} onChange={(e) => setQuadril(e.target.value)}/>
                </div>
                <div className="sla">
                  <label>Altura</label>
                  <input type="text" className="noname" step="0.01" value={altura} onChange={(e) => setAltura(e.target.value)} />
                </div>
                <div className="sla">
                  <label>Peso</label>
                  <input type="text" className="noname" step="0.01" value={peso} onChange={(e) => setPeso(e.target.value)}/>
                </div>
              </div>

              <div className="info-dieta">
                <div className="sla">
                  <label>Tipo de dieta</label>
                  <input type="text" className="noname" value={tipoDieta} onChange={(e) => setTipoDieta(e.target.value)} />
                </div>
                <div className="sla">
                  <label>Data de Início</label>
                  <input type="date" className="loki" value={inicio} onChange={(e) => setInicio(e.target.value)}/>
                </div>
                <div className="sla">
                  <label>Conclusão</label>
                  <input type="date" className="loki" value={fim} onChange={(e) => setFim(e.target.value)}/>
                </div>
              </div>
            </div>

            <div className="atlas">
              <div className="nem">
                <h1>Descrição do Paciente</h1>
                <textarea className="description" value={description} onChange={(e) => setDescritption(e.target.value)}/>
              </div>
              <div className="mid">
                <button className="hollow" type="submit">{pacienteEditando ? "atualizar" : "Salvar"}</button>
              </div>
              {mensagem && <p>{mensagem}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalPaciente;
