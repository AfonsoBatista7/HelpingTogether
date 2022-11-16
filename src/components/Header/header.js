import React, {useState} from 'react'
import {
    Typography,
    Button,
    AppBar,
    Stack,
    Toolbar,
} from "@mui/material";
import imageLogo from "../../images/logo.png";
import imageUser from "../../images/afonso.gif";
import UserProfileButton from "../userProfileButton"
import style from "./header.module.css"
import Popup from '../Popup/Popup';
import RegisterVoluntario from '../Popup/RegisterVoluntario';
import RegisterOrganizacao from '../Popup/RegisterOrganizacao';
import Login from '../Popup/Login';
import ChooseType from '../Popup/ChooseType';

function Header(props) {

    const [isLoggedIn, accountState] = useState(false);

    const [openPopupLogin, setOpenPopupLogin] = useState(false);
    const [openPopupRegister, setOpenPopupRegister] = useState(false);
    const [openPopupRegisterVoluntario, setOpenPopupRegisterVoluntario] = useState(false);
    const [openPopupRegisterOrganizacao, setOpenPopupRegisterOrganizacao] = useState(false);

    const logIn = () => {
        setOpenPopupLogin(true);
    }

    const signUp = () => {
        setOpenPopupRegister(true);
    };

    const goToOrganizations = () => {
        console.log("Voluntariados");
    };

    const goToVolunteers = () => {
        console.log("Organizações");
    };

    const changePopup = (popup) => {
        if(popup === "login") setOpenPopupLogin(true);

        if(popup === "register") setOpenPopupRegister(true);

        if(popup === "voluntario") {
            setOpenPopupRegister(false);
            setOpenPopupRegisterVoluntario(true);
        }

        if(popup === "organizacao") {
            setOpenPopupRegister(false);
            setOpenPopupRegisterOrganizacao(true);
        }

        if(popup === "isLoggedIn") {
            accountState(true);
            setOpenPopupLogin(false);
        }
    }

    return (
        <>
        <AppBar position="static" sx={{ bgcolor: "#2E3B55" }}>
            <Toolbar>
                    <img
                        src={imageLogo}
                        alt="logo"
                        component="a"
                        href="/"
                        className={style.headerImage}
                    ></img>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        HELPING TOGETHER
                    </Typography>
                    <Stack direction="row" spacing={2}  className={style.headerButton}>
                        <Button size="large" sx={{color:'white'}} onClick={goToOrganizations}>Voluntariados</Button>
                        <Button size="large" sx={{color:'white'}} onClick={goToVolunteers}>Organizações</Button>
                        {!isLoggedIn ? 
                            <>
                                <Button variant="contained" size="large" sx={{textTransform: 'none', borderRadius: '20px', color:'white'}} onClick={logIn}>Entrar</Button>
                                <Button variant="outlined" size="large" sx={{textTransform: 'none', borderRadius: '20px', color:'white'}} onClick={signUp}>Registar</Button> 
                            </> : 
                            <UserProfileButton name="Afonso" image={imageUser} accountState={accountState}/>
                        }
                        
                    </Stack>
            </Toolbar>
        </AppBar>
        <Popup
            tipo="login"
            openPopup={openPopupLogin}
            setOpenPopup={setOpenPopupLogin}
            function={changePopup}
            >
            <Login function={changePopup}/>
        </Popup>
        <Popup
            openPopup={openPopupRegister}
            setOpenPopup={setOpenPopupRegister}
            >
            <ChooseType function={changePopup}/>
        </Popup>
        <Popup
            tipo="register"
            openPopup={openPopupRegisterVoluntario}
            setOpenPopup={setOpenPopupRegisterVoluntario}
            function={changePopup}
            >
            <RegisterVoluntario/>
        </Popup>
        <Popup
            tipo="register"
            openPopup={openPopupRegisterOrganizacao}
            setOpenPopup={setOpenPopupRegisterOrganizacao}
            function={changePopup}
            >
            <RegisterOrganizacao/>
        </Popup>
        </>
    )
}

export default Header;

