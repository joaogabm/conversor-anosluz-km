import React, { useState } from 'react';
import './Conversor.css';

function Conversor() {
    const [anosLuz, setAnosLuz] = useState('');
    const [quilometros, setQuilometros] = useState('');
    const [resultadoAnosLuzParaKm, setResultadoAnosLuzParaKm] = useState('');
    const [resultadoKmParaAnosLuz, setResultadoKmParaAnosLuz] = useState('');
    const [historico, setHistorico] = useState([]);

    function ConverterAnosLuzParaKm() {
        const anosLuzValor = parseFloat(anosLuz);

        if (!isNaN(anosLuzValor) && anosLuzValor >= 1) {
            const quilometrosCalculados = anosLuzValor * 9.461e12;
            setResultadoAnosLuzParaKm(anosLuzValor + " anos luz equivale a aproximadamente " + quilometrosCalculados + " quilômetros.");
            setResultadoKmParaAnosLuz('');
            adicionarAoHistorico(anosLuzValor, quilometrosCalculados.toFixed(2));
        } else {
            alert("Por favor, insira um valor numérico maior ou igual a 1 para os anos luz.");
        }
    }

    function ConverterKmParaAnosLuz() {
        const quilometrosValor = parseFloat(quilometros);

        if (!isNaN(quilometrosValor) && quilometrosValor >= 1) {
            const anosLuzCalculados = quilometrosValor / 9.461e12;
            setResultadoKmParaAnosLuz(quilometrosValor + " quilômetros equivale a aproximadamente " + anosLuzCalculados + " anos luz.");
            setResultadoAnosLuzParaKm('');
            adicionarAoHistorico(quilometrosValor, anosLuzCalculados);
        } else {
            alert("Por favor, insira um valor numérico maior ou igual a 1 para os quilômetros.");
        }
    }

    function adicionarAoHistorico(valorKm, valorAnosLuz) {
        const novaConversao = {
            data: new Date().toLocaleString(),
            valorKm: valorKm,
            valorAnosLuz: valorAnosLuz
        };

        const novoHistorico = [novaConversao, ...historico.slice(0, 2)];
        setHistorico(novoHistorico);
    }

    return (
        <div>
            <section className="conversor">
                <section className="conversor-anosluz-km">
                    <div className="AnosLuz-KM">
                        <h1>Anos Luz:</h1>
                        <input type="text" className="input-converter" value={anosLuz} onChange={(e) => setAnosLuz(e.target.value)}/>
                    </div>
                    <button type="submit" className="button-converter" onClick={ConverterAnosLuzParaKm}>Converter</button>
                    {resultadoAnosLuzParaKm && <div className="resultado">{resultadoAnosLuzParaKm}</div>}
                </section>

                <section className="conversor-km-anosluz">
                    <div className="AnosLuz-KM">
                        <h1>KM:</h1>
                        <input type="text" className="input-converter" value={quilometros} onChange={(e) => setQuilometros(e.target.value)}/>
                    </div>
                    <button type="submit" className="button-converter" onClick={ConverterKmParaAnosLuz}>Converter</button>
                    {resultadoKmParaAnosLuz && <div className="resultado">{resultadoKmParaAnosLuz}</div>}
                </section>
            </section>

            <Historico historico={historico} className="historico"/>
        </div>
    );
}

function Historico({ historico }) {
    return (
        <div className="historico">
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Valor em KM</th>
                        <th>Valor em Anos Luz</th>
                    </tr>
                </thead>
                <tbody>
                    {historico.map((conversao, index) => (
                        <tr key={index}>
                            <td>{conversao.data}</td>
                            <td>{conversao.valorKm}</td>
                            <td>{conversao.valorAnosLuz}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Conversor;
