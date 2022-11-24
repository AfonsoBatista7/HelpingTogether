import "./App.css";
import Layout from "./Layout/Layout";
import { Route , Routes } from 'react-router-dom'

import Organizacoes from "./pages/Organizacoes";
import Voluntariados from "./pages/Voluntariados";
import Voluntariado from "./pages/Voluntariado";

import Perfil from "./pages/Perfil";
import HomePage from "./pages/HomePage";
import React from "react";


function App() {

    return (
        <div>
            <Layout>
            <Routes>
                <Route path='/Organizacoes' element={<Organizacoes/>} ></Route>
                <Route path='/Perfil/:idPerfil' element={<Perfil />} ></Route>
                <Route path='/Voluntariados' element={<Voluntariados/>}></Route>
                <Route path='/Voluntariado/:idVolt' element={<Voluntariado/>}></Route>
                <Route exact path ='/' element={<HomePage/>} ></Route>
            </Routes>
            </Layout>
        </div>
    );
}

export default App;
