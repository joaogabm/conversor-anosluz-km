import React from "react";
import './Curiosidades.css';
import Image from '../../img/eu.jpg';
import { FaGithub, FaLinkedin  } from "react-icons/fa";

function Curiosidades () {
    return (
        <div className="container">
            <h1 className="title-curiosidades">Sobre mim</h1>
            <div className="sobre-mim">
                <ul className="sobre-mim-p">
                    <li className="itens-lista">Me chamo João Gabriel, tenho 20 anos e moro em Pau Amarelo/Paulista;</li>
                    <li className="itens-lista">Comecei a estudar programação em 2021, através de um curso do professor Gustavo Guanabara;</li>
                    <li className="itens-lista">Comecei estudando HTML e CSS, e com o tempo resolvi aprender JavaScript e React, visando o desenvolvimento de layouts interativos;</li>
                    <li className="itens-lista">Gosto muito de assistir séries (Suits, Grey's Anatomy, Stranger Thinks, etc)</li>
                    <li className="itens-lista">Pra aliviar o estresse, gosto de escutar músicas e treinar musculação;</li>
                    <li className="itens-lista">Gosto de jogos competitivos, como CS e Valorant, e não sou muito interessado em modo história;</li>
                    <li className="itens-lista">Gosto de ir a praia, cinema, viajar, etc;</li>
                    <li className="itens-lista">Tenho uma cachorrinha de estimação, o nome dela é Athena mas eu só a chamo de Atheninha;</li>
                    <li className="itens-lista">Minha comida favorita é sushi/temaki.</li>
                </ul>
                <img src={Image} alt="Eu" className="sobre-mim-img"/>
                <a href="https://github.com/joaogabm" className="github" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/joaogabm/" className="linkedin" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                
            </div>
        </div>
    );
}

export default Curiosidades;
