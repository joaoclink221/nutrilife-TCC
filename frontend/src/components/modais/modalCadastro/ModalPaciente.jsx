import "./ModalPaciente.scss"
const ModalPaciente = () => {
    return (
        <div>
            <form action="" id="formulario">
                <div className="Dados-iniciais">
                    <h1>Dados-iniciais</h1>
                    <div className="heimdal">
                        <div className="sla">
                            <label htmlFor="name" >Nome</label>
                            <div >
                                <input type="text" className="mimir" />
                            </div>
                        </div>
                        <div >
                            <label htmlFor="date" className="sla">Data de Nascimente</label>
                            <div>
                                <input type="Date" className="loki" />
                            </div>
                        </div>
                        <div className="sla">
                            <label htmlFor="name">Sexo</label>
                            <div>
                                <select name="filter"
                                    id="filtro" >
                                    <option value="">Feminino</option>
                                    <option value="">Masculino</option>

                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="Dados-da-Paciente">
                    <h1>Informações</h1>
                    <div className="control">
                        <div className="info-dieta">
                            <div className="sla">
                                <label htmlFor="">Cintura</label>
                                <input type="text" className="noname" />
                            </div>
                            <div className="sla">
                                <label htmlFor="">Quadril</label>
                                <input type="text" className="noname" />
                            </div>
                            <div className="sla">
                                <label htmlFor="">Altura</label>
                                <input type="text" className="noname" />
                            </div>
                            <div className="sla">
                                <label htmlFor="">Peso</label>
                                <input type="text" className="noname" />
                            </div>
                        </div>
                        <div className="info-dieta">
                            <div className="sla">
                                <label htmlFor="">Tipo de dieta</label>
                                <input type="text" className="noname" />
                            </div>

                            <div>
                                <label htmlFor="date">Data de Inicio </label>
                                <div>
                                    <input type="Date" className="loki" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="date">Conclusão</label>
                                <div>
                                    <input type="Date" className="loki" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="atlas">
                        <div className="nem">
                            <label><h1>Descrição do paciente</h1></label>
                            <textarea type="text"
                                className="description" />
                        </div>
                        <div className="mid">
                            <button className="bnt">Salvar</button>
                            <button className="bnt">excluir</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ModalPaciente
