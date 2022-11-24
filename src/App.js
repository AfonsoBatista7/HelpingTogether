import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./Layout/Layout";
import { Route , Routes } from 'react-router-dom';

import Organizacoes from "./pages/Organizacoes";
import Voluntariados from "./pages/Voluntariados";
import Voluntariado from "./pages/Voluntariado";

import Perfil from "./pages/Perfil";
import HomePage from "./pages/HomePage";
import React, { useState } from "react";

import Popup from "./components/Popup/Popup";
import Profile from "./components/Popup/Profile";
import {Button} from "@mui/material";

function App() {

    const [popup, setOpen] = useState(false);

    const open = () => {
        setOpen(true);
    };

    const close = () => {
        setOpen(false);
    };

    return (
        <div>
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

//{name, image, desc, gender, birthday, email, phone, idperfil, rating}

export default App;
