import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";

import Organizacoes from "./pages/Organizacoes";
import Voluntariados from "./pages/Voluntariados";
import Voluntariado from "./pages/Voluntariado";
import ScrollToTop from "./pages/ScrollToTop";

import Perfil from "./pages/Perfil";
import { React } from 'react';


function App() {


    return (
        <div >
              
            <Layout>
            <ScrollToTop/>
                <Routes>
                    <Route path='/Organizacoes' element={<Organizacoes />} ></Route>
                    <Route path='/Perfil/:idPerfil/:area' element={<Perfil />} ></Route>
                    <Route path='/Voluntariados' element={<Voluntariados />}></Route>
                    <Route path='/Voluntariado/:idVolt' element={<Voluntariado />}></Route>
                    <Route exact path='/' element={<Home />} ></Route>
                </Routes>
            </Layout>
        </div>

    );
}


export default App;
