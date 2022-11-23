import "./App.css";
import Layout from "./Layout/Layout";
import { Route , Routes } from 'react-router-dom'

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
                <Route path='/Perfil/:idPerfil' element={<Perfil />} ></Route>
                <Route path='/Voluntariados' element={<Voluntariados/>}></Route>
                <Route path='/Voluntariado/:idVolt' element={<Voluntariado/>}></Route>
                <Route exact path ='/' element={<HomePage/>} ></Route>
            </Routes>
            <Button variant="text" onClick={open}>Registar</Button>
            </Layout>
            <Popup
                openPopup={popup}
                setOpenPopup={setOpen}
            >
                <Profile name={"Maria"} image={"Maria.jpg"} desc={"Tenho 38 anos, sou enfermeira e tenho 3 filhos. Adoro fazer voluntariados relacionados com a saúde e com crianças."}
                email= {"marialeal45@gmail.com"} birthday={"07/05/1984"} gender={"Feminino"} phone={"924562789"} rating={4}/>
            </Popup>
        </div>
    );
}

//{name, image, desc, gender, birthday, email, phone, idperfil, rating}

export default App;
