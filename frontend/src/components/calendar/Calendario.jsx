import { useState } from "react";
import "../calendar/Calendar.css"
import {ChevronRight, ChevronLeft} from "lucide-react"
const Calendario = () => {
    const [dataAtual, setDataAtual] = useState(new Date());

    const mudarMes = (incremento) => {
        const novoMes = new Date(dataAtual.setMonth(dataAtual.getMonth() + incremento));
        setDataAtual(novoMes);
    };

    const renderizarDias = () => {
        const dias = [];
        const mes = dataAtual.getMonth();
        const ano = dataAtual.getFullYear();

        
        const primeiroDiaDoMes = new Date(ano, mes, 1);
        const ultimoDiaDoMes = new Date(ano, mes + 1, 0);
        
        const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
        diasDaSemana.forEach((dia) => {
            dias.push(<div key={dia} className="dia titulo">{dia}</div>);
        });

        for (let i = 0; i < primeiroDiaDoMes.getDay(); i++) {
            dias.push(<div key={`empty-start-${i}`} className="dia vazio"></div>);
        }

        for (let dia = 1; dia <= ultimoDiaDoMes.getDate(); dia++) {
            dias.push(
                <div key={dia} className="dia">
                    {dia}
                </div>
            );
        }

        const ultimoDiaDaSemana = ultimoDiaDoMes.getDay();
        const diasFaltando = (ultimoDiaDaSemana === 6) ? 0 : 6 - ultimoDiaDaSemana;
        for (let i = 0; i < diasFaltando; i++) {
            dias.push(<div key={`empty-end-${i}`} className="dia vazio"></div>);
        }

        return dias;
    };

    return (
        <div id="calendario">
            <div id="header">
                <button className="ap" onClick={() => mudarMes(-1)}><ChevronLeft/></button>
                <h2 className="title">{dataAtual.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</h2>
                <button className="ap"   onClick={() => mudarMes(1)}><ChevronRight/></button>
            </div>
            <div id="dias">
                {renderizarDias()}
            </div>
        </div>
    );
};

export default Calendario;