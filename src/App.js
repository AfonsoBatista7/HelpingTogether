import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";

import BoxOrganization from "./components/StatsShowers/Box/BoxOrganization";
import BoxVoluntariado from "./components/StatsShowers/Box/BoxVoluntariado";
import MiniBoxCandidate from "./components/StatsShowers/Box/MiniBoxCandidate";
import MiniBoxVoluntariado from "./components/StatsShowers/Box/MiniBoxVoluntariado";
import CardComment from "./components/StatsShowers/Card/CardComment";

import Organizacoes from "./pages/Organizacoes";
import Voluntariados from "./pages/Voluntariados";
import Voluntariado from "./pages/Voluntariado";

import Perfil from "./pages/Perfil";
import React, { useState } from "react";

function App() {
    
    return (
        <div >
            <Layout>
                <Routes>
                    <Route path='/Organizacoes' element={<Organizacoes/>} ></Route>
                    <Route path='/Perfil/:idPerfil/:area' element={<Perfil />} ></Route>
                    <Route path='/Voluntariados' element={<Voluntariados/>}></Route>
                    <Route path='/Voluntariado/:idVolt' element={<Voluntariado/>}></Route>
                    <Route exact path ='/' element={<Home/>} ></Route>
                </Routes>
            </Layout>
        </div>
    );
}


export default App;
