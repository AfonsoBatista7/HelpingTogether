import React, { useState, useEffect } from "react";
import { Typography, Button, AppBar, Stack, Toolbar } from "@mui/material";
import imageLogo from "../../images/logo.png";
import imageUser from "../../images/people/defaultPhoto.jpg";
import UserProfileButton from "../UserProfileButton"
import style from "./header.module.css"
import Popup from '../Popup/Popup';
import RegisterVoluntario from '../Popup/RegisterVoluntario';
import RegisterOrganizacao from '../Popup/RegisterOrganizacao';
import Login from '../Popup/Login';
import ChooseType from '../Popup/ChooseType';

function Header(props) {

    const [perfil, setPerfil] = useState();
    const [openPopupLogin, setOpenPopupLogin] = useState(false);
    const [openPopupRegister, setOpenPopupRegister] = useState(false);
    const [openPopupRegisterVoluntario, setOpenPopupRegisterVoluntario] =
        useState(false);
    const [openPopupRegisterOrganizacao, setOpenPopupRegisterOrganizacao] =
        useState(false);

    const logIn = () => {
        setOpenPopupLogin(true);
    };

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
        if (popup === "login") setOpenPopupLogin(true);

        if (popup === "register") setOpenPopupRegister(true);

        if (popup === "voluntario") {
            setOpenPopupRegister(false);
            setOpenPopupRegisterVoluntario(true);
        }

        if (popup === "organizacao") {
            setOpenPopupRegister(false);
            setOpenPopupRegisterOrganizacao(true);
        }

        if (popup === "isLoggedIn") {
            setOpenPopupLogin(false);
        }

        if (popup === "isRegisterOrganizacao") {
            setOpenPopupRegisterOrganizacao(false);
        }

        if (popup === "isRegisterVoluntario") {
            setOpenPopupRegisterVoluntario(false);
        }
    }

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([])

    //vai buscar todos os valores de login da BD e mete em loggedIns
    useEffect(() => {
        const getLoggedIn = async () => {
            const loggedInFromServer = await fetchLoggedIn()
            setLoggedIns(loggedInFromServer)
        }

        getLoggedIn()

    }, [])


    useEffect(() => {
        checkLogin()

    }, [loggedIns])


    const fetchLoggedIn = async () => {
        const res = await fetch('http://localhost:5000/login')
        const data = await res.json()

        return data;
    }

    const fetchLogin = async (id) => {
        const res = await fetch(`http://localhost:5000/login/${id}`)
        const data = await res.json()

        return data
    }


    const changeLogginStatus = async (id) => {
        const loginToChange = await fetchLogin(id)
        const updLogin = { ...loginToChange, isLoggedIn: !loginToChange.isLoggedIn }

        const res = await fetch(`http://localhost:5000/login/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updLogin),
        })

        const data = await res.json()

        setLoggedIns(
            loggedIns.map((element) =>
                element.id === id ? { ...element, isLoggedIn: data.isLoggedIn } : element

            )
        )
    }

    const checkLogin = () => {

        for (const element of loggedIns) {
            if (element.isLoggedIn) {
                setPerfil(element);
            }
        }

    }

    const putLogin = (element) => {

        setPerfil(element);

        changeLogginStatus(element.id);
    }

    const takeOffLogin = () => {

        changeLogginStatus(perfil.id);
        setPerfil(null);

    }

    return (
        <>
            <AppBar position="static" sx={{ bgcolor: "#2E3B55" }}>
                <Toolbar>
                    <Link
                        href="/"
                        className={style.headerLink}
                        style={{
                            marginRight: "20px",
                            width: "3%",
                        }}
                    >
                        <img
                            src={imageLogo}
                            alt="logo"
                            href="/"
                            className={style.headerImage}
                        />
                    </Link>
                    <Link href="/" className={style.headerLink}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".2rem",
                            }}
                        >
                            HELPING TOGETHER
                        </Typography>
                    </Link>
                    <Stack direction="row" spacing={2} className={style.headerButton}>
                        <Button size="large" sx={{ color: 'white' }} onClick={goToOrganizations}>Voluntariados</Button>
                        <Button size="large" sx={{ color: 'white' }} onClick={goToVolunteers}>Organizações</Button>
                        {!perfil ?
                            <>
                                <Button variant="contained" size="large" sx={{ textTransform: 'none', borderRadius: '20px', color: 'white' }} onClick={logIn}>Entrar</Button>
                                <Button variant="outlined" size="large" sx={{ textTransform: 'none', borderRadius: '20px', color: 'white' }} onClick={signUp}>Registar</Button>
                            </> :
                            <>
                                <UserProfileButton name={perfil.name} image={imageUser} takeOffLogin={takeOffLogin} />
                            </>
                        }

                    </Stack>
                </Toolbar>
            </AppBar>
            <Popup
                tipo="login"
                openPopup={openPopupLogin}
                setOpenPopup={setOpenPopupLogin}
                changePopup={changePopup}
            >
                <Login putLogin={putLogin} changePopup={changePopup} />
            </Popup>
            <Popup
                openPopup={openPopupRegister}
                setOpenPopup={setOpenPopupRegister}
            >
                <ChooseType changePopup={changePopup} />
            </Popup>
            <Popup
                tipo="register"
                openPopup={openPopupRegisterVoluntario}
                setOpenPopup={setOpenPopupRegisterVoluntario}
                changePopup={changePopup}
            >
                <RegisterVoluntario changePopup={changePopup} />
            </Popup>
            <Popup
                tipo="register"
                openPopup={openPopupRegisterOrganizacao}
                setOpenPopup={setOpenPopupRegisterOrganizacao}
                changePopup={changePopup}
            >
                <RegisterOrganizacao changePopup={changePopup} />
            </Popup>
        </>
    );
}

export default Header;
