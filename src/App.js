import { CardContent } from "@mui/material";
import "./App.css";
import Home from "./components/Home/Home";
import BoxOrganization from "./components/StatsShowers/Box/BoxOrganization";
import BoxVoluntariado from "./components/StatsShowers/Box/BoxVoluntariado";
import MiniBoxCandidate from "./components/StatsShowers/Box/MiniBoxCandidate";
import MiniBoxVoluntariado from "./components/StatsShowers/Box/MiniBoxVoluntariado";
import CardComment from "./components/StatsShowers/Card/CardComment";
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
                <Route path='/Perfil/:idPerfil' element={<Perfil />} ></Route>
                <Route path='/Voluntariados' element={<Voluntariados/>}></Route>
                <Route path='/Voluntariado/:idVolt' element={<Voluntariado/>}></Route>
                <Route exact path ='/' element={<Home/>} ></Route>
            </Routes>
            </Layout>
        </div>
    );
}

export default App;
