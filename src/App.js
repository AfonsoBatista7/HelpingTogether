import "./App.css";
import React, { useState } from "react";
import Layout from "./Layout/Layout";
import { Button } from '@mui/material';
import Popup from "./components/Popup/Popup";
import Coment from "./components/Popup/Comment";
import Evaluation from "./components/Popup/Evaluation";
import RegisterVoluntariado from "./components/Popup/RegisterVoluntariado";
import imageUser from "./images/afonso.gif";
import BoxVoluntariado from "./components/StatsShowers/Box/BoxVoluntariado";
import BoxOrganization from "./components/StatsShowers/Box/BoxOrganization";

import image from "./images/teste.jpg"
import CardComment from "./components/StatsShowers/Card/CardComment";

function App() {

    const [openP, setOpenP] = useState(false);

    const open = () => {
        setOpenP(true);
    }

    const close= () => {
        setOpenP(false);
    }


    return (
        <div>
            <Layout >
            <Button variant="text" onClick={open}>Text</Button>
            </Layout>
            <Popup openPopup={openP} setOpenPopup={setOpenP}>
                <Evaluation name="ola" type="voluntariado" nameToComment="anaMaria" closePopup={close}/>
            </Popup>
        </div>
    );
}

export default App;
