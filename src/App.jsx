import React from "react";
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Curiosidades from './components/Curiosidades/Curiosidades.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Curiosidades" element={<Curiosidades />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
