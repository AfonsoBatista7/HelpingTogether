import "./App.css";
import Layout from "./layout/Layout";
import { Route , Routes } from 'react-router-dom'

import Organizacoes from "./pages/Organizacoes";
import Voluntariados from "./pages/Voluntariados";
import Voluntariado from "./pages/Voluntariado";
import Perfil from "./pages/Perfil";
import HomePage from "./pages/HomePage";
import React, { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import imageUser from "./images/afonso.gif";
import BoxVoluntariado from "./components/StatsShowers/Box/BoxVoluntariado";
import BoxOrganization from "./components/StatsShowers/Box/BoxOrganization";

import image from "./images/teste.jpg"
import CardComment from "./components/StatsShowers/Card/CardComment";

function App() {
    return (
        <div>
            <Layout>
            <Routes>
                <Route path='/Organizacoes' element={<Organizacoes/>} ></Route>
                <Route path='/Perfil' element={<Perfil />} ></Route>
                <Route path='/Voluntariados' element={<Voluntariados/>}></Route>
                <Route path='/Voluntariado' element={<Voluntariado/>}></Route>
                <Route exact path ='/' element={<HomePage/>} ></Route>
            </Routes>
            </Layout>
        </div>
    );
}

export default App;
