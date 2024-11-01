const ModalPaciente = () => {
    return (
        <div>
            <form action="" id="formulario">
                <div className="Dados-iniciais">
                    <div>
                        <label htmlFor="name">Nome</label>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="date">Data de Nascimente</label>
                        <div>
                            <input type="Date" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name">Sexo</label>
                        <div>
                            <select name="filter" id="filtro">
                                <option value="">Feminino</option>
                                <option value="">Masculino</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="Dados da Consulta">
                    <div>
                        <label htmlFor="name">Data da Consulta</label>
                        <div>
                            <input type="date" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name">Horário</label>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name">Tipo de Consulta</label>
                        <div>
                        <select name="filter" id="filtro">
                                <option value="">Presencial</option>
                                <option value="">Online</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ModalPaciente
