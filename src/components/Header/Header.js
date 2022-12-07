import React, { useState, useEffect } from "react";
import {
    Typography,
    Button,
    AppBar,
    Stack,
    Toolbar,
} from "@mui/material";
import UserProfileButton from "./UserProfileButton";
import style from "./header.module.css";
import Popup from "../Popup/Popup";
import RegisterVoluntario from "../Popup/RegisterVoluntario";
import RegisterOrganizacao from "../Popup/RegisterOrganizacao";
import Login from "../Popup/Login";
import ChooseType from "../Popup/ChooseType";
import { Link } from 'react-router-dom'

function Header() {

    const [image, setImage] = useState("");
    const [perfil, setPerfil] = useState();
    const [openPopupLogin, setOpenPopupLogin] = useState(false);
    const [openPopupRegister, setOpenPopupRegister] = useState(false);
    const [openPopupRegisterVoluntario, setOpenPopupRegisterVoluntario] = useState(false);
    const [openPopupRegisterOrganizacao, setOpenPopupRegisterOrganizacao] = useState(false);
    const [openPopupSucessful, setOpenPopupSucessful] = useState(false);


    const logIn = () => {
        setOpenPopupLogin(true);

    }

    const signUp = () => {
        setOpenPopupRegister(true);
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
            setOpenPopupSucessful(true);
        }

        if (popup === "isRegisterVoluntario") {
            setOpenPopupRegisterVoluntario(false);
            setOpenPopupSucessful(true);
        }
    };

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([]);

    //vai buscar todos os valores de login da BD e mete em loggedIns
    useEffect(() => {
        const getLoggedIn = async () => {
            const loggedInFromServer = await fetchLoggedIn();
            setLoggedIns(loggedInFromServer);
        };

        getLoggedIn();
    }, []);

    useEffect(() => {
        checkLogin();
    }, [loggedIns]);

    const fetchLoggedIn = async () => {
        const res = await fetch("http://localhost:5000/login");
        const data = await res.json();

        return data;
    };

    const fetchLogin = async (id) => {
        const res = await fetch(`http://localhost:5000/login/${id}`);
        const data = await res.json();

        return data;
    };

    const changeLogginStatus = async (id) => {
        const loginToChange = await fetchLogin(id);
        const updLogin = {
            ...loginToChange,
            isLoggedIn: !loginToChange.isLoggedIn,
        };

        const res = await fetch(`http://localhost:5000/login/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updLogin),
        });

        const data = await res.json();

        setLoggedIns(
            loggedIns.map((element) =>
                element.id === id
                    ? { ...element, isLoggedIn: data.isLoggedIn }
                    : element
            )
        );
    };

    const checkLogin = () => {
        for (const element of loggedIns) {
            if (element.isLoggedIn) {
                setPerfil(element);
            }
        }

    };

    const putLogin = (element) => {
        setPerfil(element);

        changeLogginStatus(element.id);
    };

    const takeOffLogin = () => {
        changeLogginStatus(perfil.id);
        setPerfil(null);
    };

    return (
        <>
            <AppBar position="static" sx={{ bgcolor: "#344D67" }}>
                <Toolbar>
                    <Link
                       to="/"
                        className={style.headerLink}
                        style={{
                            marginRight: "12px",
                            width: "3%",
                        }}
                    >
                        <img
                            src="/logo.png"
                            alt="logo"
                            className={style.headerImage}
                        />
                    </Link>
                    <Link to="/" className={style.headerLink}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#EFF5F5",
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".2rem",
                            }}
                        >
                            HELPING TOGETHER
                        </Typography>
                    </Link>
                   
                    <Stack
                        direction="row"
                        spacing={2}
                        className={style.headerButton}
                    >
                       <Link className={style.headerLink} to="/Voluntariados" onClick={() => this.forceUpdate()}> 
                       <Button
                            size="large"
                            sx={{
                                font: "bold 14px/1.4 'Open Sans', arial, sans-serif",
                                letterSpacing: "0.15em",
                                color: "#EFF5F5",}}
                            className={style.headerOtherButtons}
                        >
                            Voluntariados
                        </Button>
                        </Link>
                        <Link className={style.headerLink} to="/Organizacoes" onClick={() => this.forceUpdate()}>
                            <Button
                            size="large"
                            sx={{
                                font: "bold 14px/1.4 'Open Sans', arial, sans-serif",
                                letterSpacing: "0.15em",
                                color: "#EFF5F5",}}
                            className={style.headerOtherButtons}
                        >
                            Organizações
                        </Button>
                        </Link>
                        {!perfil ? 
                            <>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "#cbd2d2",
                                        },
                                        backgroundColor: "#EFF5F5",
                                        textTransform: "none",
                                        borderRadius: "20px",
                                        color: "#344D67",
                                    }}
                                    onClick={logIn}
                                >
                                    Entrar
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        "&:hover": {
                                            border: " 1px solid #cbd2d2",
                                        },
                                        border: " 1px solid #EFF5F5",
                                        textTransform: "none",
                                        borderRadius: "20px",
                                        color: "#EFF5F5",
                                    }}
                                    onClick={signUp}
                                >
                                    Registar
                                </Button>
                            </>
                        : 
                            <UserProfileButton
                                id={perfil.id}
                                name={perfil.name}
                                typePerfil={perfil.typePerfil}
                                image={perfil.image}
                                takeOffLogin={takeOffLogin}
                            />
                            
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
            <Popup
                tipo="registerSucessful"
                openPopup={openPopupSucessful}
                setOpenPopup={setOpenPopupSucessful}
            >
            </Popup>
        </>
    )
}

export default Header;

