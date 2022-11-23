import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./Layout/Layout";
import { Route , Routes } from 'react-router-dom';

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
                <Route path='/Perfil/:idPerfil' element={<Perfil />} ></Route>
                <Route path='/Voluntariados' element={<Voluntariados/>}></Route>
                <Route path='/Voluntariado/:idVolt' element={<Voluntariado/>}></Route>
                <Route exact path ='/' element={<Home/>} ></Route>
            </Routes>
            <Button variant="text" onClick={open}>Registar</Button>
            </Layout>
            <Popup
                openPopup={popup}
                setOpenPopup={setOpen}
            >
                <Profile name={"Maria"} image={"Maria.jpg"} desc={"Tenho 38 anos, sou enfermeira e tenho 3 filhos. Adoro fazer voluntariados relacionados com a saúde e com crianças."}/>
            </Popup>
        </div>
    );
}

{/* <CardComment name="Afonso" image="/afonso.gif" rating={5} comment="Adorei ajudar os animais! especialmente os Hamsters... até adotei um! Adorei mesmo foi uma boa experiência."/> */}
                    {/* <BoxVoluntariado image="/teste.jpg" name="Vamos salvar Antilopes! D:" desc="Porfavor!!! eles estão a morrer!! temos que os salvar... não têm pena!? olhem para a carinha linda dele a pedir ajuda :( pls..." rating={5}/> */}
                    {/* <BoxOrganization image="/afonso.gif" name="Salvemos os Animais!" getNumVoluntariados={76} desc="Esta organização tem como objetivo salvar o maior número de animais possível! Desde Antilopes a Hamsters! :D"/> */}
                    {/* <MiniBoxVoluntariado name="Bora Salvar Antilopes! (pls)" image="/teste.jpg" desc="Manos bora salvar antilopes porfavor eles são bué fofos e agora, infelizmente, estão em vias de extinção :("/> */}
                    {/* <MiniBoxCandidate image="/afonso.gif" name="Afonso" rating={4}/> */}

export default App;
