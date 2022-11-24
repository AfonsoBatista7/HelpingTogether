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

import Popup from "./components/Popup/Popup";
import Profile from "./components/Popup/Profile";
import { Button } from "@mui/material";

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
                <div style={{minHeight: "62vh"}}>
                    <Routes>
                        <Route path='/Organizacoes' element={<Organizacoes/>} ></Route>
                        <Route path='/Perfil/:idPerfil' element={<Perfil />} ></Route>
                        <Route path='/Voluntariados' element={<Voluntariados/>}></Route>
                        <Route path='/Voluntariado/:idVolt' element={<Voluntariado/>}></Route>
                        <Route exact path ='/' element={<Home/>} ></Route>
                    </Routes>
                {/* <BoxVoluntariado image="/teste.jpg" name="Vamos salvar Antilopes! D:" desc="Lorem ipsum dolor siLorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus et mauris vitae tincidunt. Integer id euismod purus. Sed hendrerit malesuada nibh ac ultricies. Proin aliquet urna commodo lectus luctus ultrices. Nam lacinia consequat dictum. Etiam malesuada, risus nec sagittis gravida, odio leo mollis ex, et dictum lacus ex nec augue. Donec ac libero tincidunt, hendrerit neque ut, lobortis augue. Fusce pharetra dui et enim elementum, accumsan ullamcorper risus dignissim. Cras mattis ante nec augue tincidunt volutpat. Morbi sed risus vel dui consequat molestie.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec gravida elit non odio tincidunt lacinia. Suspendisse consectetur consequat neque, sit amet convallis quam auctor maximus. Pellentesque sit amet massa ut urna ultrices placerat. Vestibulum rutrum fringilla ex, elementum facilisis enim viverra in. Donec sodales auctor porttitor. Cras non commodo augue, a mattis eros. Integer suscipit, tortor a mattis ullamcorper, neque lorem hendrerit tortor, eu consectetur nulla erat vitae sapien. Fusce volutpat dui in ultrices volutpat. Vivamus bibendum, enim ut facilisis sodales, leo diam dignissim nisl, non scelerisque tellus tellus nec nibh.

Nullam sed libero a arcu rutrum hendrerit id vel velit. Maecenas accumsan mi eu ultrices condimentum. Pellentesque nec nibh vitae ante feugiat rhoncus. Phasellus venenatis magna in magna finibus aliquet. Vestibulum ac arcu et nibh convallis convallis eu eget libero. Cras nec ipsum eget eros varius interdum in quis eros. Curabitur quis justo vitae nisi viverra fringilla quis in sapien. Maecenas sed imperdiet lorem, non mattis augue. Mauris pellentesque ante at sem convallis luctus. Duis congue nec nisi nec malesuada. Etiam vulputate iaculis ipsum. In hac habitasse platea dictumst. Curabitur porttitor fermentum lorem at tincidunt. Morbi interdum lectus nisl, eget gravida lectus semper viverra. Etiam nisl erat, feugiat vel leo tempus, venenatis hendrerit ipsum. Etiam vitae felis lacus. Nulla facilisis dictum. amet, consectetur adipiscing elit. Fusce id bibendum ipsum, in posuere nisi. Suspendisse potenti. Integer mi justo, suscipit ut iaculis nec, ornare eget nisl. Praesent sit amet orci vulputate, aliquam magna et, efficitur sapien. Duis in neque turpis. Praesent egestas augue ut faucibus fermentum. Mauris ultricies feugiat metus in rutrum. Suspendisse potenti. Nam at dui quis urna tempor commodo. Nam id pharetra odio. Sed lectus felis, dictum eu erat sit amet, placerat imperdiet dolor.

Sed ultrices vulputate enim, a auctor ante congue in. Sed et bibendum magna. Praesent sagittis magna venenatis scelerisque tristique. Praesent in felis porta." rating={5}/>  */}
                </div>
            </Layout>
        </div>
    );
}

    /* <CardComment name="Afonso" image="/afonso.gif" rating={5} comment="Adorei ajudar os animais! especialmente os Hamsters... até adotei um! Adorei mesmo foi uma boa experiência."/> */
    /* <BoxOrganization image="/afonso.gif" name="Salvemos os Animais!" getNumVoluntariados={76} desc="Esta organização tem como objetivo salvar o maior número de animais possível! Desde Antilopes a Hamsters! :D"/> */
    /* <MiniBoxVoluntariado name="Bora Salvar Antilopes! (pls)" image="/teste.jpg" desc="Manos bora salvar antilopes porfavor eles são bué fofos e agora, infelizmente, estão em vias de extinção :("/> */
    /* <MiniBoxCandidate image="/afonso.gif" name="Afonso" rating={4}/> */

export default App;
