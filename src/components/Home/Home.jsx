import React from "react";
import './Home.css';
import Conversor from '../Conversor/Conversor.jsx';

function Home () {
    return (
        <section className="home">
            <h1 className="title">Conversor anos luz/KM</h1>
            <Conversor />
        </section>
    );
}

export default Home;
