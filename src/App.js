import "./App.css";
import MiniBoxVoluntariado from "./components/StatsShowers/Box/MiniBoxVoluntariado";
import Layout from "./Layout/Layout";
import { Route , Routes } from 'react-router-dom'

import Organizacoes from "./pages/Organizacoes";
import Voluntariados from "./pages/Voluntariados";
import Voluntariado from "./pages/Voluntariado";
import InfoProfile from "./components/SectionsProfile/InfoProfile";
import CandidaturasPendentes from "./components/SectionsProfile/CandidaturasPendentes";

import Perfil from "./pages/Perfil";
import HomePage from "./pages/HomePage";
import React, { useState, useEffect } from "react";

function App() {

    return (
        <div>
            <Layout>
            <Routes>
                <Route path='/Organizacoes' element={<Organizacoes/>} ></Route>
                <Route path='/Perfil/:id' element={<Perfil />} ></Route>
                <Route path='/Voluntariados' element={<Voluntariados/>}></Route>
                <Route path='/Voluntariado/:idVolt' element={<Voluntariado/>}></Route>
                <Route exact path ='/' element={<HomePage/>} ></Route>
            </Routes>
            </Layout>
        </div>
    );
}

export default App;
